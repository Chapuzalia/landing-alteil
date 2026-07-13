import type { Metadata } from "next"
import Link from "next/link"
import { AlteilLogo } from "@/components/brand/alteil-logo"

export const metadata: Metadata = {
  title: "Terminos de uso - Alteil Solutions",
  description: "Condiciones generales de uso del sitio web de Alteil Solutions.",
  alternates: {
    canonical: "/terminos",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const sections = [
  {
    title: "Objeto",
    body: "Estas condiciones regulan el acceso y uso del sitio web de Alteil Solutions y de la informacion publicada en el.",
  },
  {
    title: "Uso del sitio",
    body: "Debes usar la web de forma licita, respetuosa y sin realizar acciones que puedan danar, sobrecargar o impedir su funcionamiento normal.",
  },
  {
    title: "Contenido",
    body: "Los textos, imagenes, disenos, marcas y demas elementos del sitio pertenecen a Alteil Solutions o a sus respectivos titulares.",
  },
  {
    title: "Servicios",
    body: "La informacion de la web tiene caracter informativo. Cualquier servicio, propuesta o colaboracion se acordara de forma individual con sus condiciones especificas.",
  },
  {
    title: "Responsabilidad",
    body: "Trabajamos para mantener la informacion actualizada, pero no garantizamos la ausencia total de errores ni la disponibilidad ininterrumpida del sitio.",
  },
  {
    title: "Cambios",
    body: "Podemos actualizar estas condiciones cuando sea necesario para reflejar cambios legales, tecnicos o de servicio.",
  },
]

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-8 md:px-12 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <header className="flex items-center justify-between gap-6 border-b border-foreground/8 pb-8">
          <Link href="/" aria-label="Volver a Alteil">
            <AlteilLogo markClassName="w-8 h-8 text-foreground" />
          </Link>
          <Link href="/#contact" className="rounded-full border border-foreground/12 px-4 py-2 text-xs tracking-widest text-foreground/55 transition-colors hover:text-foreground">
            Contacto
          </Link>
        </header>

        <section className="py-16 md:py-24">
          <p className="mb-4 text-xs font-medium tracking-[0.28em] text-foreground/35">LEGAL</p>
          <h1 className="font-heading text-4xl font-medium tracking-tight md:text-6xl">Terminos de uso</h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-foreground/50">
            Estas condiciones explican las reglas basicas de acceso y uso del sitio web de Alteil Solutions.
          </p>
        </section>

        <div className="grid gap-6 pb-20">
          {sections.map((section) => (
            <section key={section.title} className="rounded-2xl border border-foreground/8 bg-card/35 p-6 md:p-8">
              <h2 className="font-heading text-2xl font-medium">{section.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground/52">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}