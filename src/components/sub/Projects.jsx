'use client';
import React, { useEffect, useRef, useState } from 'react';

import { projectsButton, projectsData } from '@/assets';
import Project from './Project';
import Heading from './Heading';
import { animate,motion } from 'framer-motion';

const Projects = () => {
    const[tech,setTech]= useState('All')
    const [index,setIndex]= useState(0);
    const prevIndex = useRef(0)
    const buttonRef= useRef([])
    const handleClick =()=>{
        animate(buttonRef.current[prevIndex.current],{opacity:0.5,scale:1})
        animate(buttonRef.current[index],{opacity:1,scale:1.2})
        
       
    }
    useEffect(()=>{
        handleClick()
        prevIndex.current= index
    },[index])
  return (
    <div className="min-h-screen py-20 px-80">
      <Heading text="Projects" />
      <div className="flex flex-wrap items-center justify-between gap-y-10">
        {projectsButton.map((text, i) => (
          <motion.button initial={{opacity:i===0?1:0.5,scale:i===0?1.2:1}}
            key={i} ref={(ele)=>buttonRef.current.push(ele)}
            className="border border-yellow-500 rounded-xl px-2 py-1 text-sm font-light tracking-wider text-gray-400"
         onClick={()=>{setTech(text) 
         setIndex(i)}} >
            {text}
          </motion.button>
        ))}
      </div>
      <div className='flex flex-wrap justify-center items-center gap-5 mt-4'>
        {projectsData.filter((project)=>{
            return project.tech.some((item)=> tech==='All'?true:item===tech)
        }).map((data,i)=>
        <motion.div key={`id-${i}`} layout >
            <Project data ={data} index={i} />
        </motion.div>
        

        )}
      
      </div>
    </div>
  );
};

export default Projects;
