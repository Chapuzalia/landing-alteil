"use client"

import { useCallback, useEffect, useState, type MouseEvent } from "react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

declare global {
  interface Document {
    startViewTransition?: (callback: () => void) => { finished: Promise<void> }
  }
}

const TRANSITION_STYLE_ID = "theme-transition-styles"

function injectThemeTransitionStyles(originX: number, originY: number) {
  if (typeof document === "undefined") return

  let style = document.getElementById(TRANSITION_STYLE_ID) as HTMLStyleElement | null
  if (!style) {
    style = document.createElement("style")
    style.id = TRANSITION_STYLE_ID
    document.head.appendChild(style)
  }

  const maxX = Math.max(originX, window.innerWidth - originX)
  const maxY = Math.max(originY, window.innerHeight - originY)
  const endRadius = Math.hypot(maxX, maxY)

  style.textContent = `
    ::view-transition-group(root) {
      animation-duration: 1250ms;
      animation-timing-function: cubic-bezier(0.76, 0, 0.24, 1);
    }

    ::view-transition-new(root) {
      animation-name: alteil-theme-reveal;
    }

    ::view-transition-old(root),
    .dark::view-transition-old(root) {
      animation: none;
      z-index: -1;
    }

    @keyframes alteil-theme-reveal {
      from { clip-path: circle(0px at ${originX}px ${originY}px); }
      to { clip-path: circle(${endRadius}px at ${originX}px ${originY}px); }
    }
  `
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === "dark"

  const toggleTheme = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    const nextTheme = isDark ? "light" : "dark"
    const rect = event.currentTarget.getBoundingClientRect()
    const originX = rect.left + rect.width / 2
    const originY = rect.top + rect.height / 2
    injectThemeTransitionStyles(originX, originY)

    const switchTheme = () => setTheme(nextTheme)

    if (typeof document === "undefined" || !document.startViewTransition) {
      switchTheme()
      return
    }

    document.startViewTransition(switchTheme)
  }, [isDark, setTheme])

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={!mounted ? "Toggle theme" : isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn("flex items-center justify-center w-8 h-8 rounded-xl border border-foreground/10 text-foreground/60 hover:text-foreground hover:border-foreground/20 hover:bg-foreground/[0.04] transition-all duration-200", className)}
    >
      {!mounted ? (
        <span className="w-[15px] h-[15px]" />
      ) : isDark ? (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  )
}