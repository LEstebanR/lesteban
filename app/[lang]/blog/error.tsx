'use client'

import { useEffect } from 'react'

import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Link } from '@/components/ui/link'

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const pathname = usePathname()
  const lang = pathname.split('/')[1] as 'en' | 'es'

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4">
      <h2 className="text-2xl font-bold">
        {lang === 'es' ? 'Algo salió mal!' : 'Something went wrong!'}
      </h2>
      <p className="text-muted-foreground text-center">
        {lang === 'es'
          ? 'Ocurrió un error al cargar el blog.'
          : 'An error occurred while loading the blog.'}
      </p>
      <div className="flex gap-4">
        <Button onClick={() => reset()} variant="default">
          {lang === 'es' ? 'Intentar de nuevo' : 'Try again'}
        </Button>
        <Link href={`/${lang}`}>
          <Button variant="outline">
            {lang === 'es' ? 'Volver al inicio' : 'Go home'}
          </Button>
        </Link>
      </div>
    </div>
  )
}
