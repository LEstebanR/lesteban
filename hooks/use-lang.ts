import { usePathname } from 'next/navigation'

export function useLang(): 'en' | 'es' {
  const pathname = usePathname()
  const segment = pathname.split('/')[1]
  return segment === 'es' ? 'es' : 'en'
}
