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
        {/* Skip link for keyboard / screen-reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-3 focus:left-3 focus:px-4 focus:py-2 focus:rounded-sm focus:bg-blue-600 focus:text-white focus:text-sm focus:font-mono"
        >
          Skip to content
        </a>

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
