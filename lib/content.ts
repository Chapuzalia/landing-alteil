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
  stats: readonly { v: string; l: string }[]
  img?: string
  imgLight?: string
}

export const defaultLanguage: Language = "es"

export const content = {
  es: {
    meta: {
      title: "Alteil Solutions - Software a medida para empresas",
      description: "Creamos herramientas digitales que reducen el caos operativo, protegen tus datos y ayudan a tu equipo a trabajar con más claridad.",
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
      title: "Orden para avanzar.",
      body: "Convertimos procesos dispersos en herramientas claras, seguras y fáciles de usar para que tu equipo trabaje con menos fricción y más confianza.",
      primaryCta: "Hablemos de tu problema",
      secondaryCta: "Ver cómo ayudamos",
      stats: [
        { value: "B2B", label: "equipos y operaciones" },
        { value: "5", label: "problemas resueltos" },
        { value: "100%", label: "enfoque práctico" },
      ],
      capabilities: ["Sin cortes", "Datos seguros", "Reservas claras", "Stock bajo control", "Trabajo ordenado", "Decisiones con datos"],
    },
    overview: {
      tag: "ENFOQUE",
      title: "Construimos alrededor de lo que hoy te hace perder tiempo.",
      feature: {
        title: "De mensajes, hojas sueltas y dudas constantes a una forma clara de trabajar",
        desc: "Identificamos dónde se atasca tu operación y lo convertimos en una herramienta que da visibilidad, reduce errores, protege la información y permite que cada persona actúe sin depender de mil comprobaciones.",
      },
      cards: [
        { title: "Menos caos diario", desc: "Ordenamos ventas, turnos, reservas, recursos, clientes o tareas internas para que el equipo sepa qué hacer y cuándo hacerlo." },
        { title: "Más adopción", desc: "Diseñamos flujos simples para personas reales, con pantallas que ayudan a decidir rápido y no añaden trabajo innecesario." },
        { title: "Preparado para crecer", desc: "Tu información queda bien estructurada, protegida y lista para sumar equipos, sedes, clientes o nuevas necesidades sin rehacerlo todo." },
      ],
    },
    projects: {
      tag: "PROYECTOS",
      title: "Soluciones pensadas para quitar presión al día a día.",
      body: "Cada proyecto nace de una situación concreta: ventas que no pueden pararse, equipos que necesitan coordinarse, reservas que deben estar claras y datos que tienen que estar siempre bajo control.",
      detailsLabel: "Ver detalles",
      collapseLabel: "Ocultar detalles",
      items: [
        { label: "POS / TPV", title: "TPV que vende aunque falle internet", desc: "Vende, cobra y registra tickets sin parones. Cuando vuelve la conexión, todo queda actualizado.", features: ["Ventas rápidas desde un catálogo claro", "Caja y pagos sin confusión", "Datos seguros aunque internet falle"], ideal: "Para negocios donde parar la caja no es una opción.", stats: [{ v: "TPV", l: "ventas ágiles" }, { v: "Siempre", l: "sin parones" }], img: "/images/projects/pos-tpv.jpg", imgLight: "/images/projects/light/pos-tpv.png" },
        { label: "Shifter", title: "Turnos claros, equipo alineado", desc: "Planifica locales, trabajadores y eventos en un calendario simple, sin cadenas de mensajes.", features: ["Horarios visibles para todos", "Cambios y refuerzos bajo control", "Cuadrantes listos para compartir"], ideal: "Para equipos que pierden tiempo confirmando horarios.", stats: [{ v: "Locales", l: "coordinación visible" }, { v: "Eventos", l: "refuerzos claros" }], img: "/images/projects/shifter.jpg", imgLight: "/images/projects/light/shifter.png" },
        { label: "EventOS", title: "Eventos y material bajo control", desc: "Centraliza proyectos, stock y documentos para saber qué está reservado, qué falta y quién debe actuar.", features: ["Proyectos y fechas siempre visibles", "Material reservado sin duplicidades", "Cada equipo ve lo que necesita"], ideal: "Para empresas de eventos que quieren menos llamadas y menos sorpresas.", stats: [{ v: "Seguro", l: "datos separados" }, { v: "Stock", l: "sin duplicar" }], img: "/images/projects/eventos.jpg", imgLight: "/images/projects/light/eventos.png" },
        { label: "Court Manager", title: "Reservas sin llamadas ni líos", desc: "Socios reservan fácil y el club controla pistas, horarios, cobros y actividad diaria desde un solo lugar.", features: ["Reservas claras para socios", "Disponibilidad siempre actualizada", "Agenda y cobros en orden"], ideal: "Para clubs que quieren llenar pistas y liberar al equipo.", stats: [{ v: "Pistas", l: "ocupación clara" }, { v: "Socios", l: "mejor experiencia" }], img: "/images/projects/court-manager.jpg", imgLight: "/images/projects/light/court-manager.png" },
        { label: "CRM inmobiliario", title: "Clientes e inmuebles sin perderse", desc: "Centraliza propiedades, leads, agentes y web para vender con más contexto y menos trabajo duplicado.", features: ["Clientes e inmuebles en un lugar", "Seguimiento comercial claro", "Web conectada al día a día"], ideal: "Para inmobiliarias con datos repartidos en demasiadas herramientas.", stats: [{ v: "Leads", l: "menos pérdidas" }, { v: "Web", l: "sin duplicar" }], img: "/images/projects/crm-inmobiliario.jpg", imgLight: "/images/projects/light/crm-inmobiliario.png" },
        { label: "A medida", title: "La app que tu empresa necesita", desc: "Creamos una solución pensada para tus procesos, tu equipo y las decisiones que quieres tomar mejor.", features: ["Diseñada alrededor de tu operación", "Menos pasos, dudas y errores", "Preparada para crecer contigo"], ideal: "Cuando una herramienta genérica ya no encaja con tu negocio.", stats: [{ v: "A medida", l: "sin adaptarte a una plantilla" }, { v: "Claridad", l: "menos fricción" }], img: "/images/projects/custom-app.jpg", imgLight: "/images/projects/light/custom-app.png" },
      ],
    },
    team: {
      tag: "EQUIPO",
      title: "Un equipo cercano que entiende antes de construir.",
      body: "Nos sentamos con quienes viven el problema para descubrir qué les frena, qué les preocupa y qué tendría que pasar para que el trabajo fuera más sencillo.",
      cards: [
        { title: "Pensamiento de producto", desc: "Traducimos necesidades reales en decisiones concretas para llegar rápido a una solución que el equipo quiera usar." },
        { title: "Pegados al negocio", desc: "Escuchamos a las personas que hacen el trabajo cada día para que la herramienta encaje con su realidad, no con una teoría." },
        { title: "Ejecución práctica", desc: "Priorizamos lo que reduce fricción, ahorra tiempo y da tranquilidad operativa desde las primeras versiones." },
      ],
    },
    why: {
      tag: "POR QUÉ ALTEIL",
      title: "Porque una app útil no empieza en la pantalla. Empieza en tu forma de trabajar.",
      body: "Elegirnos no va de contratar tecnología. Va de tener un equipo que entiende el problema, ordena el proceso y construye una herramienta que tu gente quiera usar.",
      promise: "MOTIVO REAL",
      note: "No elegimos la solución por lo que queda bien en una demo, sino por lo que ayuda a tu equipo cuando hay presión, cambios y trabajo real encima de la mesa.",
      reasons: [
        "Primero escuchamos cómo trabaja tu empresa de verdad: dónde se pierde tiempo, dónde aparecen errores y qué depende demasiado de personas concretas.",
        "Después convertimos ese caos en un flujo claro: menos pasos, menos dudas y una forma común de trabajar para todo el equipo.",
        "Construimos pensando en adopción: cada pantalla tiene que ayudar a decidir, actuar o entender algo sin añadir más carga al día.",
        "Protegemos la información para que cada persona vea lo que necesita, sin ruido y sin poner en riesgo datos sensibles.",
        "Preparamos la base para crecer: más usuarios, más sedes, más clientes o nuevos procesos sin tener que empezar otra vez desde cero.",
        "Nos quedamos cerca del impacto: si no ahorra tiempo, reduce errores o da más control, no merece ocupar espacio en la app.",
      ],
      closing: "Te elegimos el camino corto hacia una operación más clara.",
    },
    contact: { tag: "CONTACTO", title: "Cuéntanos qué te está frenando.", body: "Si hay un proceso que consume tiempo, genera errores o depende demasiado de personas concretas, podemos ayudarte a convertirlo en una herramienta clara.", fields: { name: "Nombre", company: "Empresa", email: "Email", message: "Mensaje / problema que quieres resolver" }, submit: "Empezar conversación", success: "Gracias. Hemos recibido tu mensaje y te contactaremos pronto." },
    footer: { rights: "© 2026 Alteil Solutions. Todos los derechos reservados.", legal: ["Privacidad", "Términos", "Contacto"] },
  },
  en: {
    meta: { title: "Alteil Solutions - Custom software for business teams", description: "We build digital tools that reduce operational chaos, protect your data and help teams work with more clarity." },
    nav: { links: [{ label: "Projects", href: "#projects", targetId: "projects" }, { label: "Team", href: "#team", targetId: "team" }, { label: "Why us", href: "#why", targetId: "why" }, { label: "Contact", href: "#contact", targetId: "contact" }], cta: "Let's talk", languageLabel: "Select language", openMenu: "Open menu", closeMenu: "Close menu" },
    hero: { title: "Clarity to move forward.", body: "We turn scattered processes into clear, secure and easy-to-use tools so your team can work with less friction and more confidence.", primaryCta: "Talk about your problem", secondaryCta: "See how we help", stats: [{ value: "B2B", label: "teams and operations" }, { value: "5", label: "problems solved" }, { value: "100%", label: "practical focus" }], capabilities: ["No downtime", "Secure data", "Clear bookings", "Stock control", "Organized work", "Data-led decisions"] },
    overview: { tag: "APPROACH", title: "We build around what wastes your time today.", feature: { title: "From messages, loose spreadsheets and constant doubt to one clear way of working", desc: "We find where your operation gets stuck and turn it into a tool that gives visibility, reduces errors, protects information and lets each person act without endless checks." }, cards: [{ title: "Less daily chaos", desc: "We organize sales, shifts, bookings, resources, clients or internal tasks so teams know what to do and when." }, { title: "Higher adoption", desc: "We design simple flows for real people, with screens that help them decide quickly instead of creating extra work." }, { title: "Ready to grow", desc: "Your information is structured, protected and ready for more teams, locations, clients or new needs." }] },
    projects: { tag: "PROJECTS", title: "Solutions designed to take pressure off daily work.", body: "Every project starts from a concrete situation: sales that cannot stop, teams that need coordination, bookings that must be clear and data that has to stay under control.", detailsLabel: "View details", collapseLabel: "Hide details", items: [
      { label: "POS", title: "A POS that keeps selling offline", desc: "Sell, charge and register receipts without stops. When connection returns, everything updates.", features: ["Fast sales from a clear catalog", "Simple cash and payment control", "Secure data even when internet fails"], ideal: "For businesses where stopping the till is not an option.", stats: [{ v: "POS", l: "faster sales" }, { v: "Always", l: "no stops" }], img: "/images/projects/pos-tpv.jpg", imgLight: "/images/projects/light/pos-tpv.png" },
      { label: "Shifter", title: "Clear shifts, aligned teams", desc: "Plan venues, workers and events in one simple calendar, without endless message chains.", features: ["Schedules everyone can see", "Changes and extra staff under control", "Plans ready to share"], ideal: "For teams that lose time confirming schedules.", stats: [{ v: "Venues", l: "visible coordination" }, { v: "Events", l: "clear staffing" }], img: "/images/projects/shifter.jpg", imgLight: "/images/projects/light/shifter.png" },
      { label: "EventOS", title: "Events and equipment under control", desc: "Centralize projects, stock and documents so everyone knows what is booked, missing and next.", features: ["Projects and dates always visible", "Equipment booked without duplicates", "Each team sees what matters"], ideal: "For event companies that want fewer calls and fewer surprises.", stats: [{ v: "Secure", l: "separated data" }, { v: "Stock", l: "no duplicates" }], img: "/images/projects/eventos.jpg", imgLight: "/images/projects/light/eventos.png" },
      { label: "Court Manager", title: "Bookings without calls or confusion", desc: "Members book easily while the club controls courts, schedules, payments and daily activity in one place.", features: ["Clear bookings for members", "Availability always updated", "Agenda and payments in order"], ideal: "For clubs that want fuller courts and less admin work.", stats: [{ v: "Courts", l: "clear occupancy" }, { v: "Members", l: "better experience" }], img: "/images/projects/court-manager.jpg", imgLight: "/images/projects/light/court-manager.png" },
      { label: "Real estate CRM", title: "No lost clients or properties", desc: "Centralize properties, leads, agents and website publishing to sell with context and less duplicate work.", features: ["Clients and properties in one place", "Clear sales follow-up", "Website connected to daily work"], ideal: "For agencies with data spread across too many tools.", stats: [{ v: "Leads", l: "fewer losses" }, { v: "Web", l: "no duplicates" }], img: "/images/projects/crm-inmobiliario.jpg", imgLight: "/images/projects/light/crm-inmobiliario.png" },
      { label: "Custom app", title: "The app your company needs", desc: "We create a solution around your processes, your team and the decisions you want to make better.", features: ["Designed around your operation", "Fewer steps, doubts and mistakes", "Ready to grow with you"], ideal: "When generic tools no longer fit your business.", stats: [{ v: "Custom", l: "no forced template" }, { v: "Clarity", l: "less friction" }], img: "/images/projects/custom-app.jpg", imgLight: "/images/projects/light/custom-app.png" },
    ] },
    team: { tag: "TEAM", title: "A close team that understands before building.", body: "We sit with the people living the problem to learn what slows them down, what worries them and what would make work feel simpler.", cards: [{ title: "Product thinking", desc: "We turn real needs into concrete decisions to reach a solution the team actually wants to use." }, { title: "Close to the business", desc: "We listen to the people doing the work every day so the tool fits reality, not a theory." }, { title: "Practical execution", desc: "We prioritize what reduces friction, saves time and brings operational peace of mind from the first versions." }] },
    why: { tag: "WHY ALTEIL", title: "Because a useful app does not start on a screen. It starts with how your team works.", body: "Choosing us is not about buying technology. It is about having a team that understands the problem, organizes the process and builds a tool people actually want to use.", promise: "REAL REASON", note: "We do not choose the solution because it looks good in a demo, but because it helps your team when there is pressure, change and real work on the table.", reasons: ["First we listen to how your company really works: where time is lost, where mistakes appear and what depends too much on specific people.", "Then we turn that chaos into a clear flow: fewer steps, fewer doubts and one shared way of working for the whole team.", "We build for adoption: every screen has to help people decide, act or understand something without adding more daily load.", "We protect information so each person sees what they need, without noise and without putting sensitive data at risk.", "We prepare the base to grow: more users, more locations, more clients or new processes without starting again from zero.", "We stay close to impact: if it does not save time, reduce mistakes or give more control, it does not deserve space in the app."], closing: "We choose the shorter path to a clearer operation." },
    contact: { tag: "CONTACT", title: "Tell us what is slowing you down.", body: "If a process consumes time, creates mistakes or depends too much on specific people, we can help turn it into a clear tool.", fields: { name: "Name", company: "Company", email: "Email", message: "Message / problem you want to solve" }, submit: "Start the conversation", success: "Thanks. We received your message and will contact you soon." },
    footer: { rights: "© 2026 Alteil Solutions. All rights reserved.", legal: ["Privacy", "Terms", "Contact"] },
  },
  ca: {
    meta: { title: "Alteil Solutions - Programari a mida per a empreses", description: "Creem eines digitals que redueixen el caos operatiu, protegeixen les dades i ajuden els equips a treballar amb més claredat." },
    nav: { links: [{ label: "Projectes", href: "#projects", targetId: "projects" }, { label: "Equip", href: "#team", targetId: "team" }, { label: "Per què", href: "#why", targetId: "why" }, { label: "Contacte", href: "#contact", targetId: "contact" }], cta: "Parlem-ne", languageLabel: "Selecciona l'idioma", openMenu: "Obrir menú", closeMenu: "Tancar menú" },
    hero: { title: "Ordre per avançar.", body: "Convertim processos dispersos en eines clares, segures i fàcils d'utilitzar perquè el teu equip treballi amb menys fricció i més confiança.", primaryCta: "Parlem del teu problema", secondaryCta: "Veure com ajudem", stats: [{ value: "B2B", label: "equips i operacions" }, { value: "5", label: "problemes resolts" }, { value: "100%", label: "enfocament pràctic" }], capabilities: ["Sense talls", "Dades segures", "Reserves clares", "Estoc controlat", "Feina ordenada", "Decisions amb dades"] },
    overview: { tag: "ENFOCAMENT", title: "Construïm al voltant del que avui et fa perdre temps.", feature: { title: "De missatges, fulls solts i dubtes constants a una manera clara de treballar", desc: "Detectem on s'encalla la teva operativa i ho convertim en una eina que dona visibilitat, redueix errors, protegeix la informació i permet que cada persona actuï sense mil comprovacions." }, cards: [{ title: "Menys caos diari", desc: "Ordenem vendes, torns, reserves, recursos, clients o tasques internes perquè l'equip sàpiga què ha de fer i quan." }, { title: "Més adopció", desc: "Dissenyem fluxos simples per a persones reals, amb pantalles que ajuden a decidir ràpid i no afegeixen feina innecessària." }, { title: "Preparat per créixer", desc: "La teva informació queda ben estructurada, protegida i preparada per sumar equips, seus, clients o noves necessitats." }] },
    projects: { tag: "PROJECTES", title: "Solucions pensades per treure pressió al dia a dia.", body: "Cada projecte neix d'una situació concreta: vendes que no poden parar, equips que necessiten coordinar-se, reserves que han d'estar clares i dades que han d'estar sempre sota control.", detailsLabel: "Veure detalls", collapseLabel: "Amagar detalls", items: [
      { label: "POS / TPV", title: "Un TPV que ven encara que falli internet", desc: "Ven, cobra i registra tiquets sense aturades. Quan torna la connexió, tot queda actualitzat.", features: ["Vendes ràpides des d'un catàleg clar", "Caixa i pagaments sense confusió", "Dades segures encara que internet falli"], ideal: "Per a negocis on aturar la caixa no és una opció.", stats: [{ v: "TPV", l: "vendes àgils" }, { v: "Sempre", l: "sense parades" }], img: "/images/projects/pos-tpv.jpg", imgLight: "/images/projects/light/pos-tpv.png" },
      { label: "Shifter", title: "Torns clars, equip alineat", desc: "Planifica locals, treballadors i esdeveniments en un calendari simple, sense cadenes de missatges.", features: ["Horaris visibles per a tothom", "Canvis i reforços sota control", "Quadrants llestos per compartir"], ideal: "Per a equips que perden temps confirmant horaris.", stats: [{ v: "Locals", l: "coordinació visible" }, { v: "Events", l: "reforços clars" }], img: "/images/projects/shifter.jpg", imgLight: "/images/projects/light/shifter.png" },
      { label: "EventOS", title: "Esdeveniments i material sota control", desc: "Centralitza projectes, estoc i documents per saber què està reservat, què falta i qui ha d'actuar.", features: ["Projectes i dates sempre visibles", "Material reservat sense duplicats", "Cada equip veu el que necessita"], ideal: "Per a empreses d'esdeveniments que volen menys trucades i menys sorpreses.", stats: [{ v: "Segur", l: "dades separades" }, { v: "Estoc", l: "sense duplicar" }], img: "/images/projects/eventos.jpg", imgLight: "/images/projects/light/eventos.png" },
      { label: "Court Manager", title: "Reserves sense trucades ni embolics", desc: "Els socis reserven fàcil i el club controla pistes, horaris, cobraments i activitat en un sol lloc.", features: ["Reserves clares per a socis", "Disponibilitat sempre actualitzada", "Agenda i cobraments en ordre"], ideal: "Per a clubs que volen omplir pistes i reduir gestió.", stats: [{ v: "Pistes", l: "ocupació clara" }, { v: "Socis", l: "millor experiència" }], img: "/images/projects/court-manager.jpg", imgLight: "/images/projects/light/court-manager.png" },
      { label: "CRM immobiliari", title: "Clients i immobles sense perdre's", desc: "Centralitza propietats, leads, agents i web per vendre amb més context i menys feina duplicada.", features: ["Clients i immobles en un lloc", "Seguiment comercial clar", "Web connectada al dia a dia"], ideal: "Per a immobiliàries amb dades repartides en massa eines.", stats: [{ v: "Leads", l: "menys pèrdues" }, { v: "Web", l: "sense duplicar" }], img: "/images/projects/crm-inmobiliario.jpg", imgLight: "/images/projects/light/crm-inmobiliario.png" },
      { label: "A mida", title: "L'app que la teva empresa necessita", desc: "Creem una solució pensada pels teus processos, el teu equip i les decisions que vols prendre millor.", features: ["Dissenyada al voltant de la teva operativa", "Menys passos, dubtes i errors", "Preparada per créixer amb tu"], ideal: "Quan una eina genèrica ja no encaixa amb el teu negoci.", stats: [{ v: "A mida", l: "sense plantilla forçada" }, { v: "Claredat", l: "menys fricció" }], img: "/images/projects/custom-app.jpg", imgLight: "/images/projects/light/custom-app.png" },
    ] },
    team: { tag: "EQUIP", title: "Un equip proper que entén abans de construir.", body: "Ens asseiem amb qui viu el problema per descobrir què els frena, què els preocupa i què hauria de passar perquè la feina fos més senzilla.", cards: [{ title: "Pensament de producte", desc: "Traduïm necessitats reals en decisions concretes per arribar ràpid a una solució que l'equip vulgui utilitzar." }, { title: "A prop del negoci", desc: "Escoltem les persones que fan la feina cada dia perquè l'eina encaixi amb la seva realitat, no amb una teoria." }, { title: "Execució pràctica", desc: "Prioritzem allò que redueix fricció, estalvia temps i dona tranquil·litat operativa des de les primeres versions." }] },
    why: { tag: "PER QUÈ ALTEIL", title: "Perquè una app útil no comença a la pantalla. Comença en la teva manera de treballar.", body: "Triar-nos no va de contractar tecnologia. Va de tenir un equip que entén el problema, ordena el procés i construeix una eina que la teva gent vulgui utilitzar.", promise: "MOTIU REAL", note: "No triem la solució pel que queda bé en una demo, sinó pel que ajuda el teu equip quan hi ha pressió, canvis i feina real sobre la taula.", reasons: ["Primer escoltem com treballa realment la teva empresa: on es perd temps, on apareixen errors i què depèn massa de persones concretes.", "Després convertim aquest caos en un flux clar: menys passos, menys dubtes i una manera comuna de treballar per a tot l'equip.", "Construïm pensant en l'adopció: cada pantalla ha d'ajudar a decidir, actuar o entendre alguna cosa sense afegir més càrrega al dia.", "Protegim la informació perquè cada persona vegi el que necessita, sense soroll i sense posar en risc dades sensibles.", "Preparem la base per créixer: més usuaris, més seus, més clients o nous processos sense haver de començar de zero.", "Ens mantenim a prop de l'impacte: si no estalvia temps, redueix errors o dona més control, no mereix ocupar espai a l'app."], closing: "Triem el camí curt cap a una operativa més clara." },
    contact: { tag: "CONTACTE", title: "Explica'ns què t'està frenant.", body: "Si hi ha un procés que consumeix temps, genera errors o depèn massa de persones concretes, podem ajudar-te a convertir-lo en una eina clara.", fields: { name: "Nom", company: "Empresa", email: "Email", message: "Missatge / problema que vols resoldre" }, submit: "Començar conversa", success: "Gràcies. Hem rebut el teu missatge i et contactarem aviat." },
    footer: { rights: "© 2026 Alteil Solutions. Tots els drets reservats.", legal: ["Privacitat", "Termes", "Contacte"] },
  },
} as const
