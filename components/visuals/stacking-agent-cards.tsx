"use client"

import { useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"
import type { ProjectCard } from "@/lib/content"

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
    <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] tracking-widest font-sans text-foreground/40 bg-foreground/[0.04]">
      {children}
    </span>
  )
}

export function StackingAgentCards({ items }: { items: readonly ProjectCard[] }) {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [depth, setDepth] = useState<number[]>(items.map(() => 0))

  useEffect(() => {
    setDepth(items.map(() => 0))
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
        const image = project.img ?? DEFAULT_IMAGES[i % DEFAULT_IMAGES.length]

        return (
          <div
            key={project.label}
            ref={el => { cardRefs.current[i] = el }}
            className="sticky mb-4"
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
              <div className="group relative bg-card rounded-2xl border border-foreground/[0.07] overflow-hidden cursor-pointer">
                <div className="relative w-full h-52 pointer-events-none md:hidden">
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

                <div className="relative z-10 p-8">
                  <div className="md:max-w-[62%]">
                    <div className="mb-6 flex flex-wrap items-center gap-2">
                      <Tag>{project.label}</Tag>
                      {project.tags.map(tag => (
                        <span key={`${project.label}-${tag}`} className="rounded-full bg-foreground/[0.035] px-2.5 py-1 text-[10px] tracking-widest text-foreground/32">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl font-medium mb-3">{project.title}</h3>
                    <p className="text-sm text-foreground/48 leading-relaxed mb-6">{project.desc}</p>
                    <ul className="grid gap-2 mb-6">
                      {project.features.map(feature => (
                        <li key={`${project.label}-${feature}`} className="flex gap-3 text-sm text-foreground/52 leading-relaxed">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--brand-teal)]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mb-8 rounded-xl border border-foreground/[0.06] bg-foreground/[0.025] px-4 py-3 text-xs leading-relaxed text-foreground/42">
                      {project.ideal}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-x-8 gap-y-4 pt-6 border-t border-foreground/[0.06]">
                    {project.stats.map(stat => (
                      <div key={`${project.label}-${stat.l}`}>
                        <div className="font-heading text-2xl font-medium">{stat.v}</div>
                        <div className="text-[11px] text-foreground/35 tracking-widest mt-0.5">{stat.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
