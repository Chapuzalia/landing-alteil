"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from "lucide-react"
import { AlteilLogo } from "@/components/brand/alteil-logo"
import { DecryptedText } from "@/components/animations/decrypted-text"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { languages, type Language } from "@/lib/content"

type NavLink = {
  label: string
  href: string
  targetId: string
}

type MobileNavProps = {
  links: readonly NavLink[]
  cta: string
  language: Language
  languageLabel: string
  openMenuLabel: string
  closeMenuLabel: string
  onLanguageChange: (language: Language) => void
}

export function MobileNav({
  links,
  cta,
  language,
  languageLabel,
  openMenuLabel,
  closeMenuLabel,
  onLanguageChange,
}: MobileNavProps) {
  const [open, setOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setOpen(false)
    setLanguageOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (!element) return

    const headerOffset = 100
    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: elementPosition - headerOffset, behavior: "smooth" })
    setOpen(false)
    setLanguageOpen(false)
  }

  const isGlass = isScrolled || open
  const navTextClass = isGlass ? "text-black/58 hover:text-black" : "text-foreground/62 hover:text-foreground"
  const actionTextClass = isGlass ? "text-black group-hover:text-white" : "text-foreground group-hover:text-background"
  const actionIconClass = isGlass ? "text-black group-hover:text-white" : "text-foreground group-hover:text-background"
  const actionFillClass = isGlass ? "bg-black" : "bg-foreground"
  const actionBorderClass = isGlass ? "border-black/15" : "border-foreground/18"
  const iconButtonClass = isGlass
    ? "border-black/10 text-black hover:bg-black/4"
    : "border-foreground/12 text-foreground hover:bg-foreground/6"
  const languageButtonClass = isGlass
    ? "border-black/10 text-black hover:border-black/20 hover:bg-black/4"
    : "border-foreground/12 text-foreground hover:border-foreground/20 hover:bg-foreground/4"
  const activeLanguage = languages.find((item) => item.code === language) ?? languages[0]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "px-4 pt-4" : "px-0 pt-0"}`}>
      <div
        className={`relative mx-auto max-w-7xl transition-all duration-500 ${
          isGlass
            ? "rounded-2xl border border-white/65 bg-white/82 px-5 py-3 text-black shadow-[0_18px_70px_rgb(0_0_0/0.18),inset_0_1px_0_rgb(255_255_255/0.95),inset_0_-1px_0_rgb(0_0_0/0.06)] backdrop-blur-2xl backdrop-saturate-150"
            : "bg-transparent px-6 py-5 text-foreground shadow-none backdrop-blur-0"
        }`}
      >
        {isGlass && (
          <>
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(135deg,rgb(255_255_255/0.58),rgb(255_255_255/0.18)_42%,rgb(255_255_255/0.48))]" />
            <div className="pointer-events-none absolute -top-16 left-1/4 h-32 w-1/2 rounded-full bg-white/45 blur-3xl" />
          </>
        )}

        <div className="relative z-10 grid grid-cols-[auto_auto] items-center justify-between gap-6 md:grid-cols-[1fr_auto_1fr]">
          <a href="#" onClick={handleLogoClick} className="flex items-center cursor-pointer justify-self-start">
            <AlteilLogo
              className="gap-2.5"
              markClassName={`w-8 h-8 ${isGlass ? "text-black" : "text-foreground"}`}
              textClassName={isGlass ? "text-black" : "text-foreground"}
            />
          </a>

          <nav className="hidden md:flex items-center justify-center gap-8 justify-self-center">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.targetId)}
                className={`text-sm transition-colors cursor-pointer ${navTextClass}`}
              >
                <DecryptedText text={link.label} />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center justify-end gap-3 justify-self-end">
            <div className="relative">
              <button
                type="button"
                onClick={() => setLanguageOpen((value) => !value)}
                className={`flex h-10 items-center gap-2 rounded-full border bg-transparent px-3 text-xs tracking-widest outline-none transition-colors ${languageButtonClass}`}
                aria-label={languageLabel}
                aria-expanded={languageOpen}
              >
                <span>{activeLanguage.short}</span>
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${languageOpen ? "rotate-180" : ""}`} />
              </button>
              {languageOpen && (
                <div className={`absolute right-0 top-12 z-50 min-w-36 overflow-hidden rounded-2xl border p-1.5 shadow-[0_18px_55px_rgb(0_0_0/0.16),inset_0_1px_0_rgb(255_255_255/0.55)] backdrop-blur-2xl backdrop-saturate-150 ${
                  isGlass
                    ? "border-white/70 bg-white/88 text-black"
                    : "border-foreground/10 bg-card/88 text-foreground"
                }`}>
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => {
                        onLanguageChange(item.code)
                        setLanguageOpen(false)
                      }}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-xs tracking-widest transition-colors ${
                        language === item.code
                          ? isGlass
                            ? "bg-black text-white"
                            : "bg-foreground text-background"
                          : isGlass
                            ? "text-black/58 hover:bg-black/5 hover:text-black"
                            : "text-foreground/58 hover:bg-foreground/5 hover:text-foreground"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className={language === item.code ? "opacity-70" : isGlass ? "text-black/30" : "text-foreground/30"}>{item.short}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <ThemeToggle className={isGlass ? "border-black/10 text-black hover:text-black hover:border-black/20 hover:bg-black/4" : ""} />
            <button className={`relative flex items-center gap-0 border ${actionBorderClass} rounded-full pl-5 pr-1 py-1 transition-all duration-300 group overflow-hidden`}>
              <span className={`absolute inset-0 rounded-full scale-x-0 origin-right ${actionFillClass} group-hover:scale-x-100 transition-transform duration-300`} />
              <span className={`text-sm pr-3 relative z-10 ${actionTextClass} transition-colors duration-300`}>
                <DecryptedText text={cta} />
              </span>
              <span className="w-8 h-8 rounded-full flex items-center justify-center relative z-10">
                <ArrowRight className={`w-4 h-4 ${isGlass ? "text-black" : "text-foreground"} group-hover:opacity-0 absolute transition-opacity duration-300`} />
                <ArrowUpRight className={`w-4 h-4 ${actionIconClass} opacity-0 group-hover:opacity-100 transition-all duration-300`} />
              </span>
            </button>
          </div>

          <button
            type="button"
            className={`md:hidden flex items-center justify-center w-10 h-10 rounded-full border transition-colors justify-self-end ${iconButtonClass}`}
            onClick={() => {
              setOpen((value) => !value)
              setLanguageOpen(false)
            }}
            aria-label={open ? closeMenuLabel : openMenuLabel}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <nav className="relative z-10 md:hidden mt-6 pb-3 flex flex-col gap-4 border-t border-black/8 pt-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.targetId)}
                className="text-sm text-black/60 hover:text-black transition-colors cursor-pointer"
              >
                <DecryptedText text={link.label} />
              </a>
            ))}

            <div className="flex flex-col gap-3 mt-3 pt-4 border-t border-black/8">
              <div className="flex items-center gap-2" aria-label={languageLabel}>
                {languages.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => onLanguageChange(item.code)}
                    className={`h-9 rounded-full border px-3 text-xs tracking-widest transition-colors ${
                      language === item.code
                        ? "border-black/30 bg-black text-white"
                        : "border-black/10 text-black/55 hover:text-black hover:bg-black/4"
                    }`}
                  >
                    {item.short}
                  </button>
                ))}
              </div>
              <div className="w-fit">
                <ThemeToggle className="border-black/10 text-black hover:text-black hover:border-black/20 hover:bg-black/4" />
              </div>
              <button className="relative flex items-center gap-0 border border-black/15 rounded-full pl-5 pr-1 py-1 w-fit transition-all duration-300 group overflow-hidden">
                <span className="absolute inset-0 rounded-full scale-x-0 origin-right bg-black group-hover:scale-x-100 transition-transform duration-300" />
                <span className="text-sm pr-3 relative z-10 text-black group-hover:text-white transition-colors duration-300">
                  <DecryptedText text={cta} />
                </span>
                <span className="w-8 h-8 rounded-full flex items-center justify-center relative z-10">
                  <ArrowRight className="w-4 h-4 text-black group-hover:opacity-0 absolute transition-opacity duration-300" />
                  <ArrowUpRight className="w-4 h-4 text-black opacity-0 group-hover:opacity-100 group-hover:text-white transition-all duration-300" />
                </span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

