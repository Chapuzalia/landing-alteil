import type { MetadataRoute } from 'next'

const siteUrl = 'https://alteil.io'

const routes = ['/', '/privacidad', '/terminos'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${siteUrl}${route === '/' ? '' : route}`,
    lastModified,
    changeFrequency: route === '/' ? 'monthly' : 'yearly',
    priority: route === '/' ? 1 : 0.3,
  }))
}
