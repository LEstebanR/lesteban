import { OG_COLORS, getLogoDataUri } from '@/lib/og'

export const ogImageSize = { width: 1200, height: 630 }
export const ogImageContentType = 'image/png'

export function BrandOgImage({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 28,
        padding: '96px',
        backgroundColor: OG_COLORS.background,
      }}
    >
      {/* next/image isn't supported inside next/og's ImageResponse (Satori) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={getLogoDataUri()}
        alt="lesteban.dev logo"
        width={80}
        height={80}
        style={{ borderRadius: 20 }}
      />
      <div
        style={{
          display: 'flex',
          fontSize: 28,
          fontWeight: 700,
          color: OG_COLORS.accent,
          letterSpacing: 2,
          textTransform: 'uppercase',
        }}
      >
        {eyebrow}
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 64,
          fontWeight: 700,
          color: OG_COLORS.title,
          lineHeight: 1.15,
          maxWidth: 980,
        }}
      >
        {title}
      </div>
      {subtitle && (
        <div
          style={{
            display: 'flex',
            fontSize: 30,
            color: OG_COLORS.subtitle,
            lineHeight: 1.4,
            maxWidth: 900,
          }}
        >
          {subtitle}
        </div>
      )}
    </div>
  )
}
