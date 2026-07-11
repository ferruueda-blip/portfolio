import React from "react";
import { SKILL_CATEGORIES } from "../data";
import { Layers, Cpu, TrendingUp, Check } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export default function Skills() {
  const { language, t } = useLanguage();

  // Map index to a specific Lucide icon and color theme
  const getCategoryTheme = (id: string) => {
    switch (id) {
      case "product-management":
        return {
          icon: <Layers className="w-5 h-5 text-blue-400" />,
          tagBg: "bg-white/5 text-slate-300 border-white/10 hover:border-slate-700",
        };
      case "ai-data":
        return {
          icon: <Cpu className="w-5 h-5 text-blue-400" />,
          tagBg: "bg-blue-500/10 text-blue-300 border-blue-500/20 hover:border-blue-500/40",
        };
      case "processes":
        return {
          icon: <TrendingUp className="w-5 h-5 text-blue-400" />,
          tagBg: "bg-white/5 text-slate-300 border-white/10 hover:border-slate-700",
        };
      default:
        return {
          icon: <Layers className="w-5 h-5 text-slate-400" />,
          tagBg: "bg-white/5 text-slate-300 border-white/10",
        };
    }
  };

  return (
    <section id="skills" className="py-24 bg-transparent relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with system decorator lines */}
        <div className="text-center md:text-left mb-16 max-w-2xl">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 mb-3 flex items-center justify-center md:justify-start gap-2">
            <span className="w-4 h-[1px] bg-blue-500/50 inline-block"></span>
            {t("skills_badge")}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            {t("skills_title")}
          </h3>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed font-sans">
            {t("skills_desc")}
          </p>
        </div>

        {/* Grid Layout for Categories using Immersive glass cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="skills-grid">
          {SKILL_CATEGORIES.map((category, index) => {
            const theme = getCategoryTheme(category.id);
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-lg flex flex-col h-full hover:bg-white/[0.05] hover:border-white/15 transition-all duration-300 group"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-5">
                  <div className="p-2 bg-white/5 border border-white/10 rounded-sm">
                    {theme.icon}
                  </div>
                  <h4 className="font-display font-bold text-base text-slate-100 group-hover:text-white transition-colors uppercase tracking-tight">
                    {category.title[language]}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 flex-grow font-sans">
                  {category.description[language]}
                </p>

                {/* Tags Section */}
                <div className="border-t border-white/5 pt-5 mt-auto">
                  <span className="text-[9px] font-mono tracking-wider text-gray-500 uppercase block mb-3">
                    {t("skills_subheader")}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`text-[10px] font-mono px-2.5 py-1 rounded-sm border transition-all duration-200 cursor-default ${theme.tagBg}`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic bottom status bar with 3 pillars */}
        <div className="mt-16 bg-white/[0.02] border border-white/5 rounded-sm p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1: Execution */}
            <div className="flex flex-col gap-1.5 p-4 bg-white/[0.01] border border-white/5 rounded-sm hover:border-white/10 transition-colors">
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider">
                {t("skills_pillar_execution_title")}
              </span>
              <p className="text-gray-400 text-xs leading-relaxed font-sans">
                {t("skills_pillar_execution_desc")}
              </p>
            </div>

            {/* Pillar 2: Business */}
            <div className="flex flex-col gap-1.5 p-4 bg-white/[0.01] border border-white/5 rounded-sm hover:border-white/10 transition-colors">
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider">
                {t("skills_pillar_business_title")}
              </span>
              <p className="text-gray-400 text-xs leading-relaxed font-sans">
                {t("skills_pillar_business_desc")}
              </p>
            </div>

            {/* Pillar 3: Tech Pragmatism */}
            <div className="flex flex-col gap-1.5 p-4 bg-white/[0.01] border border-white/5 rounded-sm hover:border-white/10 transition-colors">
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider">
                {t("skills_pillar_tech_title")}
              </span>
              <p className="text-gray-400 text-xs leading-relaxed font-sans">
                {t("skills_pillar_tech_desc")}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
