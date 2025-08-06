'use client';
import Image from 'next/image';
import Heading from './Heading';
import { skillsData } from '@/assets';
import { motion } from 'framer-motion';

const Skills = () => {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.07,
      },
    }),
    hidden: {
      opacity: 0,
      y: 30,
    },
  };

  return (
    <div id='skills' className="min-h-screen flex flex-col items-center justify-center gap-y-10 px-4 sm:px-6 lg:px-20 py-10 ml-[100px] ">
      <Heading text={'Skills'} />
<div className="w-full max-w-6xl grid grid-cols-5 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-4 xl:gap-2">
        {skillsData.map((item, i) => (
          <motion.div 
            custom={i} 
            variants={variants} 
            initial='hidden' 
            whileInView='visible' 
            whileHover={{ scale: 1.1 }} 
            viewport={{ margin: '50px', once: true }} 
            key={i} 
            className="w-28 sm:w-31 lg:w-40 flex items-center justify-center gap-x-3 rounded-xl border border-yellow-500 bg-zinc-200 px-3 sm:px-4 py-2"
          >
           <Image
  src={item.icon}
  alt="Skills Image"
  width={40}
  height={40}
  className="h-auto w-8 sm:w-10 "
  sizes="(max-width: 640px) 20vw, 10vw"
/>
            <p className="text-xs sm:text-xs text-gray-600">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;