"use client"

import type { ProjectCard } from "@/lib/content"
import { StackingAgentCards } from "@/components/visuals/stacking-agent-cards"
import { SectionHeader } from "@/components/sections/section-primitives"

export function ProjectsSection({
  projects,
}: {
  projects: { tag: string; title: string; body: string; items: readonly ProjectCard[] }
}) {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 lg:px-20 border-t border-foreground/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <SectionHeader icon="agents" tag={projects.tag} title={projects.title} />
          <p className="text-sm text-foreground/45 leading-relaxed max-w-sm md:mb-3">{projects.body}</p>
        </div>
        <StackingAgentCards items={projects.items} />
      </div>
    </section>
  )
}
