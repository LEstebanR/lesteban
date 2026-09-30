'use client'

import { useEffect, useRef } from 'react'

import {
  type FieldNode,
  createNodes,
  forEachLink,
  pointerInfluence,
  stepNodes,
} from '@/lib/neural-field'
import { prefersReducedMotion } from '@/lib/utils'

const LINK_DISTANCE = 140
const POINTER_RADIUS = 200

/**
 * A slow-drifting network of nodes behind the hero. Links brighten and reach
 * toward the pointer. Pauses off-screen and renders a still frame under
 * reduced motion.
 */
export function NeuralField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = prefersReducedMotion()
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
      // Read the resolved token (the build may emit it as lab()/oklch()/rgb())
      color =
        getComputedStyle(canvas).getPropertyValue('--primary').trim() || color
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
      nodes = createNodes(Math.round((width * height) / 16000), width, height)
      boosts = new Float32Array(nodes.length)
      rect = canvas.getBoundingClientRect()
      measuredAt = window.scrollY
      readColor()
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      // Pointer influence once per node per frame, reused by every link
      nodes.forEach((node, i) => {
        boosts[i] = pointerInfluence(node, pointer, POINTER_RADIUS)
      })
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
      stepNodes(nodes, width, height)
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
    const themeObserver = new MutationObserver(readColor)

    resize()
    draw()
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
