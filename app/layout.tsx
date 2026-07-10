import React from "react"
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { content } from '@/lib/content'
import { fontVariablesFallback } from '@/lib/fonts'
import './globals.css'

const siteUrl = 'https://alteilsolutions.com'
const siteName = 'Alteil Solutions'
const defaultMeta = content.es.meta
const ogDescription = 'Convertimos operativas reales en SaaS claros, escalables y fáciles de usar.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultMeta.title,
  description: defaultMeta.description,
  applicationName: siteName,
  creator: siteName,
  publisher: siteName,
  keywords: ['SaaS B2B', 'software a medida', 'automatización de procesos', 'herramientas internas', 'consultora tecnológica'],
  authors: [{ name: siteName }],
  alternates: {
    canonical: '/',
    languages: {
      es: '/',
      en: '/',
      ca: '/',
      'x-default': '/',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: defaultMeta.title,
    description: ogDescription,
    type: 'website',
    url: '/',
    siteName,
    locale: 'es_ES',
    alternateLocale: ['en_US', 'ca_ES'],
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultMeta.title,
    description: 'SaaS B2B y herramientas digitales para resolver problemas operativos reales.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '32x32',
      },
      {
        url: '/icon-light-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    description: defaultMeta.description,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    description: defaultMeta.description,
    inLanguage: ['es', 'en', 'ca'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteName,
    url: siteUrl,
    description: defaultMeta.description,
    serviceType: [
      'Software a medida',
      'SaaS B2B',
      'Herramientas digitales',
      'Automatización de procesos',
    ],
  },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${fontVariablesFallback} bg-background`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Courier+Prime:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
