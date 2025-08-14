
'use client';
import React, { useEffect, useRef, useState } from 'react';
import { projectsButton, projectsData } from '@/assets';
import Project from './Project';
import Heading from './Heading';
import { motion } from 'framer-motion';

const Projects = () => {
  const [tech, setTech] = useState('All');
  const [index, setIndex] = useState(0);
  const buttonRef = useRef([]);

  useEffect(() => {
    buttonRef.current.forEach((btn, i) => {
      btn.style.opacity = i === index ? '1' : '0.5';
      btn.style.transform = i === index ? 'scale(1.2)' : 'scale(1)';
    });
  }, [index]);

  return (
    <section id='projects' className="min-h-screen py-20 px-4 sm:px-6 lg:px-20 md:ml-[100px] bg-gradient-to-b from-white to-yellow-50 dark:from-gray-900 dark:to-gray-800">
      <Heading text="My Projects"  />
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {projectsButton.map((text, i) => (
          <motion.button 
            key={i} 
            ref={(el) => (buttonRef.current[i] = el)}
            whileHover={{ scale: 1.1 }}
            className="bg-yellow-100 dark:bg-gray-700 border border-yellow-400 rounded-full px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 hover:bg-yellow-200 dark:hover:bg-gray-600 transition-colors"
            onClick={() => { setTech(text); setIndex(i); }}
          >
            {text}
          </motion.button>
        ))}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
        {projectsData.filter((project) => tech === 'All' || project.tech.includes(tech)).map((data, i) => (
          <Project key={i} data={data} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;