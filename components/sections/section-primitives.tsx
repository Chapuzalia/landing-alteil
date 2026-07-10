"use client"

import { useEffect, useRef, useState } from "react"
import type { MouseEvent, ReactNode } from "react"
import { RevealText } from "@/components/animations/reveal-text"
import { DecryptedText } from "@/components/animations/decrypted-text"
import { PixelIcon } from "@/components/visuals/pixel-icon"
import { BorderGlow } from "@/components/visuals/border-glow"

type SectionIcon = "platform" | "agents" | "workflow" | "pricing"

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

export function useCardMouse() {
  return (event: MouseEvent<HTMLDivElement>) => {
    const el = event.currentTarget
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`)
    el.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`)
  }
}

export function BentoCard({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView(0.1)

  return (
    <BorderGlow
      rootRef={ref}
      className={`group relative rounded-2xl transition-all duration-700 hover:bg-foreground/2 ${className}`}
      borderRadius={16}
      glowRadius={32}
      glowIntensity={0.85}
      fillOpacity={0.22}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms, background-color 0.3s ease`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgb(var(--ink-rgb) / 0.03), transparent 60%)" }}
      />
      {children}
    </BorderGlow>
  )
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] tracking-widest font-sans text-foreground/40 bg-foreground/4">
      {children}
    </span>
  )
}

export function SectionHeader({ icon, tag, title, body }: { icon: SectionIcon; tag: string; title: string; body?: string }) {
  return (
    <div className="mb-16">
      <PixelIcon type={icon} size={40} />
      <div className="mt-4"><Tag><DecryptedText text={tag} /></Tag></div>
      <RevealText className="mt-5 text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05]">
        {title}
      </RevealText>
      {body && <p className="mt-6 text-sm md:text-base text-foreground/45 leading-relaxed max-w-xl"><DecryptedText text={body} /></p>}
    </div>
  )
}

