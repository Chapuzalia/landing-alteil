"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react"
import { AlteilLogo } from "@/components/brand/alteil-logo"
import { ThemeToggle } from "@/components/theme/theme-toggle"

const NAV_LINKS = [
  { label: "Platform", href: "#platform", targetId: "platform" },
  { label: "Solutions", href: "#agents", targetId: "agents" },
  { label: "Workflow", href: "#workflow", targetId: "workflow" },
  { label: "Integrations", href: "#integrations", targetId: "integrations" },
  { label: "Pricing", href: "#pricing", targetId: "pricing" },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)
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
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "px-4 pt-4" : ""}`}>
      <div
        className={`mx-auto max-w-7xl transition-all duration-300 ${
          isScrolled
            ? "rounded-2xl border border-foreground/[0.08] bg-background/90 px-5 py-3 shadow-[0_16px_50px_rgb(var(--ink-rgb)/0.10)] backdrop-blur-xl"
            : "bg-background/55 px-6 py-5 backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between gap-6">
          <a href="#" onClick={handleLogoClick} className="flex items-center cursor-pointer">
            <AlteilLogo className="gap-2.5" markClassName="w-8 h-8 text-foreground" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.targetId)}
                className="text-sm text-foreground/55 hover:text-foreground transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <button className="relative flex items-center gap-0 border border-foreground/15 rounded-full pl-5 pr-1 py-1 transition-all duration-300 group overflow-hidden">
              <span className="absolute inset-0 rounded-full scale-x-0 origin-right bg-foreground group-hover:scale-x-100 transition-transform duration-300" />
              <span className="text-sm pr-3 relative z-10 text-foreground group-hover:text-background transition-colors duration-300">
                GET STARTED
              </span>
              <span className="w-8 h-8 rounded-full flex items-center justify-center relative z-10">
                <ArrowRight className="w-4 h-4 text-foreground group-hover:opacity-0 absolute transition-opacity duration-300" />
                <ArrowUpRight className="w-4 h-4 text-foreground opacity-0 group-hover:opacity-100 group-hover:text-background transition-all duration-300" />
              </span>
            </button>
          </div>

          <button
            type="button"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-foreground/10 text-foreground hover:bg-foreground/[0.04] transition-colors"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <nav className="md:hidden mt-6 pb-3 flex flex-col gap-4 border-t border-foreground/[0.08] pt-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.targetId)}
                className="text-sm text-foreground/60 hover:text-foreground transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}

            <div className="flex flex-col gap-3 mt-3 pt-4 border-t border-foreground/[0.08]">
              <div className="w-fit">
                <ThemeToggle />
              </div>
              <button className="relative flex items-center gap-0 border border-foreground/15 rounded-full pl-5 pr-1 py-1 w-fit transition-all duration-300 group overflow-hidden">
                <span className="absolute inset-0 rounded-full scale-x-0 origin-right bg-foreground group-hover:scale-x-100 transition-transform duration-300" />
                <span className="text-sm pr-3 relative z-10 text-foreground group-hover:text-background transition-colors duration-300">
                  GET STARTED
                </span>
                <span className="w-8 h-8 rounded-full flex items-center justify-center relative z-10">
                  <ArrowRight className="w-4 h-4 text-foreground group-hover:opacity-0 absolute transition-opacity duration-300" />
                  <ArrowUpRight className="w-4 h-4 text-foreground opacity-0 group-hover:opacity-100 group-hover:text-background transition-all duration-300" />
                </span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}