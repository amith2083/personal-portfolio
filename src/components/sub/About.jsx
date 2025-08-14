
'use client'
import React from 'react'
import Heading from './Heading'
import Image from 'next/image'
import Achievements from './Achievements'
import { aboutData, aboutText, downloadIcon, arrowLeftIcon } from '@/assets'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section 
      id='about' 
      className='min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-20 py-10 md:ml-[100px] dark:text-gray-300'
    >
      <Heading text={'About Me'} />
      <div className='w-full flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16'>
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Image 
            src={'/about-me.png'} 
            alt='About Image' 
            width={400} 
            height={400} 
            className='w-full max-w-md rounded-full shadow-2xl border-4 border-yellow-400 hover:scale-105 transition-transform duration-500'
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute -bottom-4 -right-4 bg-red-400 text-white p-2 rounded-full shadow-lg">
            {arrowLeftIcon}
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='w-full max-w-xl bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl text-justify relative'
        >
          <p className='text-lg font-light text-gray-700 dark:text-gray-300 leading-relaxed'>{aboutText}</p>
          <a 
            href="/amith-resume.pdf" 
            download 
            className='inline-flex items-center gap-2 mt-6 bg-gradient-to-r from-red-400 to-yellow-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all'
          >
            Download Resume {downloadIcon}
          </a>
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className='w-full flex flex-wrap justify-center gap-6 mt-12'
      >
        {aboutData.map((item, i) => (
          <Achievements key={i} title={item.title} amount={item.amount}>
            {item.icon}
          </Achievements>
        ))}
      </motion.div>
    </section>
  )
}

export default About