"use client"

import { BentoCard, SectionHeader, useCardMouse } from "@/components/sections/section-primitives"

type OverviewContent = {
  tag: string
  title: string
  feature: { title: string; desc: string }
  cards: readonly { title: string; desc: string }[]
}

export function OverviewSection({ overview }: { overview: OverviewContent }) {
  const handleMouse = useCardMouse()

  return (
    <section className="py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader icon="platform" tag={overview.tag} title={overview.title} />
        <div className="grid grid-cols-12 gap-3" onMouseMove={handleMouse}>
          <BentoCard className="col-span-12 p-8 min-h-[280px] flex flex-col justify-between relative" delay={0}>
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 76% 20%, rgb(20 187 166 / 0.16), transparent 32%), linear-gradient(to bottom, transparent 35%, rgb(var(--page-bg-rgb) / 0.55) 100%)" }} />
            <div className="relative z-10 max-w-xl">
              <div className="w-10 h-10 rounded-xl border border-foreground/10 bg-card/60 flex items-center justify-center mb-6" style={{ backdropFilter: "blur(8px)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 7h16M4 12h16M4 17h10"/><path d="m17 15 3 3-3 3"/></svg>
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-medium mb-4">{overview.feature.title}</h3>
              <p className="text-sm md:text-base text-foreground/45 leading-relaxed">{overview.feature.desc}</p>
            </div>
          </BentoCard>
          {overview.cards.map((card, i) => (
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
  )
}
