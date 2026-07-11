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
  tags?: string[];
}

export const PERSONAL_INFO = {
  fullName: "Fernando Rueda",
  shortName: "Fernando Rueda",
  location: "Quito, Ecuador",
  email: "fdrueda96@gmail.com",
  linkedin: "https://www.linkedin.com/in/fdrueda/",
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
      en: "I lead product management and B2B operational workflow optimization, coordinating engineering teams to deliver stable software solutions that eliminate operational friction and automate key processes.",
    },
    achievements: {
      es: [
        "Lideré la implementación de +25 proyectos de IA generativa para +16 clientes B2B, integrando APIs y agentes.",
        "Alcancé tasas de conversión de hasta el 80% en canales digitales mediante flujos transaccionales de autogestión.",
        "Reduje el Time-to-Value de despliegue en un ~30% (de 60 a 40 días promedio) reestructurando el equipo en células ágiles.",
        "Escalé la capacidad operativa creando desde cero una red de +50 Partner Builders activos.",
      ],
      en: [
        "I led the implementation of +25 generative AI projects for +16 B2B clients, integrating APIs and agents.",
        "I achieved conversion rates of up to 80% in digital channels through self-service transactional flows.",
        "I reduced deployment Time-to-Value by ~30% (from 60 to 40 average days) by restructuring the team into agile cells.",
        "I scaled operational capacity by creating an active network of +50 Partner Builders from scratch.",
      ],
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
      es: "Septiembre 2021 - Diciembre 2023",
      en: "September 2021 - December 2023",
    },
    description: {
      es: "Gestioné plataformas SaaS multi-cliente, lideré la traducción funcional entre negocio y tecnología, y coordiné el delivery técnico del equipo de desarrollo.",
      en: "I managed multi-tenant SaaS platforms, led functional translation between business and technology, and coordinated technical delivery for the development team.",
    },
    achievements: {
      es: [
        "Dirigí el ciclo de desarrollo SaaS B2B, logrando MVPs funcionales en 6 meses mediante metodologías ágiles.",
        "Lideré un equipo técnico de 5 personas con sprints de 3 semanas, iterando features core sin desvío de plazos.",
        "Mapeé procesos (BPMN) para garantizar la traducción técnica entre negocio e ingeniería.",
      ],
      en: [
        "I directed the B2B SaaS development cycle, achieving functional MVPs in 6 months using agile methodologies.",
        "I led a 5-person technical team with 3-week sprints, iterating core features with zero schedule deviation.",
        "I mapped processes (BPMN) to ensure accurate technical translation between business and engineering.",
      ],
    },
    tags: ["SaaS", "BPMN", "Project Management", "Jira", "Process Mapping"],
  },
  {
    id: "fametex",
    company: "Fametex",
    role: {
      es: "Coordinador de Procesos",
      en: "Process Coordinator",
    },
    period: {
      es: "Noviembre 2020 - Septiembre 2021",
      en: "November 2020 - September 2021",
    },
    description: {
       es: "Lideré iniciativas de mejora continua, estandarización de procesos bajo la filosofía Lean y la digitalización de operativas físicas tradicionales.",
       en: "I led continuous improvement initiatives, process standardization under Lean philosophy, and digitalization of traditional physical operations.",
    },
    achievements: {
      es: [
        "Alineé la capacidad de producción con la demanda comercial, soportando ventas sostenidas de ~$30,000 mensuales.",
        "Identifiqué cuellos de botella digitalizando procedimientos operativos bajo la filosofía Lean.",
      ],
      en: [
        "I aligned production capacity with commercial demand, supporting sustained monthly sales of ~$30,000.",
        "I identified bottlenecks by digitalizing operational procedures under a Lean philosophy.",
      ],
    },
    tags: ["Lean", "Continuous Improvement", "Standardization", "Operations"],
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

