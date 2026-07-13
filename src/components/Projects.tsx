import React, { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { 
  Bot, Database, Cpu, Layout, BarChart3, Workflow, Rocket, GitBranch, 
  ArrowLeft, ArrowRight, MessageSquare, TrendingUp, Users, Moon, 
  Smartphone, Globe, Sparkles, Plus, Lock, BookOpen, CheckCircle2 
} from "lucide-react";

export default function Projects() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      // Run once on load
      checkScroll();
      // Handle resize events
      window.addEventListener("resize", checkScroll);
      
      // Delay check slightly for any layout rendering delays
      const timer = setTimeout(checkScroll, 100);

      return () => {
        el.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
        clearTimeout(timer);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      // Scroll by one card's width + gap (approx 380px) on desktop, or clientWidth on mobile
      const isMobile = window.innerWidth < 768;
      const scrollAmount = isMobile ? clientWidth * 0.8 : 380 * 2;
      const finalAmount = direction === "left" ? -scrollAmount : scrollAmount;
      scrollRef.current.scrollBy({ left: finalAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-24 bg-transparent relative border-t border-white/5 overflow-hidden">
      {/* Decorative ambient glows */}
      <div className="absolute top-1/3 right-1/10 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/10 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="text-left max-w-2xl">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 mb-3 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-blue-500/50 inline-block"></span>
              {t("projects_badge")}
            </h2>
            <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              {t("projects_title")}
            </h3>
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed font-sans">
              {t("projects_desc")}
            </p>
          </div>

          {/* Navigation Arrows for Swipe/Carousel */}
          <div className="flex items-center gap-3 mt-6 md:mt-0" id="projects-carousel-controls">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollLeft 
                  ? "border-white/20 text-white bg-white/5 hover:bg-white/10 hover:border-blue-500 hover:text-blue-400 cursor-pointer" 
                  : "border-white/5 text-gray-600 bg-transparent cursor-not-allowed"
              }`}
              id="projects-btn-prev"
              title="Previous projects"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollRight 
                  ? "border-white/20 text-white bg-white/5 hover:bg-white/10 hover:border-blue-500 hover:text-blue-400 cursor-pointer" 
                  : "border-white/5 text-gray-600 bg-transparent cursor-not-allowed"
              }`}
              id="projects-btn-next"
              title="Next projects"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Container with Snap points */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 hide-scrollbar cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none" }}
          id="projects-carousel"
        >
          
          {/* Card 1: Dirección de Producto SaaS (Dishio) */}
          <div className="w-[88vw] sm:w-[400px] md:w-[380px] shrink-0 snap-start p-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative p-[1px] bg-white/10 hover:bg-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 [clip-path:polygon(16px_0px,100%_0px,100%_calc(100%-16px),calc(100%-16px)_100%,0px_100%,0px_16px)] group h-full"
            >
              <div className="bg-[#080808] [clip-path:polygon(16px_0px,100%_0px,100%_calc(100%-16px),calc(100%-16px)_100%,0px_100%,0px_16px)] h-full flex flex-col overflow-hidden">
                {/* Elegant Tech Placeholder: SaaS Interface mockup */}
                <div aria-hidden="true" className="h-44 bg-[#090909] border-b border-white/5 relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-20 pointer-events-none"
                       style={{ 
                         backgroundImage: "radial-gradient(#3B82F6 1px, transparent 1px)", 
                         backgroundSize: "12px 12px" 
                       }} 
                  />
                  <div className="w-[180px] bg-[#0c0c0c] border border-white/10 rounded-sm p-3 relative z-10 shadow-lg flex flex-col h-[100px] scale-95">
                    <div className="flex items-center gap-1 mb-2 border-b border-white/5 pb-1">
                      <Layout className="w-2.5 h-2.5 text-blue-400" />
                      <span className="text-[8px] font-mono text-slate-400 uppercase tracking-wider">DISHIO SaaS MVP</span>
                    </div>
                    <div className="flex flex-row gap-2 flex-grow">
                      <div className="w-[45px] bg-white/5 rounded-sm p-1 flex flex-col gap-1">
                        <div className="h-1 bg-white/10 rounded-full w-full" />
                        <div className="h-1 bg-white/10 rounded-full w-4/5" />
                        <div className="h-1 bg-white/10 rounded-full w-2/3" />
                      </div>
                      <div className="flex-1 bg-blue-500/5 border border-blue-500/10 rounded-sm p-1.5 flex flex-col justify-between">
                        <div className="flex items-center gap-1">
                          <Rocket className="w-2 h-2 text-blue-400 animate-pulse" />
                          <span className="text-[8px] font-mono text-blue-300">ACTIVE</span>
                        </div>
                        <div className="h-2 bg-blue-600/30 rounded-sm w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded-sm border border-white/10">
                    <span className="font-mono text-[8px] text-slate-400 uppercase tracking-widest">[MVP ROADMAP]</span>
                  </div>
                </div>

                {/* Content info */}
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-base sm:text-lg font-display font-bold text-white uppercase tracking-tight mb-3">
                    {t("projects_p1_title")}
                  </h4>
                  
                  {/* Project Metadata Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    <span className="text-[9px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 bg-blue-500/15 border border-blue-500/30 text-blue-300 rounded-sm">
                      {t("projects_employer_label")}: {t("projects_p1_employer")}
                    </span>
                    <span className="text-[9px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 bg-white/5 border border-white/10 text-slate-300 rounded-sm">
                      {t("projects_role_label")}: {t("projects_p1_role")}
                    </span>
                  </div>

                  {/* Pain Point */}
                  <div className="mb-5">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-red-400 uppercase block mb-1">
                      &gt;_ {t("projects_pain_label")}
                    </span>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-sans">
                      {t("projects_p1_desc")}
                    </p>
                  </div>
                  
                  {/* Result/Outcome box */}
                  <div className="mt-auto pt-4 border-t border-white/5 bg-blue-500/[0.02] p-3.5 rounded-sm border border-blue-500/5">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-blue-400 uppercase block mb-1">
                      &gt;_ {t("projects_result_label")}
                    </span>
                    <p className="text-slate-200 text-xs sm:text-sm font-sans leading-relaxed">
                      {t("projects_p1_impact")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Card 2: Transformación e IA a Gran Escala (Cervecería Nacional / Vertical Bancaria) */}
          <div className="w-[88vw] sm:w-[400px] md:w-[380px] shrink-0 snap-start p-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative p-[1px] bg-white/10 hover:bg-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 [clip-path:polygon(16px_0px,100%_0px,100%_calc(100%-16px),calc(100%-16px)_100%,0px_100%,0px_16px)] group h-full"
            >
              <div className="bg-[#080808] [clip-path:polygon(16px_0px,100%_0px,100%_calc(100%-16px),calc(100%-16px)_100%,0px_100%,0px_16px)] h-full flex flex-col overflow-hidden">
                {/* Elegant Tech Placeholder: AI Node Graph / Chatbot mockup */}
                <div aria-hidden="true" className="h-44 bg-[#090909] border-b border-white/5 relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-20 pointer-events-none"
                       style={{ 
                         backgroundImage: "radial-gradient(#10B981 1px, transparent 1px)", 
                         backgroundSize: "12px 12px" 
                       }} 
                  />
                  <div className="relative flex items-center justify-center gap-4 z-10 scale-95">
                    <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center shadow-inner relative">
                      <Bot className="w-5 h-5 text-emerald-400 animate-pulse" />
                      <span className="absolute -bottom-5 text-[8px] font-mono text-slate-500">AI CLIENT</span>
                    </div>
                    <div className="relative w-8 h-[2px] bg-emerald-500/30 flex items-center justify-between">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                      <GitBranch className="w-3 h-3 text-emerald-400/50 absolute left-1/2 -translate-x-1/2 -top-1.5" />
                    </div>
                    <div className="w-12 h-12 rounded-sm bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shadow-inner relative">
                      <Cpu className="w-5 h-5 text-emerald-300" />
                      <span className="absolute -bottom-5 text-[8px] font-mono text-slate-500">ORCHESTRATOR</span>
                    </div>
                    <div className="relative w-8 h-[2px] bg-emerald-500/30">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping delay-300 absolute right-0" />
                    </div>
                    <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center shadow-inner relative">
                      <Database className="w-5 h-5 text-emerald-400" />
                      <span className="absolute -bottom-5 text-[8px] font-mono text-slate-500">LEGACY_API</span>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded-sm border border-white/10">
                    <span className="font-mono text-[8px] text-slate-400 uppercase tracking-widest">[CONVERSATIONAL IA]</span>
                  </div>
                </div>

                {/* Content info */}
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-base sm:text-lg font-display font-bold text-white uppercase tracking-tight mb-3">
                    {t("projects_p2_title")}
                  </h4>
                  
                  {/* Project Metadata Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    <span className="text-[9px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 bg-blue-500/15 border border-blue-500/30 text-blue-300 rounded-sm">
                      {t("projects_employer_label")}: {t("projects_p2_employer")}
                    </span>
                    <span className="text-[9px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 bg-white/5 border border-white/10 text-slate-300 rounded-sm">
                      {t("projects_role_label")}: {t("projects_p2_role")}
                    </span>
                  </div>

                  {/* Pain Point */}
                  <div className="mb-5">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-red-400 uppercase block mb-1">
                      &gt;_ {t("projects_pain_label")}
                    </span>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-sans">
                      {t("projects_p2_desc")}
                    </p>
                  </div>
                  
                  {/* Result/Outcome box */}
                  <div className="mt-auto pt-4 border-t border-white/5 bg-blue-500/[0.02] p-3.5 rounded-sm border border-blue-500/5">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-blue-400 uppercase block mb-1">
                      &gt;_ {t("projects_result_label")}
                    </span>
                    <p className="text-slate-200 text-xs sm:text-sm font-sans leading-relaxed">
                      {t("projects_p2_impact")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Card 3: Eficiencia de Operaciones B2B (Dashboard Hubspot + ClickUp) */}
          <div className="w-[88vw] sm:w-[400px] md:w-[380px] shrink-0 snap-start p-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative p-[1px] bg-white/10 hover:bg-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 [clip-path:polygon(16px_0px,100%_0px,100%_calc(100%-16px),calc(100%-16px)_100%,0px_100%,0px_16px)] group h-full"
            >
              <div className="bg-[#080808] [clip-path:polygon(16px_0px,100%_0px,100%_calc(100%-16px),calc(100%-16px)_100%,0px_100%,0px_16px)] h-full flex flex-col overflow-hidden">
                {/* Elegant Tech Placeholder: Dashboard Capture mockup */}
                <div aria-hidden="true" className="h-44 bg-[#090909] border-b border-white/5 relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-20 pointer-events-none"
                       style={{ 
                         backgroundImage: "radial-gradient(#3B82F6 1px, transparent 1px)", 
                         backgroundSize: "12px 12px" 
                       }} 
                  />
                  <div className="w-[180px] bg-white/[0.02] border border-white/10 rounded-sm p-3 relative z-10 shadow-lg scale-95">
                    <div className="flex items-center justify-between border-b border-white/5 pb-1.5 mb-2">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/60" />
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500/60" />
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
                      </div>
                      <span className="text-[8px] font-mono text-slate-500">OPS PIPELINE</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-2 bg-blue-500/20 rounded-sm relative overflow-hidden flex items-center">
                        <div className="h-full bg-blue-500 w-[95%]" />
                        <span className="absolute right-1 text-[8px] font-mono text-slate-300 font-bold">95%</span>
                      </div>
                      <div className="h-2 bg-blue-500/20 rounded-sm relative overflow-hidden flex items-center">
                        <div className="h-full bg-purple-500 w-4/5" />
                        <span className="absolute right-1 text-[8px] font-mono text-slate-300 font-bold">80%</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded-sm border border-white/10">
                    <span className="font-mono text-[8px] text-slate-400 uppercase tracking-widest">[INTEGRATION END-TO-END]</span>
                  </div>
                </div>

                {/* Content info */}
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-base sm:text-lg font-display font-bold text-white uppercase tracking-tight mb-3">
                    {t("projects_p3_title")}
                  </h4>
                  
                  {/* Project Metadata Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    <span className="text-[9px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 bg-blue-500/15 border border-blue-500/30 text-blue-300 rounded-sm">
                      {t("projects_employer_label")}: {t("projects_p3_employer")}
                    </span>
                    <span className="text-[9px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 bg-white/5 border border-white/10 text-slate-300 rounded-sm">
                      {t("projects_role_label")}: {t("projects_p3_role")}
                    </span>
                  </div>

                  {/* Pain Point */}
                  <div className="mb-5">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-red-400 uppercase block mb-1">
                      &gt;_ {t("projects_pain_label")}
                    </span>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-sans">
                      {t("projects_p3_desc")}
                    </p>
                  </div>
                  
                  {/* Result/Outcome box */}
                  <div className="mt-auto pt-4 border-t border-white/5 bg-blue-500/[0.02] p-3.5 rounded-sm border border-blue-500/5">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-blue-400 uppercase block mb-1">
                      &gt;_ {t("projects_result_label")}
                    </span>
                    <p className="text-slate-200 text-xs sm:text-sm font-sans leading-relaxed">
                      {t("projects_p3_impact")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Dynamic scroll indicators for user friendliness */}
        <div className="flex justify-center items-center gap-2 mt-4" id="projects-indicator-dots">
          <div className={`w-2 h-2 rounded-full transition-all duration-300 ${!canScrollLeft ? "bg-blue-500 w-4" : "bg-white/20"}`} />
          <div className={`w-2 h-2 rounded-full transition-all duration-300 ${canScrollLeft && canScrollRight ? "bg-blue-500 w-4" : "bg-white/20"}`} />
          <div className={`w-2 h-2 rounded-full transition-all duration-300 ${!canScrollRight ? "bg-blue-500 w-4" : "bg-white/20"}`} />
        </div>

      </div>
    </section>
  );
}
