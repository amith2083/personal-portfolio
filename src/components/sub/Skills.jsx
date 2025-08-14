
'use client';
import Image from 'next/image';
import Heading from './Heading';
import { skillsData } from '@/assets';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section id='skills' className="min-h-screen flex flex-col items-center justify-center gap-y-12 px-4 sm:px-6 lg:px-20 py-20 md:ml-[100px] bg-red-50 dark:bg-gray-800 rounded-b-3xl">
      <Heading text={'My Skills'} />
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {skillsData.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="flex flex-col items-center gap-2 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md hover:shadow-2xl transition-shadow"
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={60}
              height={60}
              className="h-16 w-16 object-contain"
            />
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;