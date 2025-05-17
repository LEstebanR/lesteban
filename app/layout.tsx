import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luis Esteban Ramirez | Software Developer",
  description:
    "Portfolio personal de Luis Esteban Ramirez, desarrollador de software especializado en desarrollo web y aplicaciones. Experiencia en React, TypeScript, y desarrollo full-stack.",
  keywords: [
    "desarrollador de software",
    "desarrollador web",
    "React",
    "TypeScript",
    "full-stack",
    "frontend",
    "portfolio",
    "Luis Esteban Ramirez",
  ],
  authors: [{ name: "Luis Esteban Ramirez" }],
  creator: "Luis Esteban Ramirez",
  publisher: "Luis Esteban Ramirez",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://lesteban.dev",
    title: "Luis Esteban Ramirez | Software Developer",
    description:
      "Portfolio personal de Luis Esteban Ramirez, desarrollador de software especializado en desarrollo web y aplicaciones.",
    siteName: "LEsteban Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis Esteban Ramirez | Software Developer",
    description:
      "Portfolio personal de Luis Esteban Ramirez, desarrollador de software especializado en desarrollo web y aplicaciones.",
    creator: "@lestebanr",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "gv-xgsjg4sm7rtc4i.dv.googlehosted.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col items-center justify-center`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="mt-16 px-2 lg:w-3/6 lg:px-0 2xl:w-2/6">
            {children}
            <Analytics />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
