import '@/app/globals.css'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

import type { Metadata } from 'next'

import { DM_Sans, Geist, Geist_Mono, Space_Grotesk } from 'next/font/google'

import { BreadcrumbProvider } from '@/components/breadcrumb-provider'
import { ThemeProvider } from '@/components/theme-provider'
import { Footer } from '@/components/ui/footer'
import { Header } from '@/components/ui/header'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Luis Esteban Ramirez | Software Developer',
  description:
    'Personal portfolio of Luis Esteban Ramirez, software developer specialized in web development and applications. Experience in React, TypeScript, and full-stack development.',
  keywords: [
    'software developer',
    'web developer',
    'React',
    'TypeScript',
    'full-stack',
    'frontend',
    'portfolio',
    'Luis Esteban Ramirez',
    'desarrollador de software',
    'desarrollador web',
    'desarrollo full-stack',
  ],
  authors: [{ name: 'Luis Esteban Ramirez' }],
  creator: 'Luis Esteban Ramirez',
  publisher: 'Luis Esteban Ramirez',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'es_ES',
    url: 'https://lesteban.dev',
    title: 'Luis Esteban Ramirez | Software Developer',
    description:
      'Personal portfolio of Luis Esteban Ramirez, software developer specialized in web development and applications. Experience in React, TypeScript, and full-stack development.',
    siteName: 'LEsteban Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Luis Esteban Ramirez - Software Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luis Esteban Ramirez | Software Developer',
    description:
      'Personal portfolio of Luis Esteban Ramirez, software developer specialized in web development and applications. Experience in React, TypeScript, and full-stack development.',
    creator: '@lestebanr',
    images: ['/og-image.jpg'],
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="description"
          content="Luis Esteban Ramirez is a software developer specialized in web development and applications. Experience in React, TypeScript, and full-stack development."
        />
        <meta
          name="keywords"
          content="Desarrollador web, Next.js, React, Portafolio, Esteban, Luis Esteban Ramirez, lesteban, developer, frontend, backend, fullstack, software, developer, developer web, developer frontend, developer backend, developer fullstack, developer software, developer web, developer frontend, developer backend, developer fullstack, developer software"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${spaceGrotesk.variable} flex min-h-screen flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <BreadcrumbProvider>
            <div className="flex w-full flex-1 flex-col items-center justify-center">
              <Header />
              <main className="mt-16 flex w-full flex-1 flex-col px-2 md:px-4 lg:w-3/6 lg:px-0 2xl:w-2/6">
                {children}
                <Analytics />
              </main>
            </div>
            <Footer />
          </BreadcrumbProvider>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
