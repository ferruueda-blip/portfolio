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
