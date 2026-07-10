"use client"


export function CapabilitiesMarquee({ capabilities }: { capabilities: readonly string[] }) {
  return (
    <section className="py-0 border-y border-foreground/6 overflow-hidden select-none">
      <div className="flex" style={{ animation: "marqueeLeft 26s linear infinite" }}>
        {[...Array(3)].map((_, rep) => (
          <div key={rep} className="flex shrink-0">
            {capabilities.map((cap) => (
              <div key={`${rep}-${cap}`} className="flex items-center gap-6 px-10 py-5 border-r border-foreground/6 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/20 shrink-0" />
                <span className="text-sm text-foreground/45 whitespace-nowrap tracking-wide">{cap}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
