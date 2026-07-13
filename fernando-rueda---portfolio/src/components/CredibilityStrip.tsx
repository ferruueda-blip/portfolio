import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { Calendar, Building2, Briefcase } from "lucide-react";

export default function CredibilityStrip() {
  const { t } = useLanguage();

  const metrics = [
    {
      valueKey: "strip_metric1_val",
      descKey: "strip_metric1_desc",
      icon: Calendar,
    },
    {
      valueKey: "strip_metric2_val",
      descKey: "strip_metric2_desc",
      icon: Building2,
    },
    {
      valueKey: "strip_metric3_val",
      descKey: "strip_metric3_desc",
      icon: Briefcase,
    },
  ];

  return (
    <section id="credibility-strip" className="relative z-20 border-b border-white/5 bg-black/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 items-stretch" id="credibility-metrics">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col p-4 rounded-sm border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300 group"
                id={`cred-metric-${idx}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                  <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">
                    METRIC_0{idx + 1}
                  </span>
                </div>
                <div className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight leading-none mb-1">
                  {t(metric.valueKey)}
                </div>
                <p className="text-[11px] sm:text-xs text-slate-400 font-sans leading-snug">
                  {t(metric.descKey)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
