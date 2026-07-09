"use client"

import { useEffect, useState } from "react"
import { AlteilMark } from "@/components/brand/alteil-logo"

const LETTERS = ["A", "l", "t", "e", "i", "l"]

const LETTER_IN_STAGGER = 90
const LETTER_IN_DUR = 700
const LETTER_HOLD_DURATION = 420
const LETTERS_VISIBLE_TOTAL = LETTER_IN_STAGGER * (LETTERS.length - 1) + LETTER_IN_DUR + LETTER_HOLD_DURATION

const LETTER_OUT_STAGGER = 45
const LETTER_OUT_DUR = 420
const LETTERS_OUT_TOTAL = LETTER_OUT_STAGGER * (LETTERS.length - 1) + LETTER_OUT_DUR

const LOGO_IN_DELAY = LETTERS_VISIBLE_TOTAL + 180
const LOGO_IN_DUR = 360
const LOGO_HOLD_DURATION = 0
const LOGO_OPEN_DELAY = LOGO_IN_DELAY + 180
const LOGO_OPEN_DUR = 900

const CURTAIN_DELAY = LOGO_OPEN_DELAY + 40
const CURTAIN_DURATION = 900
const ANIM_TOTAL = CURTAIN_DELAY + CURTAIN_DURATION + 260

export const INTRO_DURATION_MS = CURTAIN_DELAY + CURTAIN_DURATION
export const HERO_REVEAL_MS = CURTAIN_DELAY + CURTAIN_DURATION - 150

type Phase = "idle" | "letters-in" | "letters-out" | "logo-in" | "logo-open" | "done"

export function IntroAnimation({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<Phase>("idle")
  const [curtainUp, setCurtainUp] = useState(false)

  useEffect(() => {
    const t0 = setTimeout(() => setPhase("letters-in"), 80)
    const t1 = setTimeout(() => setPhase("letters-out"), LETTERS_VISIBLE_TOTAL)
    const t2 = setTimeout(() => setPhase("logo-in"), LOGO_IN_DELAY)
    const t3 = setTimeout(() => setPhase("logo-open"), LOGO_OPEN_DELAY)
    const t4 = setTimeout(() => setCurtainUp(true), CURTAIN_DELAY)
    const t5 = setTimeout(() => onDone(), HERO_REVEAL_MS)
    const t6 = setTimeout(() => setPhase("done"), ANIM_TOTAL)

    return () => {
      clearTimeout(t0)
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      clearTimeout(t5)
      clearTimeout(t6)
    }
  }, [onDone])

  if (phase === "done") return null

  const logoVisible = phase === "logo-in" || phase === "logo-open"
  const logoOpening = phase === "logo-open"

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none" aria-hidden="true">
      <div
        className="absolute inset-x-0 top-0"
        style={{
          bottom: curtainUp ? "100%" : "0%",
          transition: curtainUp ? `bottom ${CURTAIN_DURATION}ms cubic-bezier(0.76, 0, 0.24, 1)` : "none",
          background: "var(--page-bg)",
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex font-custom-logo" style={{ gap: "0.06em" }}>
          {LETTERS.map((letter, i) => {
            const inDelay = i * LETTER_IN_STAGGER
            const outDelay = i * LETTER_OUT_STAGGER
            const isIdle = phase === "idle"
            const isIn = phase === "letters-in"
            const isOut = phase !== "idle" && phase !== "letters-in"
            const opacity = isIdle ? 0 : isIn ? 1 : 0
            const blur = isIdle ? 36 : isIn ? 0 : 24
            const translateY = isIdle ? 48 : isIn ? 0 : -20
            const transition = isOut
              ? `opacity ${LETTER_OUT_DUR}ms cubic-bezier(0.4,0,1,1) ${outDelay}ms,
                 filter ${LETTER_OUT_DUR}ms cubic-bezier(0.4,0,1,1) ${outDelay}ms,
                 transform ${LETTER_OUT_DUR}ms cubic-bezier(0.4,0,1,1) ${outDelay}ms`
              : isIn
                ? `opacity ${LETTER_IN_DUR}ms cubic-bezier(0.16,1,0.3,1) ${inDelay}ms,
                   filter ${LETTER_IN_DUR}ms cubic-bezier(0.16,1,0.3,1) ${inDelay}ms,
                   transform ${LETTER_IN_DUR}ms cubic-bezier(0.16,1,0.3,1) ${inDelay}ms`
                : "none"

            return (
              <span
                key={letter + i}
                className="font-heading font-bold text-foreground leading-none select-none font-custom-logo"
                style={{
                  fontSize: `calc((100vw - 64px) / ${LETTERS.length})`,
                  letterSpacing: "0.05em",
                  opacity,
                  filter: `blur(${blur}px)`,
                  transform: `translateY(${translateY}px)`,
                  transition,
                  willChange: "opacity, filter, transform",
                }}
              >
                {letter}
              </span>
            )
          })}
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div
          className="text-foreground"
          style={{
            opacity: logoVisible ? (logoOpening ? 0 : 1) : 0,
            filter: logoVisible ? (logoOpening ? "blur(18px)" : "blur(0px)") : "blur(24px)",
            transform: logoOpening ? "scale(18)" : logoVisible ? "scale(1)" : "scale(0.72)",
            transition: logoOpening
              ? `opacity ${LOGO_OPEN_DUR}ms cubic-bezier(0.76,0,0.24,1), filter ${LOGO_OPEN_DUR}ms cubic-bezier(0.76,0,0.24,1), transform ${LOGO_OPEN_DUR}ms cubic-bezier(0.76,0,0.24,1)`
              : `opacity ${LOGO_IN_DUR}ms cubic-bezier(0.16,1,0.3,1), filter ${LOGO_IN_DUR}ms cubic-bezier(0.16,1,0.3,1), transform ${LOGO_IN_DUR}ms cubic-bezier(0.16,1,0.3,1)`,
            willChange: "opacity, filter, transform",
          }}
        >
          <AlteilMark className="w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60" />
        </div>
      </div>
    </div>
  )
}