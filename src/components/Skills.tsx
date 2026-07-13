import React from "react";
import { SKILL_CATEGORIES } from "../data";
import { Layers, Cpu, TrendingUp, ShieldCheck, Coins, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export default function Skills() {
  const { language, t } = useLanguage();

  // Map category to a specific Lucide icon and theme style
  const getCategoryTheme = (id: string) => {
    switch (id) {
      case "product-management":
        return {
          icon: <Layers className="w-5 h-5 text-blue-400" />,
          borderColor: "group-hover:border-blue-500/25",
          accentColor: "text-blue-400",
        };
      case "ai-data":
        return {
          icon: <Cpu className="w-5 h-5 text-blue-400" />,
          borderColor: "group-hover:border-blue-500/25",
          accentColor: "text-blue-400",
        };
      case "processes":
        return {
          icon: <TrendingUp className="w-5 h-5 text-blue-400" />,
          borderColor: "group-hover:border-blue-500/25",
          accentColor: "text-blue-400",
        };
      default:
        return {
          icon: <Layers className="w-5 h-5 text-slate-400" />,
          borderColor: "group-hover:border-white/10",
          accentColor: "text-slate-400",
        };
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 bg-transparent relative border-t border-white/5">
      {/* Decorative background scanline/mesh pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.002)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-40" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
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

        {/* Categories Grid (Asymmetric Geometries) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" id="skills-grid">
          {SKILL_CATEGORIES.map((category, index) => {
            const theme = getCategoryTheme(category.id);
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col h-full bg-[#080d16]/35 border border-white/5 hover:border-blue-500/20 transition-all duration-300 group"
                style={{
                  clipPath: "polygon(12px 0px, 100% 0px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0px 100%, 0px 12px)"
                }}
              >
                {/* Glow effect on card hover */}
                <div className="absolute inset-0 bg-blue-500/[0.005] group-hover:bg-blue-500/[0.015] transition-colors pointer-events-none" />

                <div className="p-6 sm:p-7 flex flex-col h-full z-10">
                  {/* Category Header */}
                  <div className="flex items-center space-x-3.5 mb-5">
                    <div className="p-2.5 bg-white/5 border border-white/10 text-blue-400">
                      {theme.icon}
                    </div>
                    <h4 className="font-display font-extrabold text-base text-slate-100 group-hover:text-white transition-colors uppercase tracking-tight">
                      {category.title[language]}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 flex-grow font-sans">
                    {category.description[language]}
                  </p>

                  {/* Core Stack Tools */}
                  <div className="border-t border-white/5 pt-5 mt-auto">
                    <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase block mb-3">
                      {t("skills_subheader")}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="text-[10px] font-mono px-2 py-0.5 bg-white/[0.02] hover:bg-blue-500/10 border border-white/5 hover:border-blue-500/20 text-slate-400 hover:text-white transition-all cursor-default"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 100% Execution Pillars Highlight Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative p-[1px] bg-gradient-to-r from-blue-500/10 via-blue-500/20 to-blue-500/10"
          style={{
            clipPath: "polygon(16px 0px, 100% 0px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0px 100%, 0px 16px)"
          }}
          id="skills-tactical-block"
        >
          {/* Inner Content Container */}
          <div 
            className="bg-[#060a12]/95 p-6 sm:p-10"
            style={{
              clipPath: "polygon(16px 0px, 100% 0px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0px 100%, 0px 16px)"
            }}
          >
            {/* Header / Accent indicator */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6 mb-8">
              <div>
                <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 border border-blue-500/20 px-2.5 py-1">
                  {t("skills_footer_badge")}
                </span>
                <h4 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight mt-3">
                  {t("skills_box_title")}
                </h4>
              </div>
              <p className="text-gray-400 text-sm sm:text-base font-medium max-w-sm sm:text-right font-sans">
                {t("skills_box_desc")}
              </p>
            </div>

            {/* Tactical Pillar Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Pillar 1: Gobernanza de Entrega */}
              <div 
                className="relative p-[1px] bg-white/5 hover:bg-blue-500/20 transition-all duration-300"
                style={{
                  clipPath: "polygon(10px 0px, 100% 0px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0px 100%, 0px 10px)"
                }}
              >
                <div 
                  className="bg-black/40 p-5 sm:p-6 h-full flex flex-col"
                  style={{
                    clipPath: "polygon(10px 0px, 100% 0px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0px 100%, 0px 10px)"
                  }}
                >
                  <div className="flex items-center gap-2.5 mb-4 text-blue-400">
                    <div className="p-1.5 bg-blue-500/10 border border-blue-500/20">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider">
                      {t("skills_pillar_execution_title")}
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                    {t("skills_pillar_execution_desc")}
                  </p>
                </div>
              </div>

              {/* Pillar 2: Arquitectura de Rentabilidad */}
              <div 
                className="relative p-[1px] bg-white/5 hover:bg-blue-500/20 transition-all duration-300"
                style={{
                  clipPath: "polygon(10px 0px, 100% 0px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0px 100%, 0px 10px)"
                }}
              >
                <div 
                  className="bg-black/40 p-5 sm:p-6 h-full flex flex-col"
                  style={{
                    clipPath: "polygon(10px 0px, 100% 0px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0px 100%, 0px 10px)"
                  }}
                >
                  <div className="flex items-center gap-2.5 mb-4 text-blue-400">
                    <div className="p-1.5 bg-blue-500/10 border border-blue-500/20">
                      <Coins className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider">
                      {t("skills_pillar_business_title")}
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                    {t("skills_pillar_business_desc")}
                  </p>
                </div>
              </div>

              {/* Pillar 3: Eficiencia Operativa */}
              <div 
                className="relative p-[1px] bg-white/5 hover:bg-blue-500/20 transition-all duration-300"
                style={{
                  clipPath: "polygon(10px 0px, 100% 0px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0px 100%, 0px 10px)"
                }}
              >
                <div 
                  className="bg-black/40 p-5 sm:p-6 h-full flex flex-col"
                  style={{
                    clipPath: "polygon(10px 0px, 100% 0px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0px 100%, 0px 10px)"
                  }}
                >
                  <div className="flex items-center gap-2.5 mb-4 text-blue-400">
                    <div className="p-1.5 bg-blue-500/10 border border-blue-500/20">
                      <Zap className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider">
                      {t("skills_pillar_tech_title")}
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                    {t("skills_pillar_tech_desc")}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
