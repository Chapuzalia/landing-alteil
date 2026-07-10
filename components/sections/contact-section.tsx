"use client"

import { DecryptedText } from "@/components/animations/decrypted-text"
import { BentoCard, Tag } from "@/components/sections/section-primitives"

type ContactContent = {
  tag: string
  title: string
  body: string
  fields: {
    name: string
    company: string
    email: string
    message: string
  }
  submit: string
  success: string
}

export function ContactSection({
  contact,
  submitted,
  onSubmit,
}: {
  contact: ContactContent
  submitted: boolean
  onSubmit: () => void
}) {
  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 lg:px-20 border-t border-foreground/6 overflow-hidden">
      <img src="/images/footer.png" alt="" aria-hidden="true" className="absolute bottom-0 left-0 w-full object-cover object-bottom pointer-events-none select-none" style={{ opacity: 0.85 }} />
      <div className="absolute inset-0 pointer-events-none" style={{ maskImage: "linear-gradient(to top, transparent 0%, black 55%)", WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 55%)", backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, var(--page-bg) 0%, rgb(var(--page-bg-rgb) / 0.92) 18%, rgb(var(--page-bg-rgb) / 0.55) 35%, transparent 55%)" }} />
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1fr] gap-12 items-start">
        <div>
          <Tag>{contact.tag}</Tag>
          <h2 className="font-heading mt-5 text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05] mb-6"><DecryptedText text={contact.title} /></h2>
          <p className="text-sm md:text-base text-foreground/45 leading-relaxed max-w-md"><DecryptedText text={contact.body} /></p>
        </div>
        <BentoCard className="p-6 md:p-8" delay={0}>
          {!submitted ? (
            <form
              onSubmit={(event) => {
                event.preventDefault()
                onSubmit()
              }}
              className="grid gap-4"
            >
              <label className="grid gap-2 text-xs tracking-widest text-foreground/40">
                {contact.fields.name}
                <input required name="name" className="bg-background/70 border border-foreground/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground/25 focus:outline-none focus:border-foreground/25 transition-colors" />
              </label>
              <label className="grid gap-2 text-xs tracking-widest text-foreground/40">
                {contact.fields.company}
                <input required name="company" className="bg-background/70 border border-foreground/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground/25 focus:outline-none focus:border-foreground/25 transition-colors" />
              </label>
              <label className="grid gap-2 text-xs tracking-widest text-foreground/40">
                {contact.fields.email}
                <input required name="email" type="email" className="bg-background/70 border border-foreground/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground/25 focus:outline-none focus:border-foreground/25 transition-colors" />
              </label>
              <label className="grid gap-2 text-xs tracking-widest text-foreground/40">
                {contact.fields.message}
                <textarea required name="message" rows={5} className="resize-none bg-background/70 border border-foreground/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground/25 focus:outline-none focus:border-foreground/25 transition-colors" />
              </label>
              <button type="submit" className="mt-2 h-12 rounded-xl bg-(--brand-blue) px-6 text-sm font-medium tracking-widest text-white transition-opacity hover:opacity-90">
                {contact.submit}
              </button>
            </form>
          ) : (
            <div className="flex min-h-[280px] items-center justify-center text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-emerald-600/20 bg-emerald-50 text-emerald-700 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {contact.success}
              </div>
            </div>
          )}
        </BentoCard>
      </div>
    </section>
  )
}

