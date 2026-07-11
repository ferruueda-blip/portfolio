import React, { useState } from "react";
import { EXPERIENCE_TIMELINE } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { Calendar as CalendarIcon, CheckSquare as CheckIcon, ChevronDown as ChevronIcon, Briefcase as BriefcaseIcon } from "lucide-react";

export default function Experience() {
  const { language, t } = useLanguage();
  const [expandedId, setExpandedId] = useState<string | null>("jelou-ai");

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="py-24 bg-transparent relative border-t border-white/5">
      {/* Subtle ambient light from bottom left */}
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

        {/* Accordion Layout */}
        <div className="space-y-4" id="experience-accordion">
          {EXPERIENCE_TIMELINE.map((item, index) => {
            const isExpanded = expandedId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card rounded-lg overflow-hidden border border-white/10 hover:border-white/15 transition-colors"
              >
                {/* Accordion Header (Interactive trigger) */}
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 bg-white/[0.01] hover:bg-white/[0.03] transition-all cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-4">
                    {/* Role Icon Frame */}
                    <div className="hidden sm:flex w-10 h-10 rounded-sm bg-white/5 border border-white/10 items-center justify-center text-blue-400">
                      <BriefcaseIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-display font-bold text-white tracking-tight">
                        {item.role[language]}
                      </h4>
                      <p className="text-xs sm:text-sm font-semibold text-blue-400 font-mono uppercase tracking-wider mt-0.5">
                        {item.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Period Badge */}
                    <div className="hidden sm:inline-flex items-center space-x-1.5 text-[10px] font-mono font-medium text-slate-400 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-sm">
                      <CalendarIcon className="w-3 h-3 text-blue-500" />
                      <span>{item.period[language]}</span>
                    </div>
                    {/* Toggle Indicator */}
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-slate-400 p-1 rounded-full hover:bg-white/5"
                    >
                      <ChevronIcon className="w-5 h-5 text-blue-400" />
                    </motion.div>
                  </div>
                </button>

                {/* Collapsable Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 border-t border-white/5 bg-black/[0.15]">
                        {/* Mobile Period Badge */}
                        <div className="sm:hidden inline-flex items-center space-x-1.5 text-[10px] font-mono font-medium text-slate-400 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-sm mb-4">
                          <CalendarIcon className="w-3 h-3 text-blue-500" />
                          <span>{item.period[language]}</span>
                        </div>

                        {/* Summary / Mission */}
                        <p className="text-gray-300 text-sm leading-relaxed mb-5 font-sans">
                          {item.description[language]}
                        </p>

                        {/* Achievements List */}
                        {item.achievements && item.achievements[language] && item.achievements[language].length > 0 && (
                          <div className="mb-6">
                            <span className="text-[9px] font-mono tracking-wider text-gray-500 uppercase block mb-3">
                              {t("exp_impact")}
                            </span>
                            <ul className="space-y-3">
                              {item.achievements[language].map((achievement, actIdx) => (
                                <li key={actIdx} className="flex items-start space-x-2.5 text-gray-400 text-xs sm:text-sm leading-relaxed">
                                  <span className="flex-shrink-0 mt-1">
                                    <CheckIcon className="w-4 h-4 text-blue-500" />
                                  </span>
                                  <span className="font-sans">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Tech Tags */}
                        {item.tags && item.tags.length > 0 && (
                          <div className="border-t border-white/5 pt-4 flex flex-wrap gap-1.5">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] font-mono px-2.5 py-1 rounded-sm bg-white/5 border border-white/10 text-slate-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
