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
    operator_status: "FOCO: PRODUCTO & OPERACIONES B2B",
    location_label: "UIO, EC • REMOTO",
    hero_title_1: "FERNANDO",
    hero_title_2: "RUEDA",
    hero_subtitle_text: "Product Owner & Technical PM | Operaciones & Procesos",
    hero_bio: "Estructuro soluciones operativas y despliegues de IA que erradican la deuda técnica, destraban cuellos de botella y aseguran la rentabilidad del producto. Cero fricción, pura eficiencia sistémica.",
    hero_cta_cv: "Descargar CV (PDF)",
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
    projects_impact_label: "Impacto:",
    projects_employer_label: "Empresa",
    projects_role_label: "Rol",
    
    projects_p1_title: "Cervecería Nacional (Transformación con IA)",
    projects_p1_desc: "Lideré la conexión con APIs, bases de datos y sistemas legados para automatizar la atención de miles de tenderos.",
    projects_p1_impact: "Miles de tenderos gestionan sus requerimientos por WhatsApp de forma interactiva y fluida.",
    projects_p1_placeholder: "[Diagrama de Arquitectura]",
    projects_p1_employer: "Jelou AI",
    projects_p1_role: "Product Owner / AI Agent Ops",
    
    projects_p2_title: "Dashboard Operativo (HubSpot + ClickUp)",
    projects_p2_desc: "Diseñé e implementé la automatización end-to-end de flujos de trabajo de implementaciones y onboarding.",
    projects_p2_impact: "Visibilidad del pipeline de onboarding y reducción de cuellos de botella en facturación.",
    projects_p2_placeholder: "[Captura Dashboard]",
    projects_p2_employer: "Jelou AI",
    projects_p2_role: "Product Owner / Ops",
    
    projects_p3_title: "Dishio (SaaS para restaurantes)",
    projects_p3_desc: "Dirigí la ideación, desarrollo completo y lanzamiento de la plataforma SaaS para restaurantes.",
    projects_p3_impact: "Despliegue del primer MVP funcional en 6 meses y cierre de los primeros 5 clientes.",
    projects_p3_placeholder: "[Mockup Producto]",
    projects_p3_employer: "Condorsoft",
    projects_p3_role: "Project Manager / Product Owner",
    
    projects_p4_title: "Simulador de Inversiones",
    projects_p4_desc: "Lideré el diseño y desarrollo de un canal en WhatsApp para simular y constituir inversiones a plazo fijo en tiempo real conectadas a cuentas bancarias.",
    projects_p4_impact: "Los clientes del banco simulan y generan inversiones directamente en WhatsApp de forma segura y sin fricciones.",
    projects_p4_placeholder: "[Canal WhatsApp Bancario]",
    projects_p4_employer: "Jelou AI",
    projects_p4_role: "Product Owner / AI Agent Ops",
    
    projects_p5_title: "Red Social Onírica",
    projects_p5_desc: "Coordiné la ideación, diseño UI/UX y desarrollo móvil de una app social para registrar sueños, compartir un diario onírico y conectar personas.",
    projects_p5_impact: "Publicación exitosa del MVP con sistema de diario privado para el usuario y panel de moderación para el administrador.",
    projects_p5_placeholder: "[Mockup App Móvil]",
    projects_p5_employer: "Condorsoft",
    projects_p5_role: "Project Manager",
    
    projects_p6_title: "Red de Partner Builders",
    projects_p6_desc: "Creé y gestioné desde cero una comunidad de más de 50 agencias y desarrolladores independientes para construir integraciones y flujos en nuestra plataforma.",
    projects_p6_impact: "Habilidad un nuevo canal de distribución B2B indirecto con crecimiento 100% orgánico y cero gasto de marketing.",
    projects_p6_placeholder: "[Comunidad de Partners B2B]",
    projects_p6_employer: "Jelou AI",
    projects_p6_role: "Senior Product Owner",
    
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
    operator_status: "FOCUS: PRODUCT & B2B OPERATIONS",
    location_label: "UIO, EC • REMOTE",
    hero_title_1: "FERNANDO",
    hero_title_2: "RUEDA",
    hero_subtitle_text: "Product Owner & Technical PM | Operations & Processes",
    hero_bio: "I structure operational solutions and AI deployments that eradicate technical debt, unblock bottlenecks, and ensure product profitability. Zero friction, pure systemic efficiency.",
    hero_cta_cv: "Download CV (PDF)",
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
    projects_impact_label: "Impact:",
    projects_employer_label: "Employer",
    projects_role_label: "Role",
    
    projects_p1_title: "Cervecería Nacional (AI Transformation)",
    projects_p1_desc: "I led the connection of APIs, databases, and legacy systems to automate customer support for thousands of shopkeepers.",
    projects_p1_impact: "Thousands of shopkeepers manage their requirements via WhatsApp.",
    projects_p1_placeholder: "[Architecture Diagram]",
    projects_p1_employer: "Jelou AI",
    projects_p1_role: "Product Owner / AI Agent Ops",
    
    projects_p2_title: "Operational Dashboard (HubSpot + ClickUp)",
    projects_p2_desc: "I designed and implemented the end-to-end automation of implementation and onboarding workflows.",
    projects_p2_impact: "Visibility into the onboarding pipeline and reduction of billing bottlenecks.",
    projects_p2_placeholder: "[Dashboard Screenshot]",
    projects_p2_employer: "Jelou AI",
    projects_p2_role: "Product Owner / Ops",
    
    projects_p3_title: "Dishio (Restaurant SaaS)",
    projects_p3_desc: "I directed the ideation, complete development, and launch of the B2B SaaS platform for restaurants.",
    projects_p3_impact: "Deployment of the first functional MVP in 6 months and closing of the first 5 clients.",
    projects_p3_placeholder: "[Product Mockup]",
    projects_p3_employer: "Condorsoft",
    projects_p3_role: "Project Manager / Product Owner",
    
    projects_p4_title: "Investment Simulator",
    projects_p4_desc: "I led the design and development of a WhatsApp channel that allows users to simulate and set up fixed-term investments in real time directly connected to bank accounts.",
    projects_p4_impact: "Bank customers securely simulate and generate investments directly on WhatsApp without friction.",
    projects_p4_placeholder: "[WhatsApp Banking Channel]",
    projects_p4_employer: "Jelou AI",
    projects_p4_role: "Product Owner / AI Agent Ops",
    
    projects_p5_title: "Dream Social Network",
    projects_p5_desc: "I coordinated the ideation, UI/UX design, and mobile development of a social app to record dreams, share an oniric diary, and connect people.",
    projects_p5_impact: "Successful MVP launch featuring private journals for users and a moderation dashboard for the administrator.",
    projects_p5_placeholder: "[Mobile App Mockup]",
    projects_p5_employer: "Condorsoft",
    projects_p5_role: "Project Manager",
    
    projects_p6_title: "Partner Builders Network",
    projects_p6_desc: "I created and managed from scratch a community of 50+ agencies and independent developers designing integrations and flows on top of our platform.",
    projects_p6_impact: "Enabled a new B2B indirect distribution channel with 100% organic growth and zero marketing spend.",
    projects_p6_placeholder: "[B2B Partner Community]",
    projects_p6_employer: "Jelou AI",
    projects_p6_role: "Senior Product Owner",

    // Skills
    skills_badge: "STACK & SKILLS",
    skills_title: "Operational Specializations & AI Integration",
    skills_desc: "Agile methodologies, automation, and process engineering applied directly to connect business vision with production-ready code, eliminating friction.",
    skills_subheader: "Tools & Methodologies",
    skills_box_title: "The common goal?",
    skills_box_desc: "Translate complex requirements into technical, efficient, secure, and operable solutions.",
    skills_footer_badge: "100% execution-focused",
    skills_pillar_execution_title: "Delivery Governance",
    skills_pillar_execution_desc: "Deployment of viable products prioritizing dramatic time-to-market reduction. Structuring work cycles that absorb ambiguity, control systemic deviations, and ensure financial feasibility of development.",
    skills_pillar_business_title: "Profitability Architecture",
    skills_pillar_business_desc: "Absolute alignment between technological infrastructure and the income statement. Integration of B2B ecosystems designed specifically to scale conversions, open acquisition channels, and protect company P&L.",
    skills_pillar_tech_title: "Operational Efficiency",
    skills_pillar_tech_desc: "Translation of complex business logic into low-friction systems. Standardization of processes that eradicate manual dependency, prevent bottlenecks, and mitigate long-term technical debt.",
    
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

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  useEffect(() => {
    document.documentElement.lang = language;
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
