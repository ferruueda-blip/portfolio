import React from "react";
import { PERSONAL_INFO } from "../data";
import { ArrowDown, Terminal, FileText, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { downloadResumePdf } from "../utils/pdfGenerator";

export default function Hero() {
  const { language, t } = useLanguage();

  const handleScrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden bg-transparent"
    >
      {/* Decorative ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badges / Operators Info */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {/* Operator Badge Info */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2.5 px-3 py-1.5 rounded-sm bg-white/5 border border-white/10 text-xs font-mono tracking-wider text-blue-400"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="uppercase text-[10px]">{t("operator_status")}</span>
            <span className="text-white/20">/</span>
            <span className="text-gray-400 text-[10px] uppercase flex items-center gap-1">
              <Terminal className="w-3 h-3" /> {t("location_label")}
            </span>
          </motion.div>
        </div>

        {/* Big Impact Name Header with Immersive UI Accent Glow */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-7xl font-extrabold leading-none tracking-tight text-white mb-4 uppercase font-display"
          id="hero-name"
        >
          {t("hero_title_1")} <br className="hidden sm:inline" />
          <span className="text-blue-500 accent-glow">{t("hero_title_2")}</span>
        </motion.h1>

        {/* Subtitle / Role Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs sm:text-base font-mono font-bold tracking-wide text-blue-400 uppercase mb-8"
          id="hero-subtitle"
        >
          {t("hero_subtitle_text")}
        </motion.div>

        {/* Bio paragraph with clean white highlighted text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10 font-sans"
          id="hero-bio"
        >
          {t("hero_bio")}
        </motion.p>

        {/* Sharp immersive CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          id="hero-ctas"
        >
          <button
            onClick={() => downloadResumePdf(language)}
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-sm shadow-lg shadow-blue-500/10 hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer font-mono"
            id="hero-cv-btn"
          >
            <FileText className="w-4 h-4" />
            {t("hero_cta_cv")}
          </button>
          
          <button
            onClick={handleScrollToProjects}
            className="w-full sm:w-auto px-8 py-3.5 border border-white/20 hover:border-blue-500 text-white font-medium text-xs uppercase tracking-wider rounded-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer bg-white/5 hover:bg-white/10 font-mono"
            id="hero-projects-btn"
          >
            {t("hero_cta_projects")}
            <ChevronRight className="w-4 h-4 text-blue-400" />
          </button>
        </motion.div>
      </div>

      {/* Elegant minimalist divider line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
