'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { heroIcons } from '@/assets'
import { useMotionValue, useTransform, motion } from 'framer-motion'

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [mouseMove, setMouseMove] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Set window dimensions only on the client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      // Update dimensions on resize
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleMove = (e) => {
    const { clientX, clientY } = e;
    x.set(clientX);
    y.set(clientY);
  };

  // Use windowSize values for transformations
  const rotateY = useTransform(x, [0, windowSize.width || 1440], [-15, 15]); // Fallback to 1440 if width is 0
  const rotateX = useTransform(y, [0, windowSize.height || 900], [15, -15]); // Fallback to 900 if height is 0

  return (
    <section 
      id='home' 
      className='min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10 md:pl-[100px] relative overflow-hidden'
      onMouseMove={handleMove} 
      onMouseEnter={() => setMouseMove(true)}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-yellow-200 to-red-200 dark:from-gray-800 dark:to-gray-600 opacity-50"
        style={{ rotateX, rotateY, transition: '0.2s' }}
      />
      <div className="text-center z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }} 
          className='flex flex-col justify-center items-center gap-y-6'
        >
          <motion.div 
            className='relative group'
            style={{ perspective: 1000 }}
          >
            <Image 
              className='h-48 w-48 md:h-64 md:w-64 rounded-full shadow-2xl border-8 border-yellow-400 group-hover:border-white transition-all object-cover'
              src={'/person.png'} 
              alt='Person Image' 
              width={300} 
              height={300} 
              priority={true}
            />
          </motion.div>
          <h1 className='font-extrabold text-5xl md:text-7xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500'>Amith K M</h1>
          <p className='text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light'>Full-Stack Developer | MERN Enthusiast 🚀</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5 }} 
          className='flex gap-6 justify-center mt-8 text-3xl'
        >
          {heroIcons.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              className='text-yellow-500 hover:text-red-500 transition-colors'
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
        <motion.a 
          href="/#contact" 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.7 }} 
          className='block mx-auto mt-8 bg-gradient-to-r from-yellow-500 to-red-500 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all'
        >
          Let's Connect
        </motion.a>
      </div>
    </section>
  )
}

export default Hero