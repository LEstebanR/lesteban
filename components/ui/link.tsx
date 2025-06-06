import { default as NextLink } from 'next/link'

export function Link({
  children,
  href,
  withIcon = false,
  icon,
}: {
  children: React.ReactNode
  href: string
  withIcon?: boolean
  icon?: React.ReactNode
}) {
  return (
    <NextLink
      href={href}
      target="_blank"
      className="hover:text-primary hover:animate-underline-link decoration-2 underline-offset-4 transition-all duration-300 hover:underline"
    >
      <div className="flex flex-row items-center gap-1">
        {withIcon && icon}
        {children}
      </div>
    </NextLink>
  )
}
