export const languages = [
  { code: "es", label: "Español", short: "ES" },
  { code: "en", label: "English", short: "EN" },
  { code: "ca", label: "Català", short: "CA" },
] as const

export type Language = (typeof languages)[number]["code"]

export type ProjectCard = {
  label: string
  title: string
  desc: string
  features: readonly string[]
  ideal: string
  tags: readonly string[]
  stats: readonly { v: string; l: string }[]
  img?: string
}

export const defaultLanguage: Language = "es"

export const content = {
  es: {
    meta: {
      title: "Alteil Solutions - SaaS a medida para empresas",
      description:
        "Creamos SaaS y herramientas digitales B2B para convertir procesos manuales en software claro, escalable y útil.",
    },
    nav: {
      links: [
        { label: "Proyectos", href: "#projects", targetId: "projects" },
        { label: "Equipo", href: "#team", targetId: "team" },
        { label: "Por qué", href: "#why", targetId: "why" },
        { label: "Contacto", href: "#contact", targetId: "contact" },
      ],
      cta: "Hablemos",
      languageLabel: "Seleccionar idioma",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
    },
    hero: {
      title: "Tecnología que se siente clara.",
      body:
        "Diseñamos productos digitales que ordenan el día a día y hacen que avanzar sea más fácil.",
      primaryCta: "Hablemos de tu idea",
      secondaryCta: "Ver el enfoque",
      stats: [
        { value: "B2B", label: "SaaS a medida" },
        { value: "5", label: "productos reales" },
        { value: "100%", label: "enfoque operativo" },
      ],
      capabilities: ["Offline", "Multiempresa", "Reservas", "Stock", "Backoffice", "Supabase"],
    },
    overview: {
      tag: "ENFOQUE",
      title: "Construimos software alrededor de cómo trabaja tu empresa.",
      feature: {
        title: "De WhatsApp, Excel y herramientas sueltas a una plataforma clara",
        desc:
          "Detectamos cuellos de botella reales y los convertimos en productos conectados a datos, con roles, permisos, backoffice, operaciones, reservas, stock u offline cuando el negocio lo necesita.",
      },
      cards: [
        {
          title: "Operativa real",
          desc: "Partimos de ventas, turnos, recursos, reservas, inmuebles, clientes o coordinación interna.",
        },
        {
          title: "Producto usable",
          desc: "Diseñamos flujos para usuarios reales: rápidos, claros y pensados para el trabajo diario.",
        },
        {
          title: "Escala desde el inicio",
          desc: "Preparamos datos, roles, permisos, multiempresa e integraciones sin convertirlo en sobreingeniería.",
        },
      ],
    },
    projects: {
      tag: "PROYECTOS",
      title: "Productos pensados para problemas operativos concretos.",
      body:
        "No son demos decorativas. Cada proyecto resuelve una parte real del negocio: ventas, personal, eventos, reservas, CRM, backoffice y automatización.",
      items: [
        {
          label: "POS / TPV",
          title: "TPV offline-first para vender rápido y controlar caja",
          desc:
            "Punto de venta para negocios que necesitan gestionar catálogo, tickets, pagos y caja incluso con conexión inestable, sincronizando después con Supabase.",
          features: [
            "Venta rápida desde catálogo",
            "Tickets, variantes, modificadores y métodos de pago",
            "Apertura y cierre de caja",
            "Cola offline y sincronización posterior",
            "Backoffice para catálogo, importación y estadísticas",
          ],
          ideal: "Ideal para negocios que no pueden parar ventas cuando falla la conexión.",
          tags: ["Offline-first", "Backoffice", "Supabase"],
          stats: [
            { v: "TPV", l: "venta y tickets" },
            { v: "Offline", l: "operación resiliente" },
          ],
        },
        {
          label: "Shifter",
          title: "Planificación visual de turnos, locales y eventos",
          desc:
            "Herramienta para organizar trabajadores, aperturas, turnos normales y eventos especiales desde un calendario mensual claro.",
          features: [
            "Calendario mensual por local",
            "Gestión de trabajadores",
            "Asignación por día, turno y venue",
            "Eventos especiales con personal extra",
            "Exportación visual de la planificación",
          ],
          ideal: "Ideal para equipos que aún coordinan cuadrantes con mensajes sueltos y cambios manuales.",
          tags: ["Turnos", "Gestión interna", "Calendario"],
          stats: [
            { v: "Locales", l: "venues y aperturas" },
            { v: "Eventos", l: "personal extra" },
          ],
        },
        {
          label: "EventOS",
          title: "SaaS multiempresa para eventos, recursos y stock",
          desc:
            "Plataforma para planificar proyectos, reservar material, evitar overbooking y coordinar project managers, stock managers y montadores.",
          features: [
            "Proyectos con cliente, ubicación, fechas y estado",
            "Recursos, stock y reservas por cantidad",
            "Prevención de solapamientos y overbooking",
            "Documentación pública o privada por proyecto",
            "Roles para PM, stock manager, montador, admin y superadmin",
          ],
          ideal: "Ideal para empresas de eventos que trabajan con material compartido, equipos móviles y documentación dispersa.",
          tags: ["Multiempresa", "Recursos", "Roles"],
          stats: [
            { v: "RLS", l: "aislamiento por tenant" },
            { v: "Stock", l: "sin overbooking" },
          ],
        },
        {
          label: "Court Manager",
          title: "Reservas y gestión interna para clubs deportivos",
          desc:
            "Sistema con app para socios y backoffice para controlar pistas, horarios, disponibilidad, cobros, operaciones y partidos.",
          features: [
            "Reserva pública de pistas",
            "App para socios/clientes",
            "Vista interna para personal del club",
            "Estados de pista, agenda, cobros y operaciones",
            "Matchmaking, partidos y estadísticas de jugador",
          ],
          ideal: "Ideal para clubs que quieren dejar atrás llamadas, agendas desordenadas y reservas manuales.",
          tags: ["Reservas", "Backoffice", "Clubes"],
          stats: [
            { v: "Pistas", l: "estado y agenda" },
            { v: "Socios", l: "app cliente" },
          ],
        },
        {
          label: "CRM inmobiliario",
          title: "CRM para inmuebles, clientes, agentes y web pública",
          desc:
            "CRM para agencias que necesitan centralizar inmuebles, clientes, captaciones, mensajes, calendario, agentes, portales y publicación web.",
          features: [
            "Gestión de inmuebles, clientes y leads",
            "Mensajes, calendario y seguimiento comercial",
            "Agentes, permisos y productividad",
            "Web pública conectada al CRM",
            "Base preparada para portales, facturación y módulos extra",
          ],
          ideal: "Ideal para inmobiliarias con datos repartidos entre portales, WhatsApp, Excel, calendarios y web desconectada.",
          tags: ["CRM", "Web pública", "Backoffice"],
          stats: [
            { v: "Leads", l: "seguimiento comercial" },
            { v: "Web", l: "propiedades publicadas" },
          ],
        },
      ],
    },
    team: {
      tag: "EQUIPO",
      title: "Un equipo técnico, pequeño y cercano.",
      body:
        "Trabajamos junto al cliente para entender cómo funciona la empresa antes de escribir código. Esa cercanía nos permite construir productos útiles, no pantallas decorativas.",
      cards: [
        { title: "Producto y tecnología", desc: "Combinamos criterio de producto, arquitectura y desarrollo para llegar rápido a una solución usable." },
        { title: "Trabajo pegado al negocio", desc: "Hablamos con las personas que viven el problema para diseñar flujos que encajen con su día a día." },
        { title: "Ejecución práctica", desc: "Priorizamos lo que desbloquea trabajo real: menos ruido, más software funcionando." },
      ],
    },
    why: {
      tag: "POR QUÉ ALTEIL",
      title: "Primero entendemos el problema. Después construimos.",
      body:
        "Nuestra ventaja no está en añadir más tecnología, sino en convertir procesos complejos en herramientas que los equipos quieren usar.",
      reasons: [
        "Construimos software útil, no funcionalidades decorativas.",
        "Diseñamos soluciones escalables desde el inicio.",
        "Tenemos foco en SaaS B2B, gestión operativa y plataformas internas.",
        "Sabemos trabajar con multiempresa, roles, permisos, reservas, stock, offline y Supabase.",
        "Pensamos en usuarios reales, no solo en una demo bonita.",
        "Transformamos procesos manuales en herramientas digitales eficientes.",
      ],
    },
    contact: {
      tag: "CONTACTO",
      title: "Explícanos qué proceso te está frenando.",
      body:
        "Te ayudamos a convertirlo en una solución digital clara: una herramienta interna, una plataforma de gestión o un SaaS completo.",
      fields: {
        name: "Nombre",
        company: "Empresa",
        email: "Email",
        message: "Mensaje / problema que quieres resolver",
      },
      submit: "Solicitar una demo",
      success: "Gracias. Hemos recibido tu mensaje y te contactaremos pronto.",
    },
    footer: {
      rights: "© 2026 Alteil Solutions. Todos los derechos reservados.",
      legal: ["Privacidad", "Términos", "Contacto"],
    },
  },
  en: {
    meta: {
      title: "Alteil Solutions - Custom SaaS for business operations",
      description:
        "We build B2B SaaS and digital tools that turn manual processes into clear, scalable, useful software.",
    },
    nav: {
      links: [
        { label: "Projects", href: "#projects", targetId: "projects" },
        { label: "Team", href: "#team", targetId: "team" },
        { label: "Why us", href: "#why", targetId: "why" },
        { label: "Contact", href: "#contact", targetId: "contact" },
      ],
      cta: "Let's talk",
      languageLabel: "Select language",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      title: "Technology that feels clear.",
      body:
        "We design digital products that bring clarity to everyday work and make progress feel easier.",
      primaryCta: "Tell us your idea",
      secondaryCta: "See our approach",
      stats: [
        { value: "B2B", label: "custom SaaS" },
        { value: "5", label: "real products" },
        { value: "100%", label: "operations focused" },
      ],
      capabilities: ["Offline", "Multi-tenant", "Bookings", "Stock", "Backoffice", "Supabase"],
    },
    overview: {
      tag: "APPROACH",
      title: "We build software around how your company works.",
      feature: {
        title: "From WhatsApp, spreadsheets and scattered tools to one clear platform",
        desc:
          "We identify real bottlenecks and turn them into data-connected products with roles, permissions, backoffice, operations, bookings, stock or offline support when the business needs it.",
      },
      cards: [
        { title: "Real operations", desc: "We start from sales, shifts, resources, bookings, properties, clients or internal coordination." },
        { title: "Usable product", desc: "We design flows for real users: fast, clear and built for daily work." },
        { title: "Built to scale", desc: "We prepare data, roles, permissions, multi-tenancy and integrations without overengineering." },
      ],
    },
    projects: {
      tag: "PROJECTS",
      title: "Products built for concrete operational problems.",
      body:
        "These are not decorative demos. Each project solves a real business area: sales, workforce, events, bookings, CRM, backoffice and automation.",
      items: [
        {
          label: "POS",
          title: "Offline-first POS for fast sales and cash control",
          desc: "Point of sale for businesses that need catalog, receipts, payments and cash sessions to keep working even with unstable connectivity, then sync with Supabase.",
          features: ["Fast catalog sales", "Receipts, variants, modifiers and payment methods", "Cash opening and closing", "Offline queue and later sync", "Backoffice for catalog, import and statistics"],
          ideal: "Ideal for businesses that cannot stop selling when the connection fails.",
          tags: ["Offline-first", "Backoffice", "Supabase"],
          stats: [{ v: "POS", l: "sales and receipts" }, { v: "Offline", l: "resilient operation" }],
        },
        {
          label: "Shifter",
          title: "Visual planning for shifts, venues and special events",
          desc: "A tool to organize workers, openings, regular shifts and special events from a clear monthly calendar.",
          features: ["Monthly calendar by venue", "Worker management", "Assignment by day, shift and venue", "Special events with extra staff", "Visual planning export"],
          ideal: "Ideal for teams still coordinating schedules with loose messages and manual changes.",
          tags: ["Shifts", "Internal ops", "Calendar"],
          stats: [{ v: "Venues", l: "openings and shifts" }, { v: "Events", l: "extra staff" }],
        },
        {
          label: "EventOS",
          title: "Multi-tenant SaaS for events, resources and stock",
          desc: "Platform to plan projects, reserve equipment, prevent overbooking and coordinate project managers, stock managers and installers.",
          features: ["Projects with client, location, dates and status", "Resources, stock and quantity-based bookings", "Overlap and overbooking prevention", "Public or private project documents", "Roles for PM, stock manager, installer, admin and superadmin"],
          ideal: "Ideal for event companies working with shared equipment, mobile teams and scattered documentation.",
          tags: ["Multi-tenant", "Resources", "Roles"],
          stats: [{ v: "RLS", l: "tenant isolation" }, { v: "Stock", l: "no overbooking" }],
        },
        {
          label: "Court Manager",
          title: "Bookings and internal management for sports clubs",
          desc: "System with a member app and backoffice to manage courts, schedules, availability, payments, operations and matches.",
          features: ["Public court booking", "App for members and clients", "Internal view for club staff", "Court states, agenda, payments and operations", "Matchmaking, matches and player statistics"],
          ideal: "Ideal for clubs that want to move away from calls, messy agendas and manual bookings.",
          tags: ["Bookings", "Backoffice", "Clubs"],
          stats: [{ v: "Courts", l: "status and agenda" }, { v: "Members", l: "client app" }],
        },
        {
          label: "Real estate CRM",
          title: "CRM for properties, clients, agents and public web",
          desc: "CRM for agencies that need to centralize properties, clients, listings, messages, calendar, agents, portals and website publishing.",
          features: ["Property, client and lead management", "Messages, calendar and sales follow-up", "Agents, permissions and productivity", "Public website connected to the CRM", "Foundation for portals, billing and extra modules"],
          ideal: "Ideal for agencies with data spread across portals, WhatsApp, spreadsheets, calendars and a disconnected website.",
          tags: ["CRM", "Public web", "Backoffice"],
          stats: [{ v: "Leads", l: "sales follow-up" }, { v: "Web", l: "published listings" }],
        },
      ],
    },
    team: {
      tag: "TEAM",
      title: "A small, technical and close team.",
      body:
        "We work with clients to understand how the company operates before writing code. That closeness helps us build useful products, not decorative screens.",
      cards: [
        { title: "Product and technology", desc: "We combine product judgment, architecture and development to reach a usable solution quickly." },
        { title: "Close to the business", desc: "We speak with the people who live the problem so the workflows fit their day-to-day work." },
        { title: "Practical execution", desc: "We prioritize what unlocks real work: less noise, more working software." },
      ],
    },
    why: {
      tag: "WHY ALTEIL",
      title: "We understand the problem first. Then we build.",
      body:
        "Our value is not adding more technology, but turning complex processes into tools teams actually want to use.",
      reasons: [
        "We build useful software, not decorative features.",
        "We design scalable solutions from day one.",
        "We focus on B2B SaaS, operational management and internal platforms.",
        "We know multi-tenancy, roles, permissions, bookings, stock, offline workflows and Supabase.",
        "We design for real users, not just polished demos.",
        "We turn manual processes into efficient digital tools.",
      ],
    },
    contact: {
      tag: "CONTACT",
      title: "Tell us what process is slowing you down.",
      body:
        "We will help you turn it into a clear digital solution: an internal tool, a management platform or a complete SaaS product.",
      fields: {
        name: "Name",
        company: "Company",
        email: "Email",
        message: "Message / problem you want to solve",
      },
      submit: "Request a demo",
      success: "Thanks. We received your message and will contact you soon.",
    },
    footer: {
      rights: "© 2026 Alteil Solutions. All rights reserved.",
      legal: ["Privacy", "Terms", "Contact"],
    },
  },
  ca: {
    meta: {
      title: "Alteil Solutions - SaaS a mida per a empreses",
      description:
        "Creem SaaS i eines digitals B2B per convertir processos manuals en programari clar, escalable i útil.",
    },
    nav: {
      links: [
        { label: "Projectes", href: "#projects", targetId: "projects" },
        { label: "Equip", href: "#team", targetId: "team" },
        { label: "Per què", href: "#why", targetId: "why" },
        { label: "Contacte", href: "#contact", targetId: "contact" },
      ],
      cta: "Parlem-ne",
      languageLabel: "Selecciona l'idioma",
      openMenu: "Obrir menú",
      closeMenu: "Tancar menú",
    },
    hero: {
      title: "Tecnologia que se sent clara.",
      body:
        "Dissenyem productes digitals que ordenen el dia a dia i fan que avançar sigui més fàcil.",
      primaryCta: "Parlem de la teva idea",
      secondaryCta: "Veure l'enfocament",
      stats: [
        { value: "B2B", label: "SaaS a mida" },
        { value: "5", label: "productes reals" },
        { value: "100%", label: "focus operatiu" },
      ],
      capabilities: ["Offline", "Multiempresa", "Reserves", "Estoc", "Backoffice", "Supabase"],
    },
    overview: {
      tag: "ENFOCAMENT",
      title: "Construïm programari al voltant de com treballa la teva empresa.",
      feature: {
        title: "De WhatsApp, Excel i eines disperses a una plataforma clara",
        desc:
          "Detectem colls d'ampolla reals i els convertim en productes connectats a dades, amb rols, permisos, backoffice, operacions, reserves, estoc o offline quan el negoci ho necessita.",
      },
      cards: [
        { title: "Operativa real", desc: "Partim de vendes, torns, recursos, reserves, immobles, clients o coordinació interna." },
        { title: "Producte usable", desc: "Dissenyem fluxos per a usuaris reals: ràpids, clars i pensats per al treball diari." },
        { title: "Escalable des del principi", desc: "Preparem dades, rols, permisos, multiempresa i integracions sense sobreenginyeria." },
      ],
    },
    projects: {
      tag: "PROJECTES",
      title: "Productes pensats per a problemes operatius concrets.",
      body:
        "No són demos decoratives. Cada projecte resol una part real del negoci: vendes, personal, esdeveniments, reserves, CRM, backoffice i automatització.",
      items: [
        {
          label: "POS / TPV",
          title: "TPV offline-first per vendre ràpid i controlar caixa",
          desc: "Punt de venda per a negocis que necessiten gestionar catàleg, tiquets, pagaments i caixa fins i tot amb connexió inestable, sincronitzant després amb Supabase.",
          features: ["Venda ràpida des del catàleg", "Tiquets, variants, modificadors i mètodes de pagament", "Obertura i tancament de caixa", "Cua offline i sincronització posterior", "Backoffice per a catàleg, importació i estadístiques"],
          ideal: "Ideal per a negocis que no poden aturar vendes quan falla la connexió.",
          tags: ["Offline-first", "Backoffice", "Supabase"],
          stats: [{ v: "TPV", l: "venda i tiquets" }, { v: "Offline", l: "operació resilient" }],
        },
        {
          label: "Shifter",
          title: "Planificació visual de torns, locals i esdeveniments",
          desc: "Eina per organitzar treballadors, obertures, torns normals i esdeveniments especials des d'un calendari mensual clar.",
          features: ["Calendari mensual per local", "Gestió de treballadors", "Assignació per dia, torn i venue", "Esdeveniments especials amb personal extra", "Exportació visual de la planificació"],
          ideal: "Ideal per a equips que encara coordinen quadrants amb missatges solts i canvis manuals.",
          tags: ["Torns", "Gestió interna", "Calendari"],
          stats: [{ v: "Locals", l: "obertures i torns" }, { v: "Events", l: "personal extra" }],
        },
        {
          label: "EventOS",
          title: "SaaS multiempresa per a esdeveniments, recursos i estoc",
          desc: "Plataforma per planificar projectes, reservar material, evitar overbooking i coordinar project managers, stock managers i muntadors.",
          features: ["Projectes amb client, ubicació, dates i estat", "Recursos, estoc i reserves per quantitat", "Prevenció de solapaments i overbooking", "Documentació pública o privada per projecte", "Rols per a PM, stock manager, muntador, admin i superadmin"],
          ideal: "Ideal per a empreses d'esdeveniments amb material compartit, equips mòbils i documentació dispersa.",
          tags: ["Multiempresa", "Recursos", "Rols"],
          stats: [{ v: "RLS", l: "aïllament per tenant" }, { v: "Estoc", l: "sense overbooking" }],
        },
        {
          label: "Court Manager",
          title: "Reserves i gestió interna per a clubs esportius",
          desc: "Sistema amb app per a socis i backoffice per controlar pistes, horaris, disponibilitat, cobraments, operacions i partits.",
          features: ["Reserva pública de pistes", "App per a socis i clients", "Vista interna per al personal del club", "Estats de pista, agenda, cobraments i operacions", "Matchmaking, partits i estadístiques de jugador"],
          ideal: "Ideal per a clubs que volen deixar enrere trucades, agendes desordenades i reserves manuals.",
          tags: ["Reserves", "Backoffice", "Clubs"],
          stats: [{ v: "Pistes", l: "estat i agenda" }, { v: "Socis", l: "app client" }],
        },
        {
          label: "CRM immobiliari",
          title: "CRM per a immobles, clients, agents i web pública",
          desc: "CRM per a agències que necessiten centralitzar immobles, clients, captacions, missatges, calendari, agents, portals i publicació web.",
          features: ["Gestió d'immobles, clients i leads", "Missatges, calendari i seguiment comercial", "Agents, permisos i productivitat", "Web pública connectada al CRM", "Base per a portals, facturació i mòduls extra"],
          ideal: "Ideal per a immobiliàries amb dades repartides entre portals, WhatsApp, Excel, calendaris i web desconnectada.",
          tags: ["CRM", "Web pública", "Backoffice"],
          stats: [{ v: "Leads", l: "seguiment comercial" }, { v: "Web", l: "immobles publicats" }],
        },
      ],
    },
    team: {
      tag: "EQUIP",
      title: "Un equip tècnic, petit i proper.",
      body:
        "Treballem amb el client per entendre com funciona l'empresa abans d'escriure codi. Aquesta proximitat ens permet construir productes útils, no pantalles decoratives.",
      cards: [
        { title: "Producte i tecnologia", desc: "Combinem criteri de producte, arquitectura i desenvolupament per arribar ràpid a una solució usable." },
        { title: "A prop del negoci", desc: "Parlem amb les persones que viuen el problema perquè els fluxos encaixin amb el seu dia a dia." },
        { title: "Execució pràctica", desc: "Prioritzem allò que desbloqueja feina real: menys soroll, més programari funcionant." },
      ],
    },
    why: {
      tag: "PER QUÈ ALTEIL",
      title: "Primer entenem el problema. Després construïm.",
      body:
        "El nostre valor no és afegir més tecnologia, sinó convertir processos complexos en eines que els equips vulguin utilitzar.",
      reasons: [
        "Construïm programari útil, no funcionalitats decoratives.",
        "Dissenyem solucions escalables des del principi.",
        "Tenim focus en SaaS B2B, gestió operativa i plataformes internes.",
        "Sabem treballar amb multiempresa, rols, permisos, reserves, estoc, offline i Supabase.",
        "Pensem en usuaris reals, no només en una demo bonica.",
        "Transformem processos manuals en eines digitals eficients.",
      ],
    },
    contact: {
      tag: "CONTACTE",
      title: "Explica'ns quin procés t'està frenant.",
      body:
        "T'ajudem a convertir-lo en una solució digital clara: una eina interna, una plataforma de gestió o un SaaS complet.",
      fields: {
        name: "Nom",
        company: "Empresa",
        email: "Email",
        message: "Missatge / problema que vols resoldre",
      },
      submit: "Sol·licitar una demo",
      success: "Gràcies. Hem rebut el teu missatge i et contactarem aviat.",
    },
    footer: {
      rights: "© 2026 Alteil Solutions. Tots els drets reservats.",
      legal: ["Privacitat", "Termes", "Contacte"],
    },
  },
} as const
