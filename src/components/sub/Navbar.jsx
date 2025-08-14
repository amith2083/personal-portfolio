
import { copyRightIcon, navbarData, sunIcon, moonIcon } from "@/assets";
import React from "react";
import { motion } from "framer-motion";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    
    <motion.nav 
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-[70px] h-full fixed left-0 top-0 flex flex-col justify-between border-r border-gray-200 dark:border-gray-700 px-4 py-10 z-50 bg-white dark:bg-gray-900 shadow-lg"
    >
      <a href="/#home">
        <img 
          src='./software-developer.png' 
          alt="Logo" 
          className="w-12 h-12 object-contain hover:rotate-12 transition-transform"
        />
      </a>
      <div className="flex flex-col gap-y-6"> 
        {navbarData.map((item, i) => (
          <motion.a 
            key={i} 
            href={`/#${item.id}`} 
            whileHover={{ scale: 1.2, color: '#FBBF24' }}
            className="group flex flex-col items-center gap-y-2 text-yellow-500 dark:text-yellow-300"
          >
            <span className="text-2xl transition-all">
              {item.icon}
            </span>
            <span className="text-[10px] tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
              {item.name}
            </span>
          </motion.a>
        ))}
      </div>
      <div className="flex flex-col items-center gap-4">
        <button onClick={toggleDarkMode} className="text-2xl text-yellow-500 hover:text-red-500 transition-colors">
          {darkMode ? sunIcon : moonIcon}
        </button>
        <p className="text-gray-500 dark:text-gray-400 text-[10px] flex items-center">
          {copyRightIcon} 2025 - 2026
        </p>
      </div>
    </motion.nav>
  );
};

export default Navbar;