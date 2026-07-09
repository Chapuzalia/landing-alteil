"use client"

import { useState, useEffect } from "react"

const STEPS = [
  {
    num: "01",
    title: "Install SDK",
    desc: "One command to get started",
    file: "terminal",
    lang: "bash",
    code: [
      { type: "comment", text: "# Install the Alteil SDK" },
      { type: "command", text: "npm install @alteil/sdk" },
      { type: "gap" },
      { type: "comment", text: "# Initialize your project" },
      { type: "command", text: "npx alteil init" },
      { type: "gap" },
      { type: "output", text: "✓ Project initialized" },
      { type: "output", text: "✓ Config file created" },
      { type: "output", text: "✓ Ready to build" },
    ],
  },
  {
    num: "02",
    title: "Define Module",
    desc: "TypeScript-first workflow class",
    file: "modules/operations.ts",
    lang: "typescript",
    code: [
      { type: "comment", text: "// modules/operations.ts" },
      { type: "keyword", text: "import", after: " { Workflow, Tool } ", keyword2: "from", string: " '@alteil/sdk'" },
      { type: "gap" },
      { type: "keyword", text: "const", after: " syncData ", keyword2: "=", keyword3: " new ", fn: "Tool", args: "('sync-data', async (q) => { ... })" },
      { type: "gap" },
      { type: "keyword", text: "export const", after: " operations ", keyword2: "=", keyword3: " new ", fn: "Workflow", args: "({" },
      { type: "prop", key: "  name", val: "'operations'" },
      { type: "prop", key: "  schedule", val: "'hourly'" },
      { type: "prop", key: "  tools", val: "[syncData]" },
      { type: "prop", key: "  audit", val: "true" },
      { type: "plain", text: "});" },
    ],
  },
  {
    num: "03",
    title: "Connect Data",
    desc: "Unified data across systems",
    file: "modules/data.ts",
    lang: "typescript",
    code: [
      { type: "comment", text: "// Connect a data source to any module" },
      { type: "keyword", text: "import", after: " { DataStore } ", keyword2: "from", string: " '@alteil/data'" },
      { type: "gap" },
      { type: "keyword", text: "const", after: " store ", keyword2: "=", keyword3: " new ", fn: "DataStore", args: "({" },
      { type: "prop", key: "  provider", val: "'postgres'" },
      { type: "prop", key: "  namespace", val: "'operations'" },
      { type: "plain", text: "})" },
      { type: "gap" },
      { type: "comment", text: "// Attach to module" },
      { type: "plain", text: "operations.use(store)" },
    ],
  },
  {
    num: "04",
    title: "Deploy",
    desc: "One command to production",
    file: "terminal",
    lang: "bash",
    code: [
      { type: "comment", text: "# Deploy to Alteil Cloud" },
      { type: "command", text: "alteil deploy --prod" },
      { type: "gap" },
      { type: "output", text: "  Building module..." },
      { type: "output", text: "  Running tests..." },
      { type: "output", text: "  Deploying to edge..." },
      { type: "gap" },
      { type: "success", text: "✓ operations deployed" },
      { type: "url", text: "  → https://app.alteil.io/operations" },
    ],
  },
]

function CodeLine({ line }: { line: (typeof STEPS)[0]["code"][0] }) {
  if (line.type === "gap") return <div className="h-3" />
  if (line.type === "comment") return <div className="text-[#9ca3af]">{line.text}</div>
  if (line.type === "output") return <div className="text-[#6b7280]">{line.text}</div>
  if (line.type === "success") return <div className="text-[#16a34a]">{line.text}</div>
  if (line.type === "url") return <div className="text-[#14bba6] underline">{line.text}</div>
  if (line.type === "command") return (
    <div>
      <span className="text-[#16a34a]">$ </span>
      <span className="text-foreground">{line.text}</span>
    </div>
  )
  if (line.type === "plain") return <div className="text-foreground">{line.text}</div>
  if (line.type === "prop") return (
    <div>
      <span className="text-[#14bba6]">{line.key}</span>
      <span className="text-foreground">: </span>
      <span className="text-[#16a34a]">{line.val}</span>
      <span className="text-foreground">,</span>
    </div>
  )
  if (line.type === "keyword") return (
    <div>
      <span className="text-[#7c3aed]">{line.text}</span>
      <span className="text-foreground">{line.after}</span>
      <span className="text-[#7c3aed]">{line.keyword2}</span>
      {line.keyword3 && <span className="text-[#7c3aed]">{line.keyword3}</span>}
      {line.fn && <span className="text-[#b45309]">{line.fn}</span>}
      {line.args && <span className="text-foreground">{line.args}</span>}
      {line.string && <span className="text-[#16a34a]">{line.string}</span>}
    </div>
  )
  return null
}

export function DevExSection() {
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(true)

  function selectStep(i: number) {
    if (i === active) return
    setVisible(false)
    setTimeout(() => {
      setActive(i)
      setVisible(true)
    }, 180)
  }

  // Auto-advance every 3s
  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setActive(prev => (prev + 1) % STEPS.length)
        setVisible(true)
      }, 180)
    }, 3200)
    return () => clearInterval(t)
  }, [])

  const step = STEPS[active]

  return (
    <section id="devex" className="py-32 px-6 md:px-12 lg:px-20 border-t border-foreground/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-foreground/[0.05] border border-foreground/[0.06] text-[10px] tracking-widest text-foreground/40 uppercase">
            Developer Experience
          </div>
          <h2 className="font-heading mt-5 text-4xl md:text-5xl font-light tracking-tight leading-[1.05]">
            Built for builders.<br />Loved by teams.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 items-stretch">
          {/* Left — 4 clickable step cards, equal height, no flex stretch */}
          <div className="flex flex-col gap-3">
            {STEPS.map((s, i) => (
              <button
                key={s.num}
                onClick={() => selectStep(i)}
                className="flex-1 text-left rounded-2xl border transition-all duration-200 p-6 group"
                style={{
                  background: active === i ? "rgb(var(--ink-rgb) / 0.04)" : "rgb(var(--surface-rgb) / 0.7)",
                  borderColor: active === i ? "rgb(var(--ink-rgb) / 0.12)" : "rgb(var(--ink-rgb) / 0.06)",
                  boxShadow: active === i
                    ? "0 1px 3px rgb(var(--ink-rgb) / 0.06)"
                    : "0 1px 2px rgb(var(--ink-rgb) / 0.03)",
                }}
              >
                <div className="flex gap-4 items-start">
                  <div
                    className="flex items-center justify-center w-8 h-8 rounded-lg text-xs font-light shrink-0 transition-colors duration-200"
                    style={{
                      background: active === i ? "rgb(var(--ink-rgb) / 0.08)" : "rgb(var(--ink-rgb) / 0.04)",
                      color: active === i ? "rgb(var(--ink-rgb) / 0.7)" : "rgb(var(--ink-rgb) / 0.35)",
                    }}
                  >
                    {s.num}
                  </div>
                  <div className="min-w-0">
                    <p
                      className="text-sm font-light transition-colors duration-200"
                      style={{ color: active === i ? "rgb(var(--ink-rgb) / 0.8)" : "rgb(var(--ink-rgb) / 0.5)" }}
                    >
                      {s.title}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "rgb(var(--ink-rgb) / 0.28)" }}>{s.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right — fixed-size code panel */}
          <div
            className="lg:col-span-2 rounded-2xl border border-foreground/[0.06] p-8 flex flex-col"
            style={{
              background: "rgb(var(--surface-rgb) / 0.7)",
              boxShadow: "0 1px 3px rgb(var(--ink-rgb) / 0.04)",
              minHeight: "360px",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-5 shrink-0">
              <div
                className="text-[10px] tracking-widest uppercase transition-all duration-200"
                style={{
                  opacity: visible ? 1 : 0,
                  filter: visible ? "blur(0px)" : "blur(4px)",
                  transition: "opacity 200ms ease, filter 200ms ease",
                  color: "rgb(var(--ink-rgb) / 0.3)",
                }}
              >
                {step.file}
              </div>
              <div className="flex gap-1.5">
                {[0, 1, 2].map(d => (
                  <div
                    key={d}
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                      background: d === active % 3 ? "rgb(var(--ink-rgb) / 0.25)" : "rgb(var(--ink-rgb) / 0.08)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Code block — fixed height, content doesn't affect layout */}
            <div className="flex-1 rounded-xl p-6 overflow-hidden" style={{ background: "rgb(var(--ink-rgb) / 0.03)", border: "1px solid rgb(var(--ink-rgb) / 0.06)" }}>
              <div
                className="font-mono text-[12px] leading-6"
                style={{
                  opacity: visible ? 1 : 0,
                  filter: visible ? "blur(0px)" : "blur(6px)",
                  transform: visible ? "translateY(0)" : "translateY(6px)",
                  transition: "opacity 220ms cubic-bezier(0.16,1,0.3,1), filter 220ms cubic-bezier(0.16,1,0.3,1), transform 220ms cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                {step.code.map((line, i) => (
                  <CodeLine key={i} line={line} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
