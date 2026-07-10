"use client"

import type { ProjectCard } from "@/lib/content"
import { DecryptedText } from "@/components/animations/decrypted-text"
import { StackingAgentCards } from "@/components/visuals/stacking-agent-cards"
import { SectionHeader } from "@/components/sections/section-primitives"

export function ProjectsSection({
  projects,
}: {
  projects: {
    tag: string
    title: string
    body: string
    detailsLabel: string
    collapseLabel: string
    items: readonly ProjectCard[]
  }
}) {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 lg:px-20 border-t border-foreground/6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <SectionHeader icon="agents" tag={projects.tag} title={projects.title} />
          <p className="text-sm text-foreground/45 leading-relaxed max-w-sm md:mb-3"><DecryptedText text={projects.body} /></p>
        </div>
        <StackingAgentCards items={projects.items} detailsLabel={projects.detailsLabel} collapseLabel={projects.collapseLabel} />
      </div>
    </section>
  )
}

