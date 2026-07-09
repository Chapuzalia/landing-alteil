import React from "react"

// Alteil Solutions brand mark — an "A" mountain built from a navy peak
// (uses currentColor so it adapts to light/dark) and a teal front peak.
export function AlteilMark({ className = "" }: { className?: string }) {
  return (
    <svg
  viewBox="0 0 64 64"
  className={className}
  fill="none"
  aria-hidden="true"
>
  {/* Alteil icon — first version, corrected parallel geometry */}

  {/* Teal accent — right diagonal parallel to navy mark */}
  <path
    d="
      M10 52
      L19 31
      L25 52
      Z
    "
    fill="var(--brand-teal)"
  />

  {/* Navy diagonal mark */}
  <path
    d="
      M30 10
      H43
      L56 52
      H43
      Z
    "
    fill="currentColor"
  />
</svg>
  )
}

// Full lockup: mark + stacked "Alteil / Solutions" wordmark.
export function AlteilLogo({
  className = "",
  markClassName = "w-6 h-6 text-foreground",
  showSolutions = true,
  textClassName = "text-foreground",
}: {
  className?: string
  markClassName?: string
  showSolutions?: boolean
  textClassName?: string
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <AlteilMark className={markClassName} />
      
      <span className={`font-heading font-bold text-sm tracking-tight ${textClassName}`}>Alteil</span>
        
    </span>
  )
}
