"use client"

import { useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"
import { useTheme } from "next-themes"
import type { ProjectCard } from "@/lib/content"
import { BorderGlow } from "@/components/visuals/border-glow"

const DEFAULT_IMAGES = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/researcher-CvhqOuV6irGwBOnJoTGFlXdbyYBRjb.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coder-9bItvCegU6TXUqbX3tUXGBAtvkBkXp.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/analyst-Ysxnqg7Fpy2cfA56PiIttv1KximMhT.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/executor-o1q6509qMLXMtpBIGo49vcgOu34sI1.png",
]

const STICKY_TOP = 80
const STICKY_STEP = 16
const SCALE_STEP = 0.04
const OFFSET_STEP = 8

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-teal)]/20 bg-[var(--brand-teal)]/[0.07] px-3.5 py-1.5 font-sans text-[11px] font-medium tracking-widest text-foreground/62 shadow-[0_10px_28px_rgb(20_187_166_/_0.08)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-teal)]" aria-hidden="true" />
      {children}
    </span>
  )
}

export function StackingAgentCards({
  items,
  detailsLabel,
  collapseLabel,
}: {
  items: readonly ProjectCard[]
  detailsLabel: string
  collapseLabel: string
}) {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [depth, setDepth] = useState<number[]>(items.map(() => 0))
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    setDepth(items.map(() => 0))
    setExpandedCard(null)
  }, [items])


  useEffect(() => {
    function onScroll() {
      const nextDepth = items.map((_, i) => {
        let count = 0
        for (let j = i + 1; j < items.length; j++) {
          const el = cardRefs.current[j]
          if (!el) continue
          const rect = el.getBoundingClientRect()
          const stickyTopJ = STICKY_TOP + j * STICKY_STEP
          if (rect.top <= stickyTopJ + 2) count++
        }
        return count
      })
      setDepth(nextDepth)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [items])

  return (
    <div className="flex flex-col" style={{ perspective: "1400px", perspectiveOrigin: "50% 0%" }}>
      {items.map((project, i) => {
        const d = depth[i] ?? 0
        const scale = 1 - d * SCALE_STEP
        const translateY = d * OFFSET_STEP
        const darkImage = project.img ?? DEFAULT_IMAGES[i % DEFAULT_IMAGES.length]
        const image = mounted && resolvedTheme === "dark" ? darkImage : project.imgLight ?? darkImage
        const isExpanded = expandedCard === project.label

        return (
          <div
            key={project.label}
            ref={el => { cardRefs.current[i] = el }}
            className={isExpanded ? "mb-4 md:sticky" : "sticky mb-4"}
            style={{ top: `${STICKY_TOP + i * STICKY_STEP}px`, zIndex: 10 + i }}
          >
            <div
              style={{
                transform: `scale(${scale}) translateY(${translateY}px)`,
                transformOrigin: "top center",
                transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
                willChange: "transform",
              }}
            >
              <BorderGlow className="group relative rounded-2xl cursor-pointer" borderRadius={16} glowRadius={34} glowIntensity={0.8} fillOpacity={0.2}>
                <div className="relative w-full h-44 pointer-events-none md:hidden">
                  <img
                    src={image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    style={{
                      maskImage: "linear-gradient(to bottom, black 0%, black 35%, transparent 85%)",
                      WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 35%, transparent 85%)",
                    }}
                  />
                </div>

                <div className="hidden md:block absolute inset-y-0 right-0 w-1/2 pointer-events-none">
                  <img src={image} alt="" aria-hidden="true" className="w-full h-full object-cover object-center" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--card) 0%, transparent 55%)" }} />
                </div>

                <div className="relative z-10 p-6 md:p-8">
                  <div className="md:max-w-[62%]">
                    <div className="mb-4 flex flex-wrap items-center gap-2 md:mb-6">
                      <Tag>{project.label}</Tag>

                    </div>
                    <h3 className="font-heading text-xl md:text-2xl font-medium mb-3">{project.title}</h3>
                    <p className="text-sm text-foreground/48 leading-relaxed mb-5 md:mb-6">{project.desc}</p>
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"} md:grid-rows-[1fr] md:opacity-100`}
                    >
                      <div className="overflow-hidden">
                        <ul className="grid gap-2 mb-5 md:mb-6">
                          {project.features.map(feature => (
                            <li key={`${project.label}-${feature}`} className="flex gap-3 text-sm text-foreground/52 leading-relaxed">
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--brand-teal)]" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="mb-6 rounded-xl border border-foreground/[0.06] bg-foreground/[0.025] px-4 py-3 text-xs leading-relaxed text-foreground/42 md:mb-8">
                          {project.ideal}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="mb-5 inline-flex h-10 items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.03] px-4 text-[11px] font-medium tracking-widest text-foreground/52 transition-colors hover:border-foreground/20 hover:text-foreground md:hidden"
                      aria-expanded={isExpanded}
                      onClick={() => setExpandedCard(isExpanded ? null : project.label)}
                    >
                      {isExpanded ? collapseLabel : detailsLabel}
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-x-8 gap-y-4 pt-5 border-t border-foreground/[0.06] md:pt-6">
                    {project.stats.map(stat => (
                      <div key={`${project.label}-${stat.l}`}>
                        <div className="font-heading text-2xl font-medium">{stat.v}</div>
                        <div className="text-[11px] text-foreground/35 tracking-widest mt-0.5">{stat.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </BorderGlow>
            </div>
          </div>
        )
      })}
    </div>
  )
}


