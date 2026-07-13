import type { Metadata } from "next"
import Link from "next/link"
import { AlteilLogo } from "@/components/brand/alteil-logo"

export const metadata: Metadata = {
  title: "Politica de privacidad - Alteil Solutions",
  description: "Informacion sobre el tratamiento de datos personales en Alteil Solutions.",
  alternates: {
    canonical: "/privacidad",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const sections = [
  {
    title: "Responsable",
    body: "Alteil Solutions es responsable del tratamiento de los datos que nos facilitas a traves de esta web o por contacto directo.",
  },
  {
    title: "Datos que podemos tratar",
    body: "Podemos tratar datos identificativos y de contacto, como nombre, empresa, correo electronico y el contenido del mensaje que nos envies.",
  },
  {
    title: "Finalidad",
    body: "Usamos estos datos para responder solicitudes, preparar propuestas, mantener comunicaciones comerciales solicitadas y mejorar nuestros servicios.",
  },
  {
    title: "Legitimacion",
    body: "La base del tratamiento es tu consentimiento al enviar el formulario o contactarnos, y el interes legitimo en atender comunicaciones profesionales.",
  },
  {
    title: "Conservacion",
    body: "Conservamos los datos durante el tiempo necesario para gestionar la solicitud y cumplir obligaciones legales aplicables.",
  },
  {
    title: "Derechos",
    body: "Puedes solicitar acceso, rectificacion, supresion, oposicion, limitacion o portabilidad escribiendo a Alteil Solutions por los canales habituales de contacto.",
  },
]

export default function PrivacyPage() {
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
          <h1 className="font-heading text-4xl font-medium tracking-tight md:text-6xl">Politica de privacidad</h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-foreground/50">
            Esta pagina resume como recogemos y tratamos la informacion que nos envias al contactar con Alteil Solutions.
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