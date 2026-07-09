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
      <div className="hero-stage absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-signal hero-signal-a" />
        <div className="hero-signal hero-signal-b" />
        <div className="hero-orbit hero-orbit-large" />
        <div className="hero-orbit hero-orbit-small" />
        <div className="hero-node hero-node-a" />
        <div className="hero-node hero-node-b" />
        <div className="hero-node hero-node-c" />
        <div className="hero-flow-card hero-flow-card-a">
          <span>INPUT</span>
          <strong>{hero.capabilities[0]}</strong>
        </div>
        <div className="hero-flow-card hero-flow-card-b">
          <span>CORE</span>
          <strong>{hero.stats[0]?.value}</strong>
        </div>
        <div className="hero-flow-card hero-flow-card-c">
          <span>OUTPUT</span>
          <strong>{hero.capabilities[4]}</strong>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none" style={{ height: "58%", background: "linear-gradient(to top, var(--page-bg) 0%, var(--page-bg) 20%, rgb(var(--page-bg-rgb) / 0.82) 42%, rgb(var(--page-bg-rgb) / 0.35) 68%, transparent 100%)" }} />
      <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none" style={{ height: "34%", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", maskImage: "linear-gradient(to top, black 0%, transparent 100%)", WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)" }} />

      <div className="relative z-30 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl grid-cols-1 items-end gap-10 px-6 pb-10 md:px-12 md:pb-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.65fr)] lg:items-center">
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
            className="font-heading max-w-[11ch] text-5xl font-semibold leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
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
          className="relative hidden min-h-[420px] lg:block"
          style={{
            opacity: heroReady ? 1 : 0,
            filter: heroReady ? "blur(0px)" : "blur(18px)",
            transform: heroReady ? "translateY(0px) scale(1)" : "translateY(28px) scale(0.97)",
            transition: "opacity 1s cubic-bezier(0.16,1,0.3,1) 180ms, filter 1s cubic-bezier(0.16,1,0.3,1) 180ms, transform 1s cubic-bezier(0.16,1,0.3,1) 180ms",
          }}
          aria-hidden="true"
        >
          <div className="hero-panel-shell">
            <div className="hero-panel-header">
              <span />
              <span />
              <span />
            </div>
            <div className="hero-panel-body">
              {hero.stats.map((stat, i) => (
                <div key={stat.label} className="hero-metric-row" style={{ animationDelay: `${i * 0.55}s` }}>
                  <div>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                  <em />
                </div>
              ))}
              <div className="hero-pipeline">
                {hero.capabilities.slice(0, 5).map((cap, i) => (
                  <span key={cap} style={{ animationDelay: `${i * 0.28}s` }}>{cap}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}