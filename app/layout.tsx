import React from "react"
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/providers/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alteil Solutions — Intelligent Software for Scale',
  description: 'We help businesses streamline operations, connect systems, and accelerate growth through intelligent software solutions built for scale, clarity, and measurable impact.',
  keywords: ['software solutions', 'operations automation', 'system integration', 'enterprise software', 'business analytics'],
  authors: [{ name: 'Alteil Solutions' }],
  openGraph: {
    title: 'Alteil Solutions — Intelligent Software for Scale',
    description: 'Streamline operations, connect systems, and accelerate growth with intelligent software built for scale.',
    type: 'website',
    url: 'https://alteil.io',
    siteName: 'Alteil Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alteil Solutions — Intelligent Software for Scale',
    description: 'Streamline operations, connect systems, and accelerate growth with intelligent software built for scale.',
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
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Courier+Prime:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&display=swap"
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
