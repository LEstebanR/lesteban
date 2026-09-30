import { OG_COLORS, getBrandMarkDataUri, getOgFonts, withAlpha } from '@/lib/og'

export const ogImageSize = { width: 1200, height: 630 }
export const ogImageContentType = 'image/png'

/** Fonts to pass to every `ImageResponse` that renders `BrandOgImage`. */
export const ogImageOptions = () => ({ ...ogImageSize, fonts: getOgFonts() })

const TICK = 34

function CornerTicks() {
  const base = {
    position: 'absolute' as const,
    width: TICK,
    height: TICK,
    borderColor: OG_COLORS.primary,
    borderStyle: 'solid' as const,
    opacity: 0.8,
  }
  return (
    <>
      <div style={{ ...base, top: 28, left: 28, borderWidth: '3px 0 0 3px' }} />
      <div
        style={{ ...base, top: 28, right: 28, borderWidth: '3px 3px 0 0' }}
      />
      <div
        style={{ ...base, bottom: 28, left: 28, borderWidth: '0 0 3px 3px' }}
      />
      <div
        style={{ ...base, bottom: 28, right: 28, borderWidth: '0 3px 3px 0' }}
      />
    </>
  )
}

function titleSize(title: string, hasImage: boolean) {
  const scale = hasImage ? 0.8 : 1
  if (title.length > 44) return 56 * scale
  if (title.length > 22) return 72 * scale
  return 112 * scale
}

/**
 * Open Graph card in the Signal console style: ink-navy canvas, coordinate
 * grid, aurora glow, HUD corner ticks and Tektur display type. Optionally
 * shows a framed image (blog covers) on the right.
 */
export function BrandOgImage({
  eyebrow,
  title,
  subtitle,
  status,
  image,
}: {
  eyebrow: string
  title: string
  subtitle?: string
  status?: string
  image?: { src: string; position?: string }
}) {
  // The home card (with a status line) shows the role as an accent line
  const accent = Boolean(status)

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        backgroundColor: OG_COLORS.background,
        backgroundImage: `radial-gradient(circle at 88% 0%, ${withAlpha(OG_COLORS.primary, 0.3)}, transparent 48%), radial-gradient(circle at 30% 85%, ${withAlpha(OG_COLORS.secondary, 0.2)}, transparent 42%)`,
        fontFamily: 'Geist',
        color: OG_COLORS.foreground,
      }}
    >
      {/* Coordinate grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          backgroundImage: `linear-gradient(${withAlpha(OG_COLORS.primary, 0.07)} 1px, transparent 1px), linear-gradient(90deg, ${withAlpha(OG_COLORS.primary, 0.07)} 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />
      <CornerTicks />

      <div
        style={{
          position: 'relative',
          display: 'flex',
          flex: 1,
          gap: 56,
          padding: '76px 88px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flex: 1,
          }}
        >
          {/* Header row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            {/* next/image isn't supported inside next/og's ImageResponse (Satori) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={getBrandMarkDataUri()}
              alt="lesteban.dev"
              width={52}
              height={52}
            />
            <div
              style={{
                display: 'flex',
                fontFamily: 'Geist Mono',
                fontSize: 24,
                color: OG_COLORS.muted,
              }}
            >
              {eyebrow}
            </div>
          </div>

          {/* Title block */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            {status && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  fontFamily: 'Geist Mono',
                  fontSize: 22,
                  color: OG_COLORS.muted,
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 10,
                    backgroundColor: OG_COLORS.primary,
                  }}
                />
                {status}
              </div>
            )}
            <div
              style={{
                display: 'flex',
                fontFamily: 'Tektur',
                fontWeight: 600,
                fontSize: titleSize(title, Boolean(image)),
                lineHeight: 0.95,
                letterSpacing: -1,
                textTransform: 'uppercase',
                color: OG_COLORS.foreground,
              }}
            >
              {title}
            </div>
            {subtitle && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: accent ? 'Tektur' : 'Geist',
                  fontWeight: accent ? 600 : 400,
                  fontSize: accent ? 38 : 28,
                  lineHeight: 1.35,
                  color: accent ? OG_COLORS.primary : OG_COLORS.muted,
                  maxWidth: 900,
                }}
              >
                {subtitle}
                {accent && (
                  <div
                    style={{
                      width: 20,
                      height: 32,
                      marginLeft: 12,
                      backgroundColor: OG_COLORS.primary,
                    }}
                  />
                )}
              </div>
            )}
          </div>

          {/* Footer row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'Geist Mono',
              fontSize: 20,
              color: OG_COLORS.muted,
            }}
          >
            <span>Colombia</span>
            <span>UTC−5</span>
          </div>
        </div>

        {image && (
          <div
            style={{
              display: 'flex',
              alignSelf: 'center',
              padding: 14,
              border: `2px solid ${OG_COLORS.border}`,
              backgroundColor: OG_COLORS.card,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.src}
              alt=""
              width={360}
              height={420}
              style={{ objectFit: 'cover', objectPosition: image.position }}
            />
          </div>
        )}
      </div>
    </div>
  )
}
