"use client"

import React, { useCallback, useEffect, useRef, useState } from "react"
import { IntroAnimation } from "@/components/animations/intro-animation"
import { PixelIcon } from "@/components/visuals/pixel-icon"
import { RevealText } from "@/components/animations/reveal-text"
import { StackingAgentCards } from "@/components/visuals/stacking-agent-cards"
import { MobileNav } from "@/components/layout/mobile-nav"
import { AlteilLogo } from "@/components/brand/alteil-logo"
import { content, defaultLanguage, type Language } from "@/lib/content"

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true)
    }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return { ref, inView }
}

function BentoCard({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView(0.1)
  return (
    <div
      ref={ref}
      className={`group relative rounded-2xl border border-foreground/[0.07] bg-card overflow-hidden transition-all duration-700 hover:border-foreground/[0.15] hover:bg-foreground/[0.02] ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms, border-color 0.3s ease, background-color 0.3s ease`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgb(var(--ink-rgb) / 0.03), transparent 60%)" }}
      />
      {children}
    </div>
  )
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] tracking-widest font-sans text-foreground/40 bg-foreground/[0.04]">
      {children}
    </span>
  )
}

function SectionHeader({ icon, tag, title, body }: { icon: "platform" | "agents" | "workflow" | "pricing"; tag: string; title: string; body?: string }) {
  return (
    <div className="mb-16">
      <PixelIcon type={icon} size={40} />
      <div className="mt-4"><Tag>{tag}</Tag></div>
      <RevealText className="mt-5 text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05]">
        {title}
      </RevealText>
      {body && <p className="mt-6 text-sm md:text-base text-foreground/45 leading-relaxed max-w-xl">{body}</p>}
    </div>
  )
}

export default function AlteilLandingPage() {
  const [language, setLanguage] = useState<Language>(defaultLanguage)
  const [submitted, setSubmitted] = useState(false)
  const [heroReady, setHeroReady] = useState(false)
  const t = content[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.title = t.meta.title
  }, [language, t.meta.title])

  const handleIntroDone = useCallback(() => {
    setHeroReady(true)
  }, [])

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
  }

  return (
    <div className="bg-background text-foreground min-h-screen font-sans antialiased">
      <IntroAnimation onDone={handleIntroDone} />
      <MobileNav
        links={t.nav.links}
        cta={t.nav.cta}
        language={language}
        languageLabel={t.nav.languageLabel}
        openMenuLabel={t.nav.openMenu}
        closeMenuLabel={t.nav.closeMenu}
        onLanguageChange={setLanguage}
      />

      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none" style={{ height: "65%", background: "linear-gradient(to top, var(--page-bg) 0%, var(--page-bg) 18%, rgb(var(--page-bg-rgb) / 0.85) 35%, rgb(var(--page-bg-rgb) / 0.5) 55%, rgb(var(--page-bg-rgb) / 0.15) 75%, transparent 100%)" }} />
        <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none" style={{ height: "20%", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", maskImage: "linear-gradient(to top, black 0%, transparent 100%)", WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)" }} />
        <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none" style={{ height: "38%", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", maskImage: "linear-gradient(to top, black 0%, transparent 100%)", WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)" }} />
        <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none" style={{ height: "55%", backdropFilter: "blur(2px)", WebkitBackdropFilter: "blur(2px)", maskImage: "linear-gradient(to top, black 0%, transparent 100%)", WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)" }} />

        <div className="absolute inset-x-0 bottom-0 z-30 mx-auto grid max-w-7xl gap-10 px-6 pb-10 md:px-12 md:pb-14 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
          <div className="max-w-4xl">
            <h1
              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-[1.0] tracking-tight"
              style={{
                opacity: heroReady ? 1 : 0,
                filter: heroReady ? "blur(0px)" : "blur(24px)",
                transform: heroReady ? "translateY(0px)" : "translateY(32px)",
                transition: "opacity 1s cubic-bezier(0.16,1,0.3,1), filter 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              {t.hero.title}
            </h1>
            <p
              className="mt-7 max-w-2xl text-base md:text-lg leading-relaxed text-foreground/48"
              style={{
                opacity: heroReady ? 1 : 0,
                filter: heroReady ? "blur(0px)" : "blur(18px)",
                transform: heroReady ? "translateY(0px)" : "translateY(22px)",
                transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1) 120ms, filter 0.9s cubic-bezier(0.16,1,0.3,1) 120ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) 120ms",
              }}
            >
              {t.hero.body}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--brand-blue)] px-6 text-sm font-medium tracking-widest text-white transition-opacity hover:opacity-90">
                {t.hero.primaryCta}
              </a>
              <a href="#projects" className="inline-flex h-12 items-center justify-center rounded-full border border-foreground/12 px-6 text-sm tracking-widest text-foreground/65 transition-colors hover:border-foreground/25 hover:text-foreground">
                {t.hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 lg:block lg:space-y-5">
            {t.hero.stats.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  opacity: heroReady ? 1 : 0,
                  filter: heroReady ? "blur(0px)" : "blur(16px)",
                  transform: heroReady ? "translateY(0px)" : "translateY(20px)",
                  transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${180 + i * 80}ms, filter 0.8s cubic-bezier(0.16,1,0.3,1) ${180 + i * 80}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${180 + i * 80}ms`,
                }}
              >
                <div className="font-heading text-2xl sm:text-3xl text-foreground font-medium tracking-tight">{stat.value}</div>
                <div className="mt-1 text-[10px] sm:text-xs text-foreground/40 tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-0 border-y border-foreground/[0.06] overflow-hidden select-none">
        <div className="flex" style={{ animation: "marqueeLeft 26s linear infinite" }}>
          {[...Array(3)].map((_, rep) => (
            <div key={rep} className="flex shrink-0">
              {t.hero.capabilities.map((cap) => (
                <div key={`${rep}-${cap}`} className="flex items-center gap-6 px-10 py-5 border-r border-foreground/[0.06] shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/20 shrink-0" />
                  <span className="text-sm text-foreground/45 whitespace-nowrap tracking-wide">{cap}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <SectionHeader icon="platform" tag={t.overview.tag} title={t.overview.title} />
          <div className="grid grid-cols-12 gap-3" onMouseMove={handleMouse}>
            <BentoCard className="col-span-12 p-8 min-h-[280px] flex flex-col justify-between relative" delay={0}>
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 76% 20%, rgb(20 187 166 / 0.16), transparent 32%), linear-gradient(to bottom, transparent 35%, rgb(var(--page-bg-rgb) / 0.55) 100%)" }} />
              <div className="relative z-10 max-w-xl">
                <div className="w-10 h-10 rounded-xl border border-foreground/10 bg-card/60 flex items-center justify-center mb-6" style={{ backdropFilter: "blur(8px)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 7h16M4 12h16M4 17h10"/><path d="m17 15 3 3-3 3"/></svg>
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-medium mb-4">{t.overview.feature.title}</h3>
                <p className="text-sm md:text-base text-foreground/45 leading-relaxed">{t.overview.feature.desc}</p>
              </div>
            </BentoCard>
            {t.overview.cards.map((card, i) => (
              <BentoCard key={card.title} className="col-span-12 md:col-span-4 p-8 min-h-[200px]" delay={120 + i * 40}>
                <div className="w-10 h-10 rounded-xl border border-foreground/10 flex items-center justify-center mb-5">
                  <span className="text-xs text-foreground/35 tracking-widest">0{i + 1}</span>
                </div>
                <h3 className="font-heading text-lg font-medium mb-2">{card.title}</h3>
                <p className="text-sm text-foreground/45 leading-relaxed">{card.desc}</p>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 px-6 md:px-12 lg:px-20 border-t border-foreground/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <SectionHeader icon="agents" tag={t.projects.tag} title={t.projects.title} />
            <p className="text-sm text-foreground/45 leading-relaxed max-w-sm md:mb-3">{t.projects.body}</p>
          </div>
          <StackingAgentCards items={t.projects.items} />
        </div>
      </section>

      <section id="team" className="py-32 px-6 md:px-12 lg:px-20 border-t border-foreground/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
            <div>
              <SectionHeader icon="workflow" tag={t.team.tag} title={t.team.title} body={t.team.body} />
            </div>
            <div className="grid gap-3" onMouseMove={handleMouse}>
              {t.team.cards.map((card, i) => (
                <BentoCard key={card.title} className="p-7" delay={i * 80}>
                  <div className="flex gap-5">
                    <div className="mt-1 h-10 w-10 shrink-0 rounded-xl border border-foreground/10 bg-foreground/[0.03] flex items-center justify-center text-xs text-foreground/35 tracking-widest">0{i + 1}</div>
                    <div>
                      <h3 className="font-heading text-xl font-medium mb-2">{card.title}</h3>
                      <p className="text-sm text-foreground/45 leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                </BentoCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="py-32 px-6 md:px-12 lg:px-20 border-t border-foreground/[0.06]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader icon="pricing" tag={t.why.tag} title={t.why.title} body={t.why.body} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3" onMouseMove={handleMouse}>
            {t.why.reasons.map((reason, i) => (
              <BentoCard key={reason} className="p-7 min-h-[150px]" delay={i * 45}>
                <div className="flex h-full flex-col justify-between gap-8">
                  <div className="w-2 h-2 rounded-full bg-[var(--brand-teal)]" />
                  <p className="text-base text-foreground/62 leading-relaxed">{reason}</p>
                </div>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-32 px-6 md:px-12 lg:px-20 border-t border-foreground/[0.06] overflow-hidden">
        <img src="/images/footer.png" alt="" aria-hidden="true" className="absolute bottom-0 left-0 w-full object-cover object-bottom pointer-events-none select-none" style={{ opacity: 0.85 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ maskImage: "linear-gradient(to top, transparent 0%, black 55%)", WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 55%)", backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, var(--page-bg) 0%, rgb(var(--page-bg-rgb) / 0.92) 18%, rgb(var(--page-bg-rgb) / 0.55) 35%, transparent 55%)" }} />
        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1fr] gap-12 items-start">
          <div>
            <Tag>{t.contact.tag}</Tag>
            <h2 className="font-heading mt-5 text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05] mb-6">{t.contact.title}</h2>
            <p className="text-sm md:text-base text-foreground/45 leading-relaxed max-w-md">{t.contact.body}</p>
          </div>
          <BentoCard className="p-6 md:p-8" delay={0}>
            {!submitted ? (
              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  setSubmitted(true)
                }}
                className="grid gap-4"
              >
                <label className="grid gap-2 text-xs tracking-widest text-foreground/40">
                  {t.contact.fields.name}
                  <input required name="name" className="bg-background/70 border border-foreground/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground/25 focus:outline-none focus:border-foreground/25 transition-colors" />
                </label>
                <label className="grid gap-2 text-xs tracking-widest text-foreground/40">
                  {t.contact.fields.company}
                  <input required name="company" className="bg-background/70 border border-foreground/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground/25 focus:outline-none focus:border-foreground/25 transition-colors" />
                </label>
                <label className="grid gap-2 text-xs tracking-widest text-foreground/40">
                  {t.contact.fields.email}
                  <input required name="email" type="email" className="bg-background/70 border border-foreground/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground/25 focus:outline-none focus:border-foreground/25 transition-colors" />
                </label>
                <label className="grid gap-2 text-xs tracking-widest text-foreground/40">
                  {t.contact.fields.message}
                  <textarea required name="message" rows={5} className="resize-none bg-background/70 border border-foreground/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground/25 focus:outline-none focus:border-foreground/25 transition-colors" />
                </label>
                <button type="submit" className="mt-2 h-12 rounded-xl bg-[var(--brand-blue)] px-6 text-sm font-medium tracking-widest text-white transition-opacity hover:opacity-90">
                  {t.contact.submit}
                </button>
              </form>
            ) : (
              <div className="flex min-h-[280px] items-center justify-center text-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-emerald-600/20 bg-emerald-50 text-emerald-700 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {t.contact.success}
                </div>
              </div>
            )}
          </BentoCard>
        </div>
      </section>

      <footer className="py-10 px-6 md:px-12 lg:px-20 border-t border-foreground/[0.06]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <AlteilLogo markClassName="w-5 h-5 text-foreground" />
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {t.nav.links.map(link => (
              <a key={link.label} href={link.href} className="text-xs text-foreground/35 hover:text-foreground/70 transition-colors tracking-widest">{link.label}</a>
            ))}
          </div>
          <div className="flex items-center gap-6">
            {t.footer.legal.map(label => (
              <a key={label} href="#" className="text-xs text-foreground/25 hover:text-foreground/55 transition-colors tracking-widest">{label}</a>
            ))}
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-foreground/[0.04]">
          <span className="text-xs text-foreground/20">{t.footer.rights}</span>
        </div>
      </footer>
    </div>
  )
}
