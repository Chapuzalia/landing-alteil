"use client"

type HeroContent = {
  title: string
  body: string
  primaryCta: string
  secondaryCta: string
  stats: readonly { value: string; label: string }[]
  capabilities: readonly string[]
}

export function HeroSection({ hero, heroReady }: { hero: HeroContent; heroReady: boolean }) {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 md:pt-32">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 72% 34%, rgb(20 187 166 / 0.18), transparent 24%), radial-gradient(circle at 18% 24%, rgb(15 118 110 / 0.10), transparent 28%), linear-gradient(135deg, rgb(var(--surface-rgb) / 0.18), transparent 48%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgb(var(--ink-rgb) / 0.055) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--ink-rgb) / 0.055) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(circle at 68% 42%, black 0%, transparent 62%)",
          WebkitMaskImage: "radial-gradient(circle at 68% 42%, black 0%, transparent 62%)",
          animation: "hero-grid-drift 18s linear infinite",
        }}
      />
      <div className="absolute right-[8vw] top-[22%] hidden h-[520px] w-[520px] rounded-full border border-foreground/[0.07] lg:block" style={{ animation: "hero-orbit-turn 32s linear infinite" }} aria-hidden="true" />
      <div className="absolute right-[19vw] top-[36%] hidden h-[300px] w-[300px] rounded-full border border-foreground/[0.06] lg:block" style={{ animation: "hero-orbit-turn 22s linear infinite reverse" }} aria-hidden="true" />
      <div className="absolute right-[18%] top-[28%] hidden h-3 w-3 rounded-full bg-[var(--brand-teal)] shadow-[0_0_0_9px_rgb(20_187_166_/_0.10),0_0_42px_rgb(20_187_166_/_0.35)] lg:block" style={{ animation: "hero-node-pulse 2.8s cubic-bezier(0.45,0,0.55,1) infinite" }} aria-hidden="true" />
      <div className="absolute right-[39%] top-[54%] hidden h-3 w-3 rounded-full bg-[var(--brand-teal)] shadow-[0_0_0_9px_rgb(20_187_166_/_0.10),0_0_42px_rgb(20_187_166_/_0.35)] lg:block" style={{ animation: "hero-node-pulse 2.8s cubic-bezier(0.45,0,0.55,1) infinite -0.8s" }} aria-hidden="true" />

      <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none" style={{ height: "58%", background: "linear-gradient(to top, var(--page-bg) 0%, var(--page-bg) 20%, rgb(var(--page-bg-rgb) / 0.82) 42%, rgb(var(--page-bg-rgb) / 0.35) 68%, transparent 100%)" }} />
      <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none" style={{ height: "34%", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", maskImage: "linear-gradient(to top, black 0%, transparent 100%)", WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)" }} />

      <div className="relative z-30 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl grid-cols-1 items-end gap-12 px-6 pb-10 md:px-12 md:pb-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.62fr)] lg:items-center">
        <div className="max-w-3xl">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-card/55 px-3 py-1.5 text-[11px] font-medium tracking-widest text-foreground/45 shadow-sm backdrop-blur-xl"
            style={{
              opacity: heroReady ? 1 : 0,
              transform: heroReady ? "translateY(0px)" : "translateY(14px)",
              transition: "opacity 0.75s cubic-bezier(0.16,1,0.3,1) 80ms, transform 0.75s cubic-bezier(0.16,1,0.3,1) 80ms",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-teal)]" />
            {hero.stats[2]?.label ?? "OPERATIONS"}
          </div>

          <h1
            className="font-heading max-w-[12ch] text-5xl font-semibold leading-[0.96] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl"
            style={{
              opacity: heroReady ? 1 : 0,
              filter: heroReady ? "blur(0px)" : "blur(24px)",
              transform: heroReady ? "translateY(0px)" : "translateY(32px)",
              transition: "opacity 1s cubic-bezier(0.16,1,0.3,1), filter 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            {hero.title}
          </h1>

          <p
            className="mt-7 max-w-xl text-base leading-relaxed text-foreground/52 md:text-lg"
            style={{
              opacity: heroReady ? 1 : 0,
              filter: heroReady ? "blur(0px)" : "blur(16px)",
              transform: heroReady ? "translateY(0px)" : "translateY(22px)",
              transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1) 140ms, filter 0.9s cubic-bezier(0.16,1,0.3,1) 140ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) 140ms",
            }}
          >
            {hero.body}
          </p>

          <div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            style={{
              opacity: heroReady ? 1 : 0,
              transform: heroReady ? "translateY(0px)" : "translateY(18px)",
              transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1) 240ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) 240ms",
            }}
          >
            <a href="#contact" className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--brand-blue)] px-6 text-sm font-medium tracking-widest text-white shadow-[0_18px_50px_rgb(15_118_110_/_0.22)] transition-all hover:-translate-y-0.5 hover:opacity-95">
              {hero.primaryCta}
            </a>
            <a href="#projects" className="inline-flex h-12 items-center justify-center rounded-full border border-foreground/12 bg-card/35 px-6 text-sm tracking-widest text-foreground/68 backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-foreground/25 hover:text-foreground">
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <div
          className="relative hidden min-h-[430px] lg:block"
          style={{
            opacity: heroReady ? 1 : 0,
            filter: heroReady ? "blur(0px)" : "blur(18px)",
            transform: heroReady ? "translateY(0px) scale(1)" : "translateY(28px) scale(0.97)",
            transition: "opacity 1s cubic-bezier(0.16,1,0.3,1) 180ms, filter 1s cubic-bezier(0.16,1,0.3,1) 180ms, transform 1s cubic-bezier(0.16,1,0.3,1) 180ms",
          }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 rounded-[28px] border border-foreground/[0.08] bg-card/45 shadow-[0_32px_90px_rgb(var(--ink-rgb)_/_0.10)] backdrop-blur-2xl" />
          <div className="absolute inset-0 rounded-[28px]" style={{ background: "linear-gradient(145deg, rgb(var(--surface-rgb) / 0.74), rgb(var(--surface-rgb) / 0.28))" }} />
          <div className="relative z-10 p-5">
            <div className="mb-5 flex gap-2 border-b border-foreground/[0.06] pb-4">
              <span className="h-2 w-2 rounded-full bg-foreground/20" />
              <span className="h-2 w-2 rounded-full bg-foreground/14" />
              <span className="h-2 w-2 rounded-full bg-foreground/10" />
            </div>
            <div className="grid gap-3">
              {hero.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="flex items-center justify-between gap-6 rounded-2xl border border-foreground/[0.06] bg-card/45 p-4 backdrop-blur-xl"
                  style={{ animation: `hero-row-breathe 4.8s cubic-bezier(0.45,0,0.55,1) ${i * 0.45}s infinite` }}
                >
                  <div className="grid gap-1">
                    <strong className="font-heading text-2xl font-medium leading-none text-foreground">{stat.value}</strong>
                    <span className="text-[10px] uppercase tracking-widest text-foreground/38">{stat.label}</span>
                  </div>
                  <span className="h-2 w-28 rounded-full bg-[linear-gradient(90deg,rgb(20_187_166_/_0.22),rgb(20_187_166_/_0.62))]" style={{ animation: "hero-meter 3.4s cubic-bezier(0.16,1,0.3,1) infinite" }} />
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {hero.capabilities.slice(0, 5).map((cap, i) => (
                <span
                  key={cap}
                  className="rounded-full border border-foreground/[0.07] bg-card/40 px-3 py-2 text-[10px] tracking-widest text-foreground/44"
                  style={{ animation: `hero-chip-glow 3.6s cubic-bezier(0.45,0,0.55,1) ${i * 0.22}s infinite` }}
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}