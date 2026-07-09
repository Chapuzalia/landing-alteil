import React from "react"
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { fontVariablesFallback } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alteil Solutions — SaaS a medida para empresas',
  description: 'Creamos SaaS y herramientas digitales B2B para convertir procesos manuales en software claro, escalable y útil.',
  keywords: ['SaaS B2B', 'software a medida', 'automatización de procesos', 'herramientas internas', 'consultora tecnológica'],
  authors: [{ name: 'Alteil Solutions' }],
  openGraph: {
    title: 'Alteil Solutions — SaaS a medida para empresas',
    description: 'Convertimos operativas reales en SaaS claros, escalables y fáciles de usar.',
    type: 'website',
    url: 'https://alteil.io',
    siteName: 'Alteil Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alteil Solutions — SaaS a medida para empresas',
    description: 'SaaS B2B y herramientas digitales para resolver problemas operativos reales.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

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
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
