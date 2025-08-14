
'use client'
import About from "@/components/sub/About";
import Contact from "@/components/sub/Contact";
import Hero from "@/components/sub/Hero";
import Load from "@/components/sub/Load";
import Navbar from "@/components/sub/Navbar";
import Projects from "@/components/sub/Projects";
import Skills from "@/components/sub/Skills";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gradient-to-br from-yellow-50 to-red-50 text-gray-800'} transition-colors duration-300`}>
      <Load />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <motion.main 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        className="relative overflow-hidden ml-[70px]"
      >
        {/* Subtle background pattern for standout */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'url(/pattern.svg)'}} /> {/* Assume a subtle SVG pattern */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </motion.main>
    </div>
  );
}