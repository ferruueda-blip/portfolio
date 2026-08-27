import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const TRANSLATIONS = {
  es: {
    // Navigation
    nav_home: "Inicio",
    nav_skills: "Skills",
    nav_projects: "Proyectos",
    nav_experience: "Experiencia",
    nav_education: "Educación",
    nav_contact: "Contacto",
    nav_cta: "Contactar",
    
    // Header status
    sys_online: "DISPONIBLE • REMOTO",
    header_status: "LIDERAZGO DE PRODUCTO • DISPONIBLE",
    operator_portfolio: "PORTAFOLIO",
    operator_portfolio_title: "PORTAFOLIO",
    
    // Hero
    operator_status: "FOCUS: PRODUCT OWNER & OPERACIONES B2B",
    location_label: "QUITO, EC · REMOTO",
    hero_title_1: "FERNANDO",
    hero_title_2: "RUEDA",
    hero_subtitle_text: "Product Owner & Technical PM | Operaciones & Procesos",
    hero_bio: "Conecto la estrategia de negocio con la ejecución técnica mediante metodologías ágiles y automatización para asegurar que la operación responda directamente a los objetivos del negocio.",
    hero_cta_cv: "Descargar CV (PDF)",
    hero_cta_cv_loading: "Generando CV…",
    hero_cta_projects: "Ver Proyectos",
    
    // Credibility Strip
    strip_metric1_val: "+6 AÑOS",
    strip_metric1_desc: "Liderando equipos y producto",
    strip_metric2_val: "+30 CLIENTES",
    strip_metric2_desc: "B2B gestionados a lo largo de mi carrera",
    strip_metric3_val: "+55 PROYECTOS",
    strip_metric3_desc: "Implementados y entregados",
    
    // Projects
    projects_badge: "PROYECTOS DESTACADOS",
    projects_title: "Soluciones de Impacto Real",
    projects_desc: "Casos de estudio y sistemas diseñados para automatizar operaciones y liderar la integración de tecnología.",
    projects_pain_label: "Dolor",
    projects_result_label: "Resultado",
    projects_employer_label: "Empresa",
    projects_role_label: "Rol",
    
    projects_p1_title: "Caso 01: Dirección de Producto SaaS (Dishio)",
    projects_p1_desc: "Falta de dirección estratégica en el MVP temprano y alto riesgo de desalineación entre desarrollo y mercado.",
    projects_p1_impact: "Definición del roadmap crítico y aseguramiento de un lanzamiento ágil en 6 meses, capturando sus primeros 5 clientes activos.",
    projects_p1_placeholder: "[Roadmap de Producto]",
    projects_p1_employer: "Condorsoft",
    projects_p1_role: "Project Manager / Product Owner",
    
    projects_p2_title: "Caso 02: Transformación e IA a Gran Escala (Cervecería Nacional / Vertical Bancaria)",
    projects_p2_desc: "Costos elevados en canales tradicionales de soporte y alta fricción en la atención masiva de miles de usuarios.",
    projects_p2_impact: "Arquitectura y despliegue de flujos conversacionales automatizados conectados a APIs legadas, permitiendo autogestión fluida con foco en retención.",
    projects_p2_placeholder: "[Arquitectura de IA]",
    projects_p2_employer: "Jelou AI",
    projects_p2_role: "Product Owner / AI Agent Ops",
    
    projects_p3_title: "Caso 03: Eficiencia de Operaciones B2B (Dashboard Hubspot + ClickUp)",
    projects_p3_desc: "Opacidad en el pipeline de onboarding de clientes y cuellos de botella críticos que retrasaban la facturación.",
    projects_p3_impact: "Integración automatizada end-to-end que visibilizó los tiempos de entrega y redujo drásticamente la fricción operativa.",
    projects_p3_placeholder: "[Dashboard de Operaciones]",
    projects_p3_employer: "Jelou AI",
    projects_p3_role: "Product Owner / Ops",
    
    // Skills
    skills_badge: "STACK & HABILIDADES",
    skills_title: "Especialidades Operativas e Integración de IA",
    skills_desc: "Metodologías ágiles, automatización e ingeniería de procesos aplicadas directamente para conectar la visión de negocio con el código en producción, eliminando fricciones.",
    skills_subheader: "Herramientas y Metodologías",
    skills_box_title: "¿El objetivo común?",
    skills_box_desc: "Traducir requerimientos complejos en soluciones técnicas eficientes, seguras y operables.",
    skills_footer_badge: "100% enfocado en ejecución",
    skills_pillar_execution_title: "Gobernanza de Entrega",
    skills_pillar_execution_desc: "Despliegue de productos viables priorizando la reducción drástica del time-to-market. Estructuración de ciclos de trabajo que absorben la ambigüedad, controlan las desviaciones sistémicas y aseguran la viabilidad financiera del desarrollo.",
    skills_pillar_business_title: "Arquitectura de Rentabilidad",
    skills_pillar_business_desc: "Alineación absoluta entre la infraestructura tecnológica y el estado de resultados. Integración de ecosistemas B2B diseñados específicamente para escalar conversiones, abrir canales de adquisición y proteger el P&L de la compañía.",
    skills_pillar_tech_title: "Eficiencia Operativa",
    skills_pillar_tech_desc: "Traducción de lógicas de negocio complejas en sistemas de baja fricción. Estandarización de procesos que erradican la dependencia manual, previenen cuellos de botella y mitigan la deuda técnica a largo plazo.",
    
    // Experience
    exp_badge: "EXPERIENCIA PROFESIONAL",
    exp_title: "Operando la Brecha Digital",
    exp_desc: "Lidero el desarrollo de software, la automatización con IA y la optimización de procesos en empresas dinámicas de tecnología e industria.",
    exp_impact: "Impacto y Resultados Clave",
    
    // Education
    edu_badge: "EDUCACIÓN",
    edu_title: "Formación Profesional",
    edu_degree_1: "Ingeniero Industrial",
    edu_school_1: "Universidad Técnica Particular de Loja",
    edu_degree_2: "Magíster en Transformación Digital",
    edu_school_2: "TECH University de México",

    // Contact
    contact_badge: "HABLEMOS",
    contact_title: "¿Listo para acelerar tu operación?",
    contact_desc: "Si buscas a alguien que cierre la brecha entre la estrategia y el desarrollo, hablemos.",
    contact_schedule: "Agendar Espacio",
    contact_send_email: "Hablemos por Email",
    contact_whatsapp: "Hablemos por WhatsApp",
    contact_copy: "Copiar Email",
    contact_copied: "¡Copiado!",
    contact_linkedin: "LinkedIn",
    
    // Footer
    footer_end_transmission: "ESTADO PROFESIONAL",
    footer_status: "LÍDER DE PRODUCTO Y OPERACIONES • ACTIVO",
    footer_rights: "Todos los derechos reservados.",
    footer_to_top: "Volver arriba",
    footer_role: "ING. INDUSTRIAL • TRANSFORMACIÓN DIGITAL • OPERACIONES",
  },
  en: {
    // Navigation
    nav_home: "Home",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_education: "Education",
    nav_contact: "Contact",
    nav_cta: "Contact",
    
    // Header status
    sys_online: "AVAILABLE • REMOTE",
    header_status: "PRODUCT LEADERSHIP • AVAILABLE",
    operator_portfolio: "PORTFOLIO",
    operator_portfolio_title: "PORTFOLIO",
    
    // Hero
    operator_status: "FOCUS: PRODUCT OWNER & B2B OPERATIONS",
    location_label: "QUITO, EC · REMOTE",
    hero_title_1: "FERNANDO",
    hero_title_2: "RUEDA",
    hero_subtitle_text: "Product Owner & Technical PM | Operations & Processes",
    hero_bio: "I connect business strategy with technical execution through agile methodologies and automation to ensure that operations respond directly to business objectives.",
    hero_cta_cv: "Download CV (PDF)",
    hero_cta_cv_loading: "Generating CV…",
    hero_cta_projects: "View Projects",
    
    // Credibility Strip
    strip_metric1_val: "+6 YEARS",
    strip_metric1_desc: "Leading teams and product lifecycle",
    strip_metric2_val: "+30 CLIENTS",
    strip_metric2_desc: "B2B managed throughout my career",
    strip_metric3_val: "+55 PROJECTS",
    strip_metric3_desc: "Implemented and delivered",
    
    // Projects
    projects_badge: "FEATURED PROJECTS",
    projects_title: "Real Impact Solutions",
    projects_desc: "Case studies and systems designed to automate operations and lead technology integration.",
    projects_pain_label: "Pain Point",
    projects_result_label: "Outcome",
    projects_employer_label: "Employer",
    projects_role_label: "Role",
    
    projects_p1_title: "Case 01: SaaS Product Leadership (Dishio)",
    projects_p1_desc: "Lack of strategic direction during the early MVP phase, leading to a high risk of misalignment between product development and market demand.",
    projects_p1_impact: "Defined the critical product roadmap and secured an agile MVP launch within 6 months, successfully onboarding the platform's first 5 active clients.",
    projects_p1_placeholder: "[Product Roadmap]",
    projects_p1_employer: "Condorsoft",
    projects_p1_role: "Project Manager / Product Owner",
    
    projects_p2_title: "Case 02: Large-Scale Transformation & AI (Cervecería Nacional / Banking Vertical)",
    projects_p2_desc: "Prohibitive costs in traditional support channels and high friction when addressing high-volume inquiries from thousands of users.",
    projects_p2_impact: "Architected and deployed automated conversational flows integrated with legacy APIs, enabling seamless self-service operations with a core focus on customer retention.",
    projects_p2_placeholder: "[AI Architecture]",
    projects_p2_employer: "Jelou AI",
    projects_p2_role: "Product Owner / AI Agent Ops",
    
    projects_p3_title: "Case 03: B2B Operations Efficiency (Hubspot + ClickUp Dashboard)",
    projects_p3_desc: "Lack of visibility in the client onboarding pipeline coupled with critical operational bottlenecks that delayed billing cycles.",
    projects_p3_impact: "Engineered an end-to-end automated integration that brought full visibility to delivery timelines and drastically reduced operational friction.",
    projects_p3_placeholder: "[Operations Dashboard]",
    projects_p3_employer: "Jelou AI",
    projects_p3_role: "Product Owner / Ops",
    
    // Skills
    skills_badge: "STACK & SKILLS",
    skills_title: "Operational Specializations & AI Integration",
    skills_desc: "Agile methodologies, automation, and process engineering applied directly to connect business vision with production-ready code, eliminating friction.",
    skills_subheader: "Tools & Methodologies",
    skills_box_title: "The common goal?",
    skills_box_desc: "Translate complex requirements into technical, efficient, secure, and operable solutions.",
    skills_footer_badge: "100% execution-focused",
    skills_pillar_execution_title: "Delivery Governance",
    skills_pillar_execution_desc: "Deployment of viable products, prioritizing substantial time-to-market reduction. Structuring high-impact work cycles that absorb ambiguity, control systemic deviations, and guarantee the financial viability of software development.",
    skills_pillar_business_title: "Profitability Architecture",
    skills_pillar_business_desc: "Absolute alignment between technological infrastructure and the corporate income statement. Designing and integrating B2B ecosystems optimized to scale conversions, expand acquisition channels, and protect company P&L.",
    skills_pillar_tech_title: "Operational Efficiency",
    skills_pillar_tech_desc: "Translation of complex business logic into high-efficiency, low-friction systems. Process standardization that eliminates manual dependencies, prevents bottlenecks, and mitigates long-term technical debt.",
    
    // Experience
    exp_badge: "PROFESSIONAL EXPERIENCE",
    exp_title: "Bridging the Tech-Business Gap",
    exp_desc: "I lead software development, AI automation, and process optimization across dynamic tech and industrial environments.",
    exp_impact: "Key Impact & Results",
    
    // Education
    edu_badge: "EDUCATION",
    edu_title: "Academic Background",
    edu_degree_1: "Industrial Engineer",
    edu_school_1: "Universidad Técnica Particular de Loja",
    edu_degree_2: "Master in Digital Transformation",
    edu_school_2: "TECH University of Mexico",

    // Contact
    contact_badge: "GET IN TOUCH",
    contact_title: "Ready to speed up your operations?",
    contact_desc: "If you are looking for someone who bridges the gap between strategy and development, let's talk.",
    contact_schedule: "Schedule a Call",
    contact_send_email: "Let's Talk via Email",
    contact_whatsapp: "Let's Talk via WhatsApp",
    contact_copy: "Copy Email",
    contact_copied: "Copied!",
    contact_linkedin: "LinkedIn",
    
    // Footer
    footer_end_transmission: "PROFESSIONAL STATUS",
    footer_status: "PRODUCT & OPERATIONS LEADER • ACTIVE",
    footer_rights: "All rights reserved.",
    footer_to_top: "Back to top",
    footer_role: "INDUSTRIAL ENG. • DIGITAL TRANSFORMATION • OPERATIONS",
  }
};

const STORAGE_KEY = "portfolio-lang";

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "es";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "es" || stored === "en") return stored;
  } catch {
    // localStorage unavailable (private mode, blocked cookies) — fall through.
  }
  return navigator.language?.toLowerCase().startsWith("en") ? "en" : "es";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Ignore persistence failures.
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  const t = (key: string): string => {
    const section = TRANSLATIONS[language];
    return (section as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
