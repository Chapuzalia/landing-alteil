"use client"

import { useCallback, useEffect, useState } from "react"
import { IntroAnimation } from "@/components/animations/intro-animation"
import { MobileNav } from "@/components/layout/mobile-nav"
import { CapabilitiesMarquee } from "@/components/sections/capabilities-marquee"
import { ContactSection } from "@/components/sections/contact-section"
import { HeroSection } from "@/components/sections/hero-section"
import { OverviewSection } from "@/components/sections/overview-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SiteFooter } from "@/components/sections/site-footer"
import { TeamSection } from "@/components/sections/team-section"
import { WhySection } from "@/components/sections/why-section"
import { content, defaultLanguage, type Language } from "@/lib/content"

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

      <HeroSection hero={t.hero} heroReady={heroReady} />
      <CapabilitiesMarquee capabilities={t.hero.capabilities} />
      <OverviewSection overview={t.overview} />
      <ProjectsSection projects={t.projects} />
      <TeamSection team={t.team} />
      <WhySection why={t.why} />
      <ContactSection contact={t.contact} submitted={submitted} onSubmit={() => setSubmitted(true)} />
      <SiteFooter navLinks={t.nav.links} footer={t.footer} />
    </div>
  )
}
