export interface TranslatedString {
  es: string;
  en: string;
}

export interface TranslatedArray {
  es: string[];
  en: string[];
}

export interface SkillItem {
  name: string;
}

export interface SkillCategory {
  id: string;
  title: TranslatedString;
  description: TranslatedString;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: TranslatedString;
  period: TranslatedString;
  description: TranslatedString;
  achievements?: TranslatedArray;
  keyImpact: TranslatedString;
  tags?: string[];
}

export const PERSONAL_INFO = {
  fullName: "Fernando Rueda",
  shortName: "Fernando Rueda",
  location: "Quito, Ecuador",
  email: "fdrueda96@gmail.com",
  linkedin: "https://www.linkedin.com/in/fdrueda/",
  // WhatsApp number in international format, digits only.
  whatsapp: "593987368191",
  calendarUrl: "https://calendar.app.google/2mkQaeJmJPWFZvpr6",
  siteUrl: "https://fdrueda.com",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "product-management",
    title: {
      es: "Gestión de Producto",
      en: "Product Management",
    },
    description: {
      es: "Liderazgo de equipos técnicos, priorización táctica y entrega continua de valor en plataformas de software.",
      en: "Leadership of technical teams, tactical backlog prioritization, and continuous value delivery on software platforms.",
    },
    skills: [
      { name: "Agile (Scrum / Kanban)" },
      { name: "Priorización de Backlog" },
      { name: "Jira & Confluence" },
      { name: "ClickUp" },
      { name: "Ciclo de Vida SaaS B2B" },
      { name: "Product Roadmap" },
      { name: "User Stories & Specs" },
      { name: "Product Analytics" },
    ],
  },
  {
    id: "ai-data",
    title: {
      es: "IA y Datos",
      en: "AI & Data",
    },
    description: {
      es: "Diseño, implementación y optimización de agentes inteligentes de IA conversacional y análisis de negocio.",
      en: "Design, implementation, and optimization of intelligent conversational AI agents and business analytics.",
    },
    skills: [
      { name: "LLMs (Gemini, OpenAI, Claude)" },
      { name: "Prompt Engineering" },
      { name: "Sistemas RAG" },
      { name: "AI Agent Ops" },
      { name: "Análisis de Datos" },
      { name: "Integración de APIs" },
      { name: "Orquestación de Agentes" },
    ],
  },
  {
    id: "processes",
    title: {
      es: "Procesos y Operaciones",
      en: "Processes & Operations",
    },
    description: {
      es: "Estandarización y eficiencia operativa inspirada en filosofías ágiles y Lean para eliminar cuellos de botella.",
      en: "Operational standardization and efficiency inspired by Lean and agile philosophies to eliminate bottlenecks.",
    },
    skills: [
      { name: "BPMN / Diagramación" },
      { name: "Mapeo de Procesos" },
      { name: "Filosofía Lean" },
      { name: "Miro & Lucidchart" },
      { name: "Automatización No-Code" },
      { name: "Mejora Continua" },
      { name: "HubSpot & CRM Ops" },
      { name: "Zapier & Make" },
    ],
  },
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    id: "jelou-ai",
    company: "Jelou AI",
    role: {
      es: "Senior Product Owner & Operations",
      en: "Senior Product Owner & Operations",
    },
    period: {
      es: "Marzo 2024 - Presente",
      en: "March 2024 - Present",
    },
    description: {
      es: "Lidero la gestión de producto y la optimización de flujos operativos B2B, coordinando equipos de ingeniería para entregar soluciones de software estables que eliminan la fricción operativa y automatizan procesos clave.",
      en: "Lead product management and B2B operational workflow optimization, coordinating engineering teams to deliver stable software solutions that eliminate operational friction and automate key processes.",
    },
    achievements: {
      es: [
        "Lideré la implementación de +25 proyectos de IA generativa para +16 clientes B2B, integrando APIs y agentes.",
        "Alcancé tasas de conversión de hasta el 80% en canales digitales mediante flujos transaccionales de autogestión.",
        "Reduje el Time-to-Value de despliegue en un ~30% (de 60 a 40 días promedio) reestructurando el equipo en células ágiles.",
        "Escalé la capacidad operativa creando desde cero una red de +50 Partner Builders activos.",
      ],
      en: [
        "Led the implementation of 25+ generative AI projects for 16+ B2B clients, integrating advanced LLM APIs and conversational agents.",
        "Achieved digital channel conversion rates of up to 80% by designing and executing self-service transactional flows.",
        "Reduced deployment Time-to-Value (TTV) by ~30% (from an average of 60 to 40 days) by restructuring engineering teams into high-performing agile cells.",
        "Scaled operational capacity by building an active network of 50+ Partner Builders from the ground up.",
      ],
    },
    keyImpact: {
      es: "Reducción del 30% en el Time-to-Value de despliegue (de 60 a 40 días promedio) reestructurando equipos de ingeniería en células ágiles de alto rendimiento.",
      en: "30% reduction in deployment Time-to-Value (from 60 to 40 average days) by restructuring engineering teams into high-performance agile cells."
    },
    tags: ["Operations", "Product Owner", "Agile", "Process Optimization", "SaaS"],
  },
  {
    id: "condorsoft",
    company: "Condorsoft",
    role: {
      es: "Project Manager & Process Analyst",
      en: "Project Manager & Process Analyst",
    },
    period: {
      es: "Noviembre 2020 - Diciembre 2023",
      en: "November 2020 - December 2023",
    },
    description: {
      es: "Gestioné plataformas SaaS multi-cliente, lideré la traducción funcional entre negocio y tecnología, y coordiné el delivery técnico del equipo de desarrollo.",
      en: "Managed multi-tenant SaaS platforms, leading functional translation between business and technology, and coordinating technical delivery for the development team.",
    },
    achievements: {
      es: [
        "Dirigí el ciclo de desarrollo SaaS B2B, logrando MVPs funcionales en 6 meses mediante metodologías ágiles.",
        "Lideré un equipo técnico de 5 personas con sprints de 3 semanas, iterando features core sin desvío de plazos.",
        "Mapeé procesos (BPMN) para garantizar la traducción técnica entre negocio e ingeniería.",
      ],
      en: [
        "Directed the end-to-end B2B SaaS development lifecycle, delivering functional MVPs within 6 months using Scrum and agile methodologies.",
        "Managed a cross-functional technical team of 5, facilitating 3-week sprints and iterating core product features with zero timeline deviation.",
        "Mapped operational processes using BPMN standards to ensure precise technical translation between business and engineering teams.",
      ],
    },
    keyImpact: {
      es: "Lanzamiento exitoso del MVP de la plataforma SaaS B2B en un plazo récord de 6 meses bajo metodologías ágiles y control de desviaciones técnicas.",
      en: "Successful launch of the B2B SaaS platform MVP in a record time of 6 months using agile methodologies and technical variance controls."
    },
    tags: ["SaaS", "BPMN", "Project Management", "Jira", "Process Mapping"],
  },
];

export interface EducationItem {
  id: string;
  degree: TranslatedString;
  school: TranslatedString;
}

export const EDUCATION_HISTORY: EducationItem[] = [
  {
    id: "degree-1",
    degree: {
      es: "Ingeniero Industrial",
      en: "Industrial Engineer",
    },
    school: {
      es: "Universidad Técnica Particular de Loja",
      en: "Universidad Técnica Particular de Loja",
    },
  },
  {
    id: "degree-2",
    degree: {
      es: "Magíster en Transformación Digital",
      en: "Master in Digital Transformation",
    },
    school: {
      es: "TECH University de México",
      en: "TECH University of Mexico",
    },
  },
];

