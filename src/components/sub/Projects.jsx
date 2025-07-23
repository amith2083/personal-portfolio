'use client';
import React, { useEffect, useRef, useState } from 'react';
import { projectsButton, projectsData } from '@/assets';
import Project from './Project';
import Heading from './Heading';
import { animate, motion } from 'framer-motion';

const Projects = () => {
  const [tech, setTech] = useState('All');
  const [index, setIndex] = useState(0);
  const prevIndex = useRef(0);
  const buttonRef = useRef([]);

  const handleClick = () => {
    animate(buttonRef.current[prevIndex.current], { opacity: 0.5, scale: 1 });
    animate(buttonRef.current[index], { opacity: 1, scale: 1.2 });
  };

  useEffect(() => {
    handleClick();
    prevIndex.current = index;
  }, [index]);

  return (
    <div id='projects' className="min-h-screen py-10 px-4 sm:px-6 lg:px-20 ml-[100px]">
      <div className="w-full flex justify-center">
  <Heading text="Projects" />
</div>
      
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6">
        {projectsButton.map((text, i) => (
          <motion.button 
            initial={{ opacity: i === 0 ? 1 : 0.5, scale: i === 0 ? 1.2 : 1 }}
            key={i} 
            ref={(ele) => buttonRef.current[i] = ele}
            className="border border-yellow-600 rounded-xl px-2 py-1 text-xs sm:text-sm font-light tracking-wider text-gray-900 mx-1"
            onClick={() => { setTech(text); setIndex(i); }}
          >
            {text}
          </motion.button>
        ))}
      </div>
      <div className='flex flex-wrap justify-center items-center gap-4 sm:gap-6'>
        {projectsData.filter((project) => {
          return project.tech.some((item) => tech === 'All' ? true : item === tech);
        }).map((data, i) => (
          <motion.div key={`id-${i}`} layout>
            <Project data={data} index={i} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;