import React from "react";
import { EXPERIENCE_TIMELINE } from "../data";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { Calendar as CalendarIcon, CheckSquare as CheckIcon, Briefcase as BriefcaseIcon, TrendingUp as TrendIcon } from "lucide-react";

export default function Experience() {
  const { language, t } = useLanguage();

  return (
    <section id="experience" className="py-16 sm:py-24 bg-transparent relative border-t border-white/5">
      {/* Ambient decorative glow */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16 max-w-2xl">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 mb-3 flex items-center justify-center md:justify-start gap-2">
            <span className="w-4 h-[1px] bg-blue-500/50 inline-block"></span>
            {t("exp_badge")}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            {t("exp_title")}
          </h3>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed font-sans">
            {t("exp_desc")}
          </p>
        </div>

        {/* Continuous Flat Timeline Layout */}
        <div className="relative border-l-2 border-white/5 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-12" id="experience-timeline">
          {EXPERIENCE_TIMELINE.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Timeline Circle Indicator with Briefcase Icon */}
                <span className="absolute -left-[39px] sm:-left-[49px] top-1.5 flex items-center justify-center w-8 h-8 rounded-none bg-[#090d16] border border-white/10 group-hover:border-blue-400 text-slate-400 group-hover:text-blue-400 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10">
                  <BriefcaseIcon className="w-4 h-4" />
                </span>

                {/* Main Job Card */}
                <div 
                  className="relative p-6 sm:p-8 bg-[#090d16]/40 hover:bg-[#0d1524]/50 border border-white/5 hover:border-blue-500/20 transition-all duration-300"
                  style={{
                    clipPath: "polygon(16px 0px, 100% 0px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0px 100%, 0px 16px)"
                  }}
                  id={`exp-card-${item.id}`}
                >
                  {/* Glass Card Underlay Glow on Hover */}
                  <div className="absolute inset-0 bg-blue-500/[0.01] group-hover:bg-blue-500/[0.02] transition-colors pointer-events-none" />

                  {/* Header info */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-4 mb-4">
                    <div>
                      <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
                        {item.company}
                      </span>
                      <h4 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight mt-0.5">
                        {item.role[language]}
                      </h4>
                    </div>

                    {/* Period Badge */}
                    <div className="inline-flex items-center gap-1.5 self-start md:self-center text-[11px] font-mono font-medium text-slate-400 bg-white/5 border border-white/10 px-3 py-1.5">
                      <CalendarIcon className="w-3.5 h-3.5 text-blue-400" />
                      <span>{item.period[language]}</span>
                    </div>
                  </div>

                  {/* Role Overview */}
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                    {item.description[language]}
                  </p>

                  {/* TACTICAL KEY IMPACT CARD (Independent structure with asymmetric corners) */}
                  <div 
                    className="relative p-[1px] bg-blue-500/15 group-hover:bg-blue-500/30 transition-all duration-300 mb-6"
                    style={{
                      clipPath: "polygon(10px 0px, 100% 0px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0px 100%, 0px 10px)"
                    }}
                  >
                    <div 
                      className="bg-blue-950/20 p-4"
                      style={{
                        clipPath: "polygon(10px 0px, 100% 0px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0px 100%, 0px 10px)"
                      }}
                    >
                      <span className="text-[10px] font-mono font-extrabold tracking-widest text-blue-400 uppercase flex items-center gap-1.5 mb-1.5">
                        <TrendIcon className="w-3.5 h-3.5" />
                        {language === "es" ? "MAYOR IMPACTO TÁCTICO" : "KEY TACTICAL IMPACT"}
                      </span>
                      <p className="text-sm sm:text-[15px] font-medium text-slate-200 leading-relaxed font-sans">
                        {item.keyImpact[language]}
                      </p>
                    </div>
                  </div>

                  {/* Key Achievements Bullet points */}
                  {item.achievements && item.achievements[language] && item.achievements[language].length > 0 && (
                    <div className="mb-6">
                      <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block mb-3">
                        {t("exp_impact")}
                      </span>
                      <ul className="space-y-3.5">
                        {item.achievements[language].map((achievement, actIdx) => (
                          <li key={actIdx} className="flex items-start gap-3 text-gray-400 text-xs sm:text-sm leading-relaxed">
                            <span className="flex-shrink-0 mt-1">
                              <CheckIcon className="w-4 h-4 text-blue-500" />
                            </span>
                            <span className="font-sans group-hover:text-gray-300 transition-colors">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Tags / Core Stack for role */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="border-t border-white/5 pt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2.5 py-1 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/15 text-slate-400 hover:text-white transition-all tracking-wider uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
