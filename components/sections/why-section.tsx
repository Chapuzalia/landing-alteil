"use client"

import { BentoCard, SectionHeader, useCardMouse } from "@/components/sections/section-primitives"

type WhyContent = {
  tag: string
  title: string
  body: string
  reasons: readonly string[]
}

export function WhySection({ why }: { why: WhyContent }) {
  const handleMouse = useCardMouse()

  return (
    <section id="why" className="py-32 px-6 md:px-12 lg:px-20 border-t border-foreground/[0.06]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader icon="pricing" tag={why.tag} title={why.title} body={why.body} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3" onMouseMove={handleMouse}>
          {why.reasons.map((reason, i) => (
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
  )
}
