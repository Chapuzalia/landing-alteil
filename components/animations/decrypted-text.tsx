"use client"

import { useEffect, useMemo, useRef, useState } from "react"

type DecryptedTextProps = {
  text: string
  className?: string
  duration?: number
  interval?: number
  revealFrom?: "start" | "random"
  maxCharacterChanges?: number
}

const CHARACTERS = "abcdefghijklmnopqrstuvwxyz"

function shuffle(items: number[]) {
  const next = [...items]
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[next[i], next[j]] = [next[j], next[i]]
  }
  return next
}

function randomCharacter() {
  return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)] ?? ""
}

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function DecryptedText({
  text,
  className,
  duration = 420,
  interval = 62,
  revealFrom = "random",
  maxCharacterChanges = 4,
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text)
  const previousText = useRef(text)

  const targetChars = useMemo(() => Array.from(text), [text])

  useEffect(() => {
    if (previousText.current === text) {
      setDisplayText(text)
      return
    }

    const previousChars = Array.from(previousText.current)
    previousText.current = text

    if (prefersReducedMotion()) {
      setDisplayText(text)
      return
    }

    const revealableIndexes = targetChars
      .map((char, index) => ({ char, index }))
      .filter(({ char }) => char.trim() !== "")
      .map(({ index }) => index)

    const revealOrder = revealFrom === "start" ? revealableIndexes : shuffle(revealableIndexes)
    const steps = Math.max(1, Math.min(Math.ceil(duration / interval), maxCharacterChanges))
    let frame = 0

    const timer = window.setInterval(() => {
      frame += 1
      const revealedCount = Math.ceil((frame / steps) * revealOrder.length)
      const revealed = new Set(revealOrder.slice(0, revealedCount))

      setDisplayText(
        targetChars
          .map((char, index) => {
            if (char.trim() === "" || revealed.has(index)) return char
            return previousChars[index] === char ? char : randomCharacter()
          })
          .join("")
      )

      if (frame >= steps) {
        window.clearInterval(timer)
        setDisplayText(text)
      }
    }, interval)

    return () => window.clearInterval(timer)
  }, [duration, interval, maxCharacterChanges, revealFrom, targetChars, text])

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">{displayText}</span>
    </span>
  )
}