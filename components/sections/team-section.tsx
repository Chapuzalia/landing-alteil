"use client"

import { BentoCard, SectionHeader, useCardMouse } from "@/components/sections/section-primitives"

type TeamContent = {
  tag: string
  title: string
  body: string
  cards: readonly { title: string; desc: string }[]
}

export function TeamSection({ team }: { team: TeamContent }) {
  const handleMouse = useCardMouse()

  return (
    <section id="team" className="py-32 px-6 md:px-12 lg:px-20 border-t border-foreground/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
          <div>
            <SectionHeader icon="workflow" tag={team.tag} title={team.title} body={team.body} />
          </div>
          <div className="grid gap-3" onMouseMove={handleMouse}>
            {team.cards.map((card, i) => (
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
  )
}
