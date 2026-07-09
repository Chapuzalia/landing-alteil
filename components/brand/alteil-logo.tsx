import React from "react"

// Alteil Solutions brand mark — an "A" mountain built from a navy peak
// (uses currentColor so it adapts to light/dark) and a teal front peak.
export function AlteilMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      {/* Back navy peak — the tall "A" */}
      <path d="M34 6 L60 58 L42 58 L30 32 Z" fill="currentColor" />
      <path d="M34 6 L26 22 L33 38 L41 22 Z" fill="currentColor" />
      {/* Front teal peak */}
      <path d="M18 28 L40 58 L4 58 Z" fill="var(--brand-teal)" />
    </svg>
  )
}

// Full lockup: mark + stacked "Alteil / Solutions" wordmark.
export function AlteilLogo({
  className = "",
  markClassName = "w-6 h-6 text-foreground",
  showSolutions = true,
}: {
  className?: string
  markClassName?: string
  showSolutions?: boolean
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <AlteilMark className={markClassName} />
      
      <span className="font-heading font-bold text-sm tracking-tight text-foreground">Alteil</span>
        
    </span>
  )
}
