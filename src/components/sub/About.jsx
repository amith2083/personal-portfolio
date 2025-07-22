'use client'
import React from 'react'
import Heading from './Heading'
import Image from 'next/image'
import Achievements from './Achievements'
import { aboutData, aboutText, downloadIcon, arrowLeftIcon } from '@/assets'

const About = () => {
  return (
    <div 
  id='about' 
  className='min-h-screen lg:ml-[100px] ml-0 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-20 py-10'
>
      <Heading text={'About Me'} />
      <div className='w-full flex flex-row lg:flex-col items-center justify-center gap-6 lg:gap-12 '>
        <Image 
          src={'/about-me.png'} 
          alt='About Image' 
          width={300} 
          height={300} 
         className='w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain'
  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <div className='w-full max-w-2xl bg-zinc-50 relative p-2 sm:p-4 text-justify '>
          <span className='absolute rounded-xl -left-2 sm:-left-4 top-8 sm:top-16 scale-150 lg:scale-[2.5] text-zinc-100'>{arrowLeftIcon}</span>
          <p className='text-lg sm:text-sm font-light text-gray-700 first-letter:pl-2'>{aboutText}</p>
          <a 
            href="/amith-resume.pdf" 
            download 
            className='bg-red-400 font-light w-max mt-2 sm:mt-4 flex rounded-full items-center px-2 sm:px-3 py-1 sm:py-2 gap-x-1 sm:gap-x-2 border border-gray-300 text-white hover:bg-red-500 transition-colors'
          >
            <span className='text-sm sm:text-lg'>Download Resume</span>
            <span>{downloadIcon}</span>
          </a>
        </div>
      </div>
      <div className='w-full flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 sm:mt-8'>
        {aboutData.map((item, i) => (
          <Achievements key={i} title={item.title} amount={item.amount}>
            {item.icon}
          </Achievements>
        ))}
      </div>
    </div>
  )
}

export default About