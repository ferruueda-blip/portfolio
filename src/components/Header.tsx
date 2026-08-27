import React, { useState, useEffect } from "react";
import { PERSONAL_INFO } from "../data";
import { Mail, Linkedin, Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { scrollToSection } from "../utils/scroll";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    scrollToSection(id);
  };

  const LanguageSwitcher = () => (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-white/10 hover:border-blue-500/50 bg-white/5 hover:bg-white/10 text-[10px] font-mono transition-all duration-200 uppercase tracking-wider cursor-pointer"
      title={language === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      <Globe className="w-3.5 h-3.5 text-blue-400" />
      <span className={language === "es" ? "text-blue-400 font-bold" : "text-slate-400"}>ES</span>
      <span className="text-white/20">|</span>
      <span className={language === "en" ? "text-blue-400 font-bold" : "text-slate-400"}>EN</span>
    </button>
  );

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-[#050505]/85 backdrop-blur-md border-white/10 shadow-lg shadow-black/30"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Name / Operator Status */}
          <div className="flex-shrink-0 flex items-center gap-4">
            <button
              onClick={() => goToSection("hero")}
              className="flex items-center space-x-2 text-left group"
              id="header-logo-btn"
            >
              <div className="px-2.5 h-8 rounded-sm bg-blue-600 flex items-center justify-center font-display font-black text-white text-sm tracking-wide shadow-sm">
                FR
              </div>
              <div className="hidden sm:block">
                <span className="text-[9px] text-slate-400 font-mono tracking-widest block uppercase">
                  {t("operator_portfolio_title")}
                </span>
              </div>
            </button>

            {/* Professional Status badge removed */}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
            <button
              onClick={() => goToSection("skills")}
              className="text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-blue-400 transition-colors cursor-pointer"
            >
              {t("nav_skills")}
            </button>
            <button
              onClick={() => goToSection("projects")}
              className="text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-blue-400 transition-colors cursor-pointer"
            >
              {t("nav_projects")}
            </button>
            <button
              onClick={() => goToSection("experience")}
              className="text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-blue-400 transition-colors cursor-pointer"
            >
              {t("nav_experience")}
            </button>
            <button
              onClick={() => goToSection("contact")}
              className="text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-blue-400 transition-colors cursor-pointer"
            >
              {t("nav_contact")}
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white rounded-sm hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
              aria-label="LinkedIn"
              id="header-linkedin-link"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-5 py-2 text-xs font-bold tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-sm font-mono transition-all duration-200 uppercase"
              id="header-cta-btn"
            >
              {t("nav_cta")}
            </a>
          </div>

          {/* Mobile menu button and switcher */}
          <div className="md:hidden flex items-center space-x-2.5">
            <LanguageSwitcher />
            
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 text-blue-400 hover:text-blue-300 rounded-sm bg-white/5 border border-white/10"
              aria-label="Email Direct"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-sm border border-white/10"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#050505]/95 border-b border-white/10 backdrop-blur-lg animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-3">
            <button
              onClick={() => goToSection("skills")}
              className="block w-full text-left px-3 py-2.5 rounded-sm text-sm font-mono uppercase tracking-wider text-slate-300 hover:text-white hover:bg-white/5 transition-all"
            >
              {t("nav_skills")}
            </button>
            <button
              onClick={() => goToSection("projects")}
              className="block w-full text-left px-3 py-2.5 rounded-sm text-sm font-mono uppercase tracking-wider text-slate-300 hover:text-white hover:bg-white/5 transition-all"
            >
              {t("nav_projects")}
            </button>
            <button
              onClick={() => goToSection("experience")}
              className="block w-full text-left px-3 py-2.5 rounded-sm text-sm font-mono uppercase tracking-wider text-slate-300 hover:text-white hover:bg-white/5 transition-all"
            >
              {t("nav_experience")}
            </button>
            <button
              onClick={() => goToSection("contact")}
              className="block w-full text-left px-3 py-2.5 rounded-sm text-sm font-mono uppercase tracking-wider text-slate-300 hover:text-white hover:bg-white/5 transition-all"
            >
              {t("nav_contact")}
            </button>
            <div className="pt-4 flex items-center justify-between border-t border-white/10 px-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="px-5 py-2 text-xs font-bold tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-sm font-mono transition-all duration-200 uppercase"
              >
                {t("nav_cta")}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
