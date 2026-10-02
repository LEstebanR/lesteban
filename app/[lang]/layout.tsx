import { getDictionary } from '@/app/[lang]/dictionaries'
import '@/app/globals.css'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

import type { Metadata } from 'next'

import { Geist, Geist_Mono, Tektur } from 'next/font/google'

import { BreadcrumbProvider } from '@/components/breadcrumb-provider'
import { SeasonNight } from '@/components/season-night'
import { SeasonSync } from '@/components/season-sync'
import { ThemeProvider } from '@/components/theme-provider'
import { Footer } from '@/components/ui/footer'
import { Header } from '@/components/ui/header'
import { ScrollToTop } from '@/components/ui/scroll-to-top'

import { BASE_URL, SITE_NAME, TWITTER_HANDLE } from '@/lib/constants'
import { SEASON_SCRIPT } from '@/lib/season'
import { getCanonicalUrl } from '@/lib/utils'

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
  display: 'swap',
})

const tektur = Tektur({
  variable: '--font-tektur',
  subsets: ['latin'],
  display: 'swap',
  axes: ['wdth'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

type LayoutParams = {
  params: Promise<{
    lang: string
  }>
}

const homeCopy = {
  en: {
    title: 'Luis Esteban Ramirez | Software Developer',
    description:
      'Personal portfolio of Luis Esteban Ramirez, software developer specialized in web development and applications. Experience in React, TypeScript, and full-stack development.',
    keywords: [
      'Luis Esteban',
      'Software Developer',
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Colombia',
      'Portfolio',
    ],
  },
  es: {
    title: 'Luis Esteban Ramírez | Desarrollador de Software',
    description:
      'Portafolio personal de Luis Esteban Ramírez, desarrollador de software especializado en desarrollo web y aplicaciones. Experiencia en React, TypeScript y desarrollo full-stack.',
    keywords: [
      'Luis Esteban',
      'Desarrollador de Software',
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Colombia',
      'Portafolio',
    ],
  },
} as const

export async function generateMetadata({
  params,
}: LayoutParams): Promise<Metadata> {
  const { lang } = await params
  const validLang = lang === 'es' ? 'es' : 'en'
  const path = `/${validLang}`
  const canonicalUrl = getCanonicalUrl(path)
  const alternateEn = getCanonicalUrl('/en')
  const alternateEs = getCanonicalUrl('/es')
  const { title, description, keywords } = homeCopy[validLang]

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    keywords: [...keywords],
    authors: [{ name: 'Luis Esteban Ramirez' }],
    creator: 'Luis Esteban Ramirez',
    publisher: 'Luis Esteban Ramirez',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: alternateEn,
        es: alternateEs,
        'x-default': alternateEn,
      },
    },
    openGraph: {
      type: 'website',
      locale: validLang === 'en' ? 'en_US' : 'es_ES',
      alternateLocale: validLang === 'en' ? 'es_ES' : 'en_US',
      url: canonicalUrl,
      title,
      description,
      siteName: `${SITE_NAME} Portfolio`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: TWITTER_HANDLE,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'gv-xgsjg4sm7rtc4i.dv.googlehosted.com',
    },
  }
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Luis Esteban Ramírez',
  url: BASE_URL,
  sameAs: [
    'https://github.com/LEstebanR',
    'https://www.linkedin.com/in/lestebanr/',
  ],
  jobTitle: 'Software Developer',
  knowsAbout: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const validLang = lang === 'es' ? 'es' : 'en'
  const dictionary = await getDictionary(validLang)
  return (
    <html lang={validLang} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: SEASON_SCRIPT }} />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Luis Esteban — Blog"
          href="/feed.xml"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${geist.variable} ${tektur.variable} ${geistMono.variable} flex min-h-screen flex-col`}
      >
        <SeasonSync lang={validLang} />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <BreadcrumbProvider>
            <a
              href="#main-content"
              className="focus:bg-background focus:text-foreground focus:ring-ring sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:px-4 focus:py-2 focus:ring-2"
            >
              {dictionary['skip-to-content']}
            </a>
            <div className="flex w-full flex-1 flex-col items-center justify-center">
              <Header />
              <main
                id="main-content"
                className="mt-16 flex w-full max-w-6xl flex-1 flex-col px-4 md:px-8"
              >
                {children}
                <Analytics />
              </main>
            </div>
            <Footer />
            <ScrollToTop />
            <SeasonNight />
          </BreadcrumbProvider>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
