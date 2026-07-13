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
      {/* Immersive radial glow centering behind the main card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Contact Container Box with Double-Frame Asymmetric Geometry */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-[1px] bg-gradient-to-r from-blue-500/10 via-blue-500/30 to-blue-500/10"
          style={{
            clipPath: "polygon(24px 0px, 100% 0px, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0px 100%, 0px 24px)"
          }}
          id="contact-card-wrapper"
        >
          <div 
            className="bg-[#060a12]/95 p-8 sm:p-14 text-center relative overflow-hidden"
            style={{
              clipPath: "polygon(24px 0px, 100% 0px, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0px 100%, 0px 24px)"
            }}
            id="contact-card"
          >
            {/* HUD Cyber Line Accent */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            <h2 className="text-xs font-mono font-extrabold uppercase tracking-widest text-blue-400 mb-3">
              // {t("contact_badge")}
            </h2>
            <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4 uppercase">
              {t("contact_title")}
            </h3>
            <p className="text-gray-300 text-sm sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-sans">
              {t("contact_desc")}
            </p>

            {/* Tactical Grid Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12" id="contact-ctas">
              
              {/* Google Calendar Link (Primary Blue Cyber Button) */}
              <a
                href="https://calendar.app.google/2mkQaeJmJPWFZvpr6"
                target="_blank"
                rel="noreferrer"
                className="group/btn w-full flex items-center justify-center gap-2.5 px-5 py-4 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-extrabold uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 cursor-pointer"
                style={{
                  clipPath: "polygon(8px 0px, 100% 0px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0px 100%, 0px 8px)"
                }}
                id="contact-calendar-link"
              >
                <Calendar className="w-4 h-4 text-white group-hover/btn:scale-110 transition-transform" />
                <span>{t("contact_schedule")}</span>
              </a>

              {/* Primary mailto link (Subtle Border Cyber Button) */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="group/btn w-full flex items-center justify-center gap-2.5 px-5 py-4 border border-white/10 hover:border-blue-500/30 text-slate-200 hover:text-white font-mono text-xs font-extrabold uppercase tracking-widest bg-white/5 hover:bg-blue-500/10 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                style={{
                  clipPath: "polygon(8px 0px, 100% 0px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0px 100%, 0px 8px)"
                }}
                id="contact-mailto-link"
              >
                <Mail className="w-4 h-4 text-slate-300 group-hover/btn:scale-110 transition-transform" />
                <span>{t("contact_send_email")}</span>
              </a>

              {/* WhatsApp Link (Subtle Green Border Cyber Button) */}
              <a
                href="https://wa.me/593987368191"
                target="_blank"
                rel="noreferrer"
                className="group/btn w-full flex items-center justify-center gap-2.5 px-5 py-4 border border-white/10 hover:border-emerald-500/35 text-slate-200 hover:text-emerald-400 font-mono text-xs font-extrabold uppercase tracking-widest bg-white/5 hover:bg-emerald-500/10 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                style={{
                  clipPath: "polygon(8px 0px, 100% 0px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0px 100%, 0px 8px)"
                }}
                id="contact-whatsapp-link"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 group-hover/btn:scale-110 transition-transform" />
                <span>{t("contact_whatsapp")}</span>
              </a>

            </div>

            {/* Social connections */}
            <div className="flex items-center justify-center border-t border-white/5 pt-8" id="social-footer">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-blue-400 transition-colors"
                id="footer-linkedin"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn / FD_RUEDA</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-600" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Real Footer with System Indicators */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-gray-500 text-xs gap-4">
          <div className="space-y-1.5 text-center sm:text-left">
            <p className="text-[10px] font-mono uppercase tracking-widest text-slate-600">// {t("footer_end_transmission")}</p>
            <p className="font-mono text-[10px]">© {new Date().getFullYear()} Fernando Rueda. {t("footer_rights")}</p>
          </div>
          <div className="flex items-center space-x-6">
            <span className="font-mono text-[9px] text-blue-500/50 uppercase tracking-widest">
              [ {t("footer_status")} ]
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 text-slate-500 hover:text-white rounded-none hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-pointer"
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
