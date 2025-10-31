'use client'

import { useEffect } from 'react'

import { useBreadcrumb } from './breadcrumb-provider'

interface SetBreadcrumbProps {
  path: string
  title: string
}

export function SetBreadcrumb({ path, title }: SetBreadcrumbProps) {
  const { setCustomBreadcrumb, clearCustomBreadcrumb } = useBreadcrumb()

  useEffect(() => {
    setCustomBreadcrumb(path, title)

    return () => {
      clearCustomBreadcrumb(path)
    }
  }, [path, title, setCustomBreadcrumb, clearCustomBreadcrumb])

  return null
}
