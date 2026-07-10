"use client"

import { BentoCard, SectionHeader, Tag, useCardMouse } from "@/components/sections/section-primitives"
import { DecryptedText } from "@/components/animations/decrypted-text"

type WhyContent = {
  tag: string
  title: string
  body: string
  promise: string
  note: string
  reasons: readonly string[]
  closing: string
}

export function WhySection({ why }: { why: WhyContent }) {
  const handleMouse = useCardMouse()

  return (
    <section id="why" className="py-32 px-6 md:px-12 lg:px-20 border-t border-foreground/6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader icon="pricing" tag={why.tag} title={why.title} body={why.body} />
        <BentoCard className="relative overflow-hidden p-0" delay={0}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 16% 18%, rgb(20 187 166 / 0.14), transparent 30%), linear-gradient(135deg, rgb(var(--surface-rgb) / 0.18), transparent 55%)",
            }}
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr]" onMouseMove={handleMouse}>
            <div className="border-b border-foreground/6 p-7 md:p-9 lg:border-b-0 lg:border-r">
              <Tag>{why.promise}</Tag>
              <h3 className="font-heading mt-6 max-w-md text-3xl font-medium leading-[1.05] tracking-tight text-foreground md:text-4xl">
                <DecryptedText text={why.closing} />
              </h3>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-foreground/48">
                {why.note}
              </p>
            </div>

            <div className="p-7 md:p-9">
              <div className="relative grid gap-0">
                <div className="absolute bottom-8 left-[15px] top-8 w-px bg-linear-to-b from-(--brand-teal)/50 via-foreground/10 to-transparent" aria-hidden="true" />
                {why.reasons.map((reason, i) => (
                  <div key={reason} className="relative grid grid-cols-[32px_1fr] gap-5 pb-8 last:pb-0">
                    <div className="relative z-10 mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-(--brand-teal)/25 bg-card text-[10px] font-medium tracking-widest text-foreground/55 shadow-[0_10px_30px_rgb(20_187_166/0.08)]">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="rounded-xl border border-foreground/6 bg-background/25 px-5 py-4 backdrop-blur-sm">
                      <p className="text-sm leading-relaxed text-foreground/62 md:text-base">{reason}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </BentoCard>
      </div>
    </section>
  )
}
