import { jsPDF } from "jspdf";
import { PERSONAL_INFO, SKILL_CATEGORIES, EXPERIENCE_TIMELINE, EDUCATION_HISTORY } from "../data";

class PdfWriter {
  doc: jsPDF;
  y: number;
  margin: number;
  pageHeight: number;
  lineWidth: number;

  constructor(doc: jsPDF, margin = 20) {
    this.doc = doc;
    this.y = margin;
    this.margin = margin;
    this.pageHeight = doc.internal.pageSize.getHeight();
    const pageWidth = doc.internal.pageSize.getWidth();
    this.lineWidth = pageWidth - (margin * 2);
  }

  checkPageBreak(neededHeight: number) {
    if (this.y + neededHeight > this.pageHeight - this.margin) {
      this.doc.addPage();
      this.y = this.margin;
    }
  }

  writeParagraph(
    text: string,
    fontSize = 10,
    style: "normal" | "bold" | "italic" = "normal",
    spacingAfter = 4,
    color = "#333333"
  ) {
    this.doc.setFont("helvetica", style);
    this.doc.setFontSize(fontSize);
    this.doc.setTextColor(color);
    
    const lines: string[] = this.doc.splitTextToSize(text, this.lineWidth);
    const lineHeightInPt = fontSize * 1.35;
    const lineHeightInMm = lineHeightInPt * 0.352778;

    for (let i = 0; i < lines.length; i++) {
      this.checkPageBreak(lineHeightInMm);
      this.doc.text(lines[i], this.margin, this.y);
      this.y += lineHeightInMm;
    }
    this.y += spacingAfter;
  }

  writeBulletPoint(text: string, fontSize = 10, spacingAfter = 3, color = "#333333") {
    this.doc.setFont("helvetica", "normal");
    this.doc.setFontSize(fontSize);
    this.doc.setTextColor(color);

    const bullet = "• ";
    const bulletWidth = this.doc.getTextWidth(bullet);
    const textWidth = this.lineWidth - bulletWidth;

    const lines: string[] = this.doc.splitTextToSize(text, textWidth);
    const lineHeightInPt = fontSize * 1.35;
    const lineHeightInMm = lineHeightInPt * 0.352778;

    for (let i = 0; i < lines.length; i++) {
      this.checkPageBreak(lineHeightInMm);
      const xPos = i === 0 ? this.margin : this.margin + bulletWidth;
      const lineText = i === 0 ? bullet + lines[i] : lines[i];
      this.doc.text(lineText, xPos, this.y);
      this.y += lineHeightInMm;
    }
    this.y += spacingAfter;
  }

  writeHeading(text: string, fontSize = 14, spacingAfter = 6, color = "#000000") {
    this.doc.setFont("helvetica", "bold");
    this.doc.setFontSize(fontSize);
    this.doc.setTextColor(color);
    const headingHeight = (fontSize * 1.35) * 0.352778;
    this.checkPageBreak(headingHeight);
    this.doc.text(text, this.margin, this.y);
    this.y += headingHeight + spacingAfter;
  }

  drawHorizontalRule() {
    this.checkPageBreak(4);
    this.doc.setDrawColor(220, 220, 220);
    this.doc.setLineWidth(0.2);
    this.doc.line(this.margin, this.y - 2, this.margin + this.lineWidth, this.y - 2);
    this.y += 2;
  }

  addSpacing(amount: number) {
    this.y += amount;
  }
}

const labels = {
  es: {
    profileTitle: "Perfil Profesional",
    experienceTitle: "Experiencia Profesional",
    skillsTitle: "Habilidades y Tecnologías",
    educationTitle: "Educación",
    profileText: "Ingeniero Industrial con más de 6 años de experiencia liderando la gestión de productos y optimizando flujos operativos B2B. Especializado en el liderazgo de equipos de desarrollo, priorización táctica del backlog e integración de agentes conversacionales e IA generativa para eliminar la fricción operativa y acelerar procesos de negocio.",
  },
  en: {
    profileTitle: "Professional Profile",
    experienceTitle: "Professional Experience",
    skillsTitle: "Skills & Technologies",
    educationTitle: "Education",
    profileText: "Results-driven Industrial Engineer with over 6 years of experience driving product management and optimizing B2B operational workflows. Expert in leading cross-functional engineering teams, tactical backlog prioritization, and integrating advanced conversational agents and generative AI technologies to eliminate operational friction and accelerate business value.",
  }
};

export function downloadResumePdf(lang: "es" | "en") {
  const doc = new jsPDF("p", "mm", "letter");
  
  doc.setDocumentProperties({
    title: `Fernando Rueda - CV (${lang.toUpperCase()})`,
    author: PERSONAL_INFO.fullName,
    creator: PERSONAL_INFO.fullName,
  });

  const writer = new PdfWriter(doc, 20);

  // 1. Header: Name
  writer.writeHeading(PERSONAL_INFO.fullName, 20, 4, "#1E3A8A"); // Accent primary blue
  
  const contactInfo = `${PERSONAL_INFO.location}  |  ${PERSONAL_INFO.email}  |  LinkedIn: linkedin.com/in/fdrueda`;
  writer.writeParagraph(contactInfo, 10, "normal", 4, "#4B5563");
  writer.drawHorizontalRule();

  const langLabels = labels[lang];

  // 2. Professional Profile
  writer.writeHeading(langLabels.profileTitle, 13, 3, "#1F2937");
  writer.writeParagraph(langLabels.profileText, 10, "normal", 5, "#374151");
  writer.drawHorizontalRule();

  // 3. Work Experience
  writer.writeHeading(langLabels.experienceTitle, 13, 3, "#1F2937");
  for (const exp of EXPERIENCE_TIMELINE) {
    const roleText = exp.role[lang];
    const companyText = exp.company;
    const periodText = exp.period[lang];
    
    writer.writeParagraph(`${roleText}  —  ${companyText}  |  ${periodText}`, 10, "bold", 2, "#111827");
    
    if (exp.description) {
      writer.writeParagraph(exp.description[lang], 10, "normal", 2, "#4B5563");
    }
    
    if (exp.achievements && exp.achievements[lang]) {
      for (const ach of exp.achievements[lang]) {
        writer.writeBulletPoint(ach, 9.5, 1.5, "#374151");
      }
    }
    writer.addSpacing(3);
  }
  writer.drawHorizontalRule();

  // 4. Skills and Technologies
  writer.writeHeading(langLabels.skillsTitle, 13, 3, "#1F2937");
  for (const cat of SKILL_CATEGORIES) {
    const catTitle = cat.title[lang];
    const skillListStr = cat.skills.map((s) => s.name).join(", ");
    writer.writeParagraph(`${catTitle}: ${skillListStr}`, 10, "normal", 3, "#374151");
  }
  writer.drawHorizontalRule();

  // 5. Education
  writer.writeHeading(langLabels.educationTitle, 13, 3, "#1F2937");
  for (const edu of EDUCATION_HISTORY) {
    const degreeText = edu.degree[lang];
    const schoolText = edu.school[lang];
    writer.writeParagraph(`${degreeText}  —  ${schoolText}`, 10, "normal", 3, "#374151");
  }

  const filename = lang === "es" 
    ? "fernando-rueda-cv-es.pdf" 
    : "fernando-rueda-cv-en.pdf";
  doc.save(filename);
}
