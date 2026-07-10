"use client"

import { AlteilLogo } from "@/components/brand/alteil-logo"

export function SiteFooter({
  navLinks,
  footer,
}: {
  navLinks: readonly { label: string; href: string }[]
  footer: { rights: string; legal: readonly string[] }
}) {
  return (
    <footer className="py-10 px-6 md:px-12 lg:px-20 border-t border-foreground/6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <AlteilLogo markClassName="w-5 h-5 text-foreground" />
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} className="text-xs text-foreground/35 hover:text-foreground/70 transition-colors tracking-widest">{link.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-6">
          {footer.legal.map(label => (
            <a key={label} href="#" className="text-xs text-foreground/25 hover:text-foreground/55 transition-colors tracking-widest">{label}</a>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-foreground/4">
        <span className="text-xs text-foreground/20">{footer.rights}</span>
      </div>
    </footer>
  )
}
