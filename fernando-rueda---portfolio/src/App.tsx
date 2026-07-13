/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CredibilityStrip from "./components/CredibilityStrip";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-blue-500/30 selection:text-blue-200 relative overflow-x-hidden">
        {/* Background Dot Matrix Pattern */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20 z-0" 
          style={{ 
            backgroundImage: "radial-gradient(#3B82F6 0.5px, transparent 0.5px)", 
            backgroundSize: "24px 24px" 
          }} 
        />

        {/* Navigation header */}
        <Header />

        {/* Main contents */}
        <main id="main-content" className="relative z-10">
          <Hero />
          <CredibilityStrip />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}
