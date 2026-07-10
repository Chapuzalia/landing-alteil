"use client"

import { useCallback, useEffect, useRef } from "react"
import type { CSSProperties, ReactNode, Ref } from "react"
import styles from "./border-glow.module.css"

type BorderGlowProps = {
  children: ReactNode
  className?: string
  edgeSensitivity?: number
  glowColor?: string
  backgroundColor?: string
  borderRadius?: number
  glowRadius?: number
  glowIntensity?: number
  coneSpread?: number
  animated?: boolean
  colors?: string[]
  fillOpacity?: number
  rootRef?: Ref<HTMLDivElement>
  style?: CSSProperties
}

type GlowStyle = CSSProperties & Record<`--${string}`, string | number>

const GRADIENT_POSITIONS = ["80% 55%", "69% 34%", "8% 6%", "41% 38%", "86% 85%", "82% 18%", "51% 4%"]
const GRADIENT_KEYS = [
  "--gradient-one",
  "--gradient-two",
  "--gradient-three",
  "--gradient-four",
  "--gradient-five",
  "--gradient-six",
  "--gradient-seven",
] as const
const COLOR_MAP = [0, 1, 2, 0, 1, 2, 1]
const DEFAULT_COLORS = ["var(--brand-teal)", "var(--brand-blue)", "var(--accent)"]

function parseHSL(hslStr: string) {
  const match = hslStr.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/)
  if (!match) return { h: 173, s: 81, l: 41 }
  return { h: Number.parseFloat(match[1]), s: Number.parseFloat(match[2]), l: Number.parseFloat(match[3]) }
}

function buildGlowVars(glowColor: string, intensity: number): GlowStyle {
  const { h, s, l } = parseHSL(glowColor)
  const base = `${h}deg ${s}% ${l}%`
  const opacities = [100, 60, 50, 40, 30, 20, 10]
  const keys = ["", "-60", "-50", "-40", "-30", "-20", "-10"]
  const vars: GlowStyle = {}

  for (let i = 0; i < opacities.length; i++) {
    vars[`--glow-color${keys[i]}`] = `hsl(${base} / ${Math.min(opacities[i] * intensity, 100)}%)`
  }

  return vars
}

function buildGradientVars(colors: string[]): GlowStyle {
  const vars: GlowStyle = {}

  for (let i = 0; i < 7; i++) {
    const color = colors[Math.min(COLOR_MAP[i], colors.length - 1)]
    vars[GRADIENT_KEYS[i]] = `radial-gradient(at ${GRADIENT_POSITIONS[i]}, ${color} 0px, transparent 50%)`
  }

  vars["--gradient-base"] = `linear-gradient(${colors[0]} 0 100%)`
  return vars
}

function easeOutCubic(x: number) {
  return 1 - Math.pow(1 - x, 3)
}

function easeInCubic(x: number) {
  return x * x * x
}

function animateValue({
  start = 0,
  end = 100,
  duration = 1000,
  delay = 0,
  ease = easeOutCubic,
  onUpdate,
  onEnd,
}: {
  start?: number
  end?: number
  duration?: number
  delay?: number
  ease?: (value: number) => number
  onUpdate: (value: number) => void
  onEnd?: () => void
}) {
  const t0 = performance.now() + delay

  function tick() {
    const elapsed = performance.now() - t0
    const t = Math.min(elapsed / duration, 1)
    onUpdate(start + (end - start) * ease(t))

    if (t < 1) requestAnimationFrame(tick)
    else onEnd?.()
  }

  window.setTimeout(() => requestAnimationFrame(tick), delay)
}

export function BorderGlow({
  children,
  className = "",
  edgeSensitivity = 30,
  glowColor = "173 81 41",
  backgroundColor = "var(--card)",
  borderRadius = 16,
  glowRadius = 34,
  glowIntensity = 0.9,
  coneSpread = 24,
  animated = false,
  colors = DEFAULT_COLORS,
  fillOpacity = 0.28,
  rootRef,
  style,
}: BorderGlowProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const setCardRef = useCallback((node: HTMLDivElement | null) => {
    cardRef.current = node

    if (typeof rootRef === 'function') {
      rootRef(node)
    } else if (rootRef) {
      rootRef.current = node
    }
  }, [rootRef])

  const getCenterOfElement = useCallback((el: HTMLDivElement) => {
    const { width, height } = el.getBoundingClientRect()
    return [width / 2, height / 2]
  }, [])

  const getEdgeProximity = useCallback((el: HTMLDivElement, x: number, y: number) => {
    const [cx, cy] = getCenterOfElement(el)
    const dx = x - cx
    const dy = y - cy
    let kx = Infinity
    let ky = Infinity

    if (dx !== 0) kx = cx / Math.abs(dx)
    if (dy !== 0) ky = cy / Math.abs(dy)

    return Math.min(Math.max(1 / Math.min(kx, ky), 0), 1)
  }, [getCenterOfElement])

  const getCursorAngle = useCallback((el: HTMLDivElement, x: number, y: number) => {
    const [cx, cy] = getCenterOfElement(el)
    const dx = x - cx
    const dy = y - cy

    if (dx === 0 && dy === 0) return 0

    const radians = Math.atan2(dy, dx)
    const degrees = radians * (180 / Math.PI) + 90
    return degrees < 0 ? degrees + 360 : degrees
  }, [getCenterOfElement])

  const handlePointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const edge = getEdgeProximity(card, x, y)
    const angle = getCursorAngle(card, x, y)

    card.style.setProperty("--edge-proximity", `${(edge * 100).toFixed(3)}`)
    card.style.setProperty("--cursor-angle", `${angle.toFixed(3)}deg`)
  }, [getCursorAngle, getEdgeProximity])

  useEffect(() => {
    if (!animated || !cardRef.current) return

    const card = cardRef.current
    const angleStart = 110
    const angleEnd = 465

    card.classList.add(styles.sweepActive)
    card.style.setProperty("--cursor-angle", `${angleStart}deg`)

    animateValue({ duration: 500, onUpdate: value => card.style.setProperty("--edge-proximity", `${value}`) })
    animateValue({
      ease: easeInCubic,
      duration: 1500,
      end: 50,
      onUpdate: value => {
        card.style.setProperty("--cursor-angle", `${(angleEnd - angleStart) * (value / 100) + angleStart}deg`)
      },
    })
    animateValue({
      ease: easeOutCubic,
      delay: 1500,
      duration: 2250,
      start: 50,
      end: 100,
      onUpdate: value => {
        card.style.setProperty("--cursor-angle", `${(angleEnd - angleStart) * (value / 100) + angleStart}deg`)
      },
    })
    animateValue({
      ease: easeInCubic,
      delay: 2500,
      duration: 1500,
      start: 100,
      end: 0,
      onUpdate: value => card.style.setProperty("--edge-proximity", `${value}`),
      onEnd: () => card.classList.remove(styles.sweepActive),
    })
  }, [animated])

  return (
    <div
      ref={setCardRef}
      onPointerMove={handlePointerMove}
      className={`${styles.borderGlowCard} ${className}`}
      style={{
        "--card-bg": backgroundColor,
        "--edge-sensitivity": edgeSensitivity,
        "--border-radius": `${borderRadius}px`,
        "--glow-padding": `${glowRadius}px`,
        "--cone-spread": coneSpread,
        "--fill-opacity": fillOpacity,
        ...buildGlowVars(glowColor, glowIntensity),
        ...buildGradientVars(colors),
        ...style,
      } as GlowStyle}
    >
      <span className={styles.edgeLight} />
      <div className={styles.borderGlowInner}>{children}</div>
    </div>
  )
}







