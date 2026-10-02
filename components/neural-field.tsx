'use client'

import { useEffect, useRef } from 'react'

import {
  type FieldNode,
  type Web,
  createNodes,
  createWeb,
  forEachLink,
  forEachThread,
  pointerInfluence,
  stepNodes,
  stepWeb,
} from '@/lib/neural-field'
import { isHalloweenActive } from '@/lib/season'
import { prefersReducedMotion } from '@/lib/utils'

const LINK_DISTANCE = 140
const POINTER_RADIUS = 200

/**
 * A slow-drifting network of nodes behind the hero. Links brighten and reach
 * toward the pointer. During the Halloween season the network is spun into a
 * web from the top-right corner instead, trembling where the pointer touches
 * it. Pauses off-screen and renders a still frame under reduced motion.
 */
export function NeuralField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = prefersReducedMotion()
    const weave = isHalloweenActive()
    let web: Web | null = null
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width = 0
    let height = 0
    let nodes: FieldNode[] = []
    let boosts = new Float32Array(0)
    let rect = canvas.getBoundingClientRect()
    let measuredAt = window.scrollY
    let pointer: { x: number; y: number } | null = null
    let color = 'rgb(95, 227, 240)'
    let raf = 0
    let visible = true

    const readColor = () => {
      // Read the resolved token (the build may emit it as lab()/oklch()/rgb()).
      // The web is spun in pale cobweb silk so the jack-o'-lantern stays the
      // only orange in the corner.
      color =
        getComputedStyle(canvas)
          .getPropertyValue(weave ? '--silk' : '--primary')
          .trim() || color
      ctx.strokeStyle = color
      ctx.fillStyle = color
      ctx.lineWidth = 1
    }

    const resize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      web = weave ? createWeb(width, height) : null
      nodes = web
        ? web.nodes
        : createNodes(Math.round((width * height) / 16000), width, height)
      boosts = new Float32Array(nodes.length)
      rect = canvas.getBoundingClientRect()
      measuredAt = window.scrollY
      readColor()
      // Resizing clears the canvas; redraw so the still frame (reduced motion)
      // doesn't vanish until the next animation frame that never comes
      draw()
    }

    const drawWeb = (current: Web) => {
      // Hub threads: from the corner to the first ring
      ctx.globalAlpha = 0.42
      ctx.beginPath()
      for (let spoke = 0; spoke < current.spokes; spoke++) {
        ctx.moveTo(width, 0)
        ctx.lineTo(nodes[spoke].x, nodes[spoke].y)
      }
      ctx.stroke()
      forEachThread(current, (a, b, kind) => {
        const from = nodes[a]
        const to = nodes[b]
        // Silk thins out toward the rim so the web stays in its corner
        const rim = Math.floor(a / current.spokes) / current.rings
        ctx.globalAlpha =
          0.45 * (1 - rim) + Math.max(boosts[a], boosts[b]) * 0.55
        ctx.beginPath()
        ctx.moveTo(from.x, from.y)
        if (kind === 'ring') {
          // Ring threads sag toward the hub, scalloped like spun silk
          const midX = (from.x + to.x) / 2
          const midY = (from.y + to.y) / 2
          ctx.quadraticCurveTo(
            midX + (width - midX) * 0.07,
            midY - midY * 0.07,
            to.x,
            to.y
          )
        } else {
          ctx.lineTo(to.x, to.y)
        }
        ctx.stroke()
      })
      nodes.forEach((node, i) => {
        if (boosts[i] > 0.2) {
          ctx.globalAlpha = boosts[i]
          ctx.fillRect(node.x - 1, node.y - 1, 2, 2)
        }
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      // Pointer influence once per node per frame, reused by every link
      nodes.forEach((node, i) => {
        boosts[i] = pointerInfluence(node, pointer, POINTER_RADIUS)
      })
      if (web) {
        drawWeb(web)
        return
      }
      forEachLink(nodes, LINK_DISTANCE, (a, b, strength) => {
        ctx.globalAlpha =
          strength * (0.14 + Math.max(boosts[a], boosts[b]) * 0.6)
        ctx.beginPath()
        ctx.moveTo(nodes[a].x, nodes[a].y)
        ctx.lineTo(nodes[b].x, nodes[b].y)
        ctx.stroke()
      })
      nodes.forEach((node, i) => {
        const boost = boosts[i]
        ctx.globalAlpha = 0.3 + boost * 0.7
        ctx.fillRect(node.x - 1, node.y - 1, 2 + boost * 2, 2 + boost * 2)
        if (boost > 0.35 && pointer) {
          ctx.globalAlpha = boost * 0.4
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(pointer.x, pointer.y)
          ctx.stroke()
        }
      })
    }

    const loop = () => {
      if (web) stepWeb(web.nodes, pointer, POINTER_RADIUS)
      else stepNodes(nodes, width, height)
      draw()
      raf = visible ? requestAnimationFrame(loop) : 0
    }

    // The canvas ignores pointer events; listen on the section around it and
    // re-measure it only after the page has scrolled, not on every move
    const host =
      canvas.closest('section') ?? (canvas.parentElement as HTMLElement)
    const onPointerMove = (event: PointerEvent) => {
      if (window.scrollY !== measuredAt) {
        rect = canvas.getBoundingClientRect()
        measuredAt = window.scrollY
      }
      pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top }
    }
    const onPointerLeave = () => {
      pointer = null
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible && !raf && !reduce) raf = requestAnimationFrame(loop)
    })
    const themeObserver = new MutationObserver(() => {
      readColor()
      draw()
    })

    resize()
    if (!reduce) raf = requestAnimationFrame(loop)
    window.addEventListener('resize', resize)
    host.addEventListener('pointermove', onPointerMove)
    host.addEventListener('pointerleave', onPointerLeave)
    observer.observe(canvas)
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      host.removeEventListener('pointermove', onPointerMove)
      host.removeEventListener('pointerleave', onPointerLeave)
      observer.disconnect()
      themeObserver.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />
}
