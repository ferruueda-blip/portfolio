import React from "react";
import { PERSONAL_INFO } from "../data";
import { Mail, Linkedin, ExternalLink, ArrowUp, MessageCircle, Calendar } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative border-t border-white/5 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Contact Container Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-lg p-8 sm:p-12 text-center relative overflow-hidden"
          id="contact-card"
        >
          {/* Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 via-blue-400 to-transparent" />

          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 mb-3">
            {t("contact_badge")}
          </h2>
          <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4 uppercase">
            {t("contact_title")}
          </h3>
          <p className="text-gray-300 text-sm sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-sans italic">
            {t("contact_desc")}
          </p>

          {/* Interactive CTAs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10" id="contact-ctas">
            {/* Google Calendar Link */}
            <a
              href="https://calendar.app.google/2mkQaeJmJPWFZvpr6"
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2.5 px-5 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-sm font-mono transition-all duration-300 shadow-lg shadow-blue-500/15 hover:shadow-blue-500/30 cursor-pointer"
              id="contact-calendar-link"
            >
              <Calendar className="w-4 h-4 text-slate-100" />
              <span>{t("contact_schedule")}</span>
            </a>

            {/* Primary mailto link */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-full flex items-center justify-center gap-2.5 px-5 py-4 border border-white/15 hover:border-blue-500/50 text-white font-bold text-xs uppercase tracking-wider rounded-sm font-mono transition-all duration-300 bg-white/5 hover:bg-white/10 cursor-pointer shadow-md hover:shadow-blue-500/5"
              id="contact-mailto-link"
            >
              <Mail className="w-4 h-4 text-slate-200" />
              <span>{t("contact_send_email")}</span>
            </a>

            {/* WhatsApp Link */}
            <a
              href="https://wa.me/593987368191"
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2.5 px-5 py-4 border border-white/15 hover:border-emerald-500/50 text-white font-bold text-xs uppercase tracking-wider rounded-sm font-mono transition-all duration-300 bg-white/5 hover:bg-white/10 cursor-pointer shadow-md hover:shadow-emerald-500/5"
              id="contact-whatsapp-link"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>{t("contact_whatsapp")}</span>
            </a>
          </div>

          {/* Social connections */}
          <div className="flex items-center justify-center space-x-6 border-t border-white/5 pt-8" id="social-footer">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-blue-400 transition-colors"
              id="footer-linkedin"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-slate-600" />
            </a>
          </div>
        </motion.div>

        {/* Real Footer with System Indicators */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-gray-500 text-xs gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-[10px] font-mono uppercase tracking-widest text-slate-600">{t("footer_end_transmission")}</p>
            <p>© {new Date().getFullYear()} Fernando Rueda. {t("footer_rights")}</p>
          </div>
          <div className="flex items-center space-x-6">
            <span className="font-mono text-[9px] text-blue-500/50 uppercase tracking-wider">
              {t("footer_status")}
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 text-slate-500 hover:text-white rounded-sm hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-pointer"
              title={t("footer_to_top")}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
