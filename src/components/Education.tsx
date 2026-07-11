import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { GraduationCap, Award } from "lucide-react";
import { EDUCATION_HISTORY } from "../data";

export default function Education() {
  const { language, t } = useLanguage();

  return (
    <section id="education" className="py-24 bg-transparent relative border-t border-white/5">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16 max-w-2xl">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 mb-3 flex items-center justify-center md:justify-start gap-2">
            <span className="w-4 h-[1px] bg-blue-500/50 inline-block"></span>
            {t("edu_badge")}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            {t("edu_title")}
          </h3>
        </div>

        {/* Education Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="education-grid">
          {EDUCATION_HISTORY.map((item, idx) => {
            const Icon = idx === 0 ? GraduationCap : Award;
            const accentColorClass = idx === 0 ? "bg-blue-500" : "bg-blue-400";
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-lg p-6 hover:bg-white/[0.04] hover:border-white/15 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Ambient indicator accent line */}
                <div className={`absolute top-0 left-0 bottom-0 w-[3px] ${accentColorClass}`} />
                
                <div className="flex items-start gap-4 pl-2">
                  <div className="w-10 h-10 rounded-sm bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0 mt-1">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-blue-400 uppercase font-bold block mb-1">
                      {t("edu_badge")}
                    </span>
                    <h4 className="text-lg font-display font-bold text-white tracking-tight leading-snug">
                      {item.degree[language]}
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm mt-2 font-mono uppercase tracking-wider">
                      {item.school[language]}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

