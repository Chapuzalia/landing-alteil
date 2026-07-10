"use client"

import { AlteilMark } from "@/components/brand/alteil-logo"
import { DecryptedText } from "@/components/animations/decrypted-text"

type HeroContent = {
  title: string
  body: string
  primaryCta: string
  secondaryCta: string
}

export function HeroSection({ hero }: { hero: HeroContent; heroReady: boolean }) {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 md:pt-32">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(135deg, rgb(var(--surface-rgb) / 0.22), transparent 42%), radial-gradient(ellipse at 72% 40%, rgb(20 187 166 / 0.14), transparent 38%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
        style={{ height: "58%", background: "linear-gradient(to top, var(--page-bg) 0%, var(--page-bg) 18%, rgb(var(--page-bg-rgb) / 0.78) 42%, transparent 100%)" }}
      />
      <div
        className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
        style={{ height: "32%", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", maskImage: "linear-gradient(to top, black 0%, transparent 100%)", WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)" }}
      />

      <div className="relative z-30 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl grid-cols-1 items-end gap-12 px-6 pb-10 md:px-12 md:pb-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.72fr)] lg:items-center">
        <div className="max-w-3xl">
          <h1
            className="font-heading max-w-[12ch] text-5xl font-semibold leading-[0.96] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl"
            style={{
              opacity: 1,
              filter: "blur(0px)",
              transform: "translateY(0px)",
              transition: "opacity 1s cubic-bezier(0.16,1,0.3,1), filter 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <DecryptedText text={hero.title} />
          </h1>

          <p
            className="mt-7 max-w-xl text-base leading-relaxed text-foreground/52 md:text-lg"
            style={{
              opacity: 1,
              filter: "blur(0px)",
              transform: "translateY(0px)",
              transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1) 140ms, filter 0.9s cubic-bezier(0.16,1,0.3,1) 140ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) 140ms",
            }}
          >
            <DecryptedText text={hero.body} />
          </p>

          <div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            style={{
              opacity: 1,
              transform: "translateY(0px)",
              transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1) 240ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) 240ms",
            }}
          >
            <a href="#contact" className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--brand-blue)] px-6 text-sm font-medium tracking-widest text-white shadow-[0_18px_50px_rgb(15_118_110_/_0.22)] transition-all hover:-translate-y-0.5 hover:opacity-95">
              <DecryptedText text={hero.primaryCta} />
            </a>
            <a href="#why" className="inline-flex h-12 items-center justify-center rounded-full border border-foreground/12 bg-card/35 px-6 text-sm tracking-widest text-foreground/68 backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-foreground/25 hover:text-foreground">
              <DecryptedText text={hero.secondaryCta} />
            </a>
          </div>
        </div>

        <div
          className="relative order-first min-h-[280px] sm:min-h-[340px] lg:order-none lg:min-h-[500px]"
          style={{
            opacity: 1,
            filter: "blur(0px)",
            transform: "translateY(0px) scale(1)",
            transition: "opacity 1s cubic-bezier(0.16,1,0.3,1) 180ms, filter 1s cubic-bezier(0.16,1,0.3,1) 180ms, transform 1s cubic-bezier(0.16,1,0.3,1) 180ms",
          }}
          aria-hidden="true"
        >
          <div className="hero-tilt-card absolute inset-0">
            <div className="absolute inset-[4%] rounded-[32px] border border-foreground/[0.07] bg-card/25 shadow-[0_24px_70px_rgb(var(--ink-rgb)_/_0.08)] backdrop-blur-2xl lg:inset-[7%] lg:rounded-[42px] lg:shadow-[0_34px_100px_rgb(var(--ink-rgb)_/_0.08)]" />
            <div className="absolute inset-[12%] rounded-[26px] border border-foreground/[0.06] bg-background/20 lg:inset-[14%] lg:rounded-[34px]" />
            <div className="absolute left-[8%] right-[12%] top-[21%] h-px bg-gradient-to-r from-transparent via-foreground/18 to-transparent" style={{ animation: "hero-line-drift 7s cubic-bezier(0.45,0,0.55,1) infinite" }} />
            <div className="absolute left-[18%] right-[4%] top-[52%] h-px bg-gradient-to-r from-transparent via-[var(--brand-teal)]/45 to-transparent" style={{ animation: "hero-line-drift 8s cubic-bezier(0.45,0,0.55,1) -2s infinite" }} />
            <div className="absolute left-[12%] right-[18%] top-[74%] h-px bg-gradient-to-r from-transparent via-foreground/14 to-transparent" style={{ animation: "hero-line-drift 9s cubic-bezier(0.45,0,0.55,1) -4s infinite" }} />

            <div className="absolute inset-0 flex items-center justify-center">
              <AlteilMark className="h-32 w-32 text-foreground drop-shadow-[0_18px_55px_rgb(20_187_166_/_0.14)] sm:h-40 sm:w-40 lg:h-52 lg:w-52 lg:drop-shadow-[0_24px_80px_rgb(20_187_166_/_0.14)]" />
            </div>

            <div className="absolute left-[16%] top-[16%] h-16 w-16 rounded-[20px] border border-foreground/[0.06] bg-card/22 backdrop-blur-xl sm:h-20 sm:w-20 lg:left-[18%] lg:top-[18%] lg:h-24 lg:w-24 lg:rounded-[28px]" style={{ animation: "hero-soft-float 8s cubic-bezier(0.45,0,0.55,1) infinite" }} />
            <div className="absolute bottom-[15%] right-[12%] h-20 w-20 rounded-[24px] border border-foreground/[0.055] bg-card/18 backdrop-blur-xl sm:h-24 sm:w-24 lg:bottom-[16%] lg:right-[16%] lg:h-32 lg:w-32 lg:rounded-[34px]" style={{ animation: "hero-soft-float 9s cubic-bezier(0.45,0,0.55,1) -3s infinite" }} />
          </div>
        </div>
      </div>
    </section>
  )
}
