'use client'

import { useLayoutEffect } from 'react'

import { applySeason } from '@/lib/season'

/**
 * Re-applies the season flag after a language switch: the new `[lang]` root
 * layout renders a fresh `<html>`, and the head script only runs on full page
 * loads. Runs before paint, and before the page's effects read the flag.
 */
export function SeasonSync({ lang }: { lang: string }) {
  useLayoutEffect(() => {
    applySeason()
  }, [lang])
  return null
}
