'use client'
import React from 'react'
import Heading from './Heading'
import Image from 'next/image'
import Achievements from './Achievements'
import { aboutData,aboutText,downloadIcon,arrowLeftIcon } from '@/assets'

const About = () => {
  return (
    <div id='about' className=' min-h-screen flex flex-col justify-center items-center px-96'>
      <Heading text={'About Me'}/>
      <div className='w-full flex items-center justify-between md:justify-center'>
        <Image src={'/about-me.png'} alt='About Image'width={400} height={400} className='w-[300px] lg:w-[200] md:hidden'/>
      
      <div className='max-w-[800px] bg-zinc-50 relative p-5 text-justify'>
      <span className='absolute rounded-xl -left-6 top-20 scale-[2.5] text-zinc-100'>{arrowLeftIcon} </span>
      <p className='text-lg font-light text-gray-700 first-letter:pl-3 lg:text-[16px] sm:text-[14px]'>{aboutText}</p>
      <a href="/nick-cv.pdf" download='' className='bg-red-400 font-light w-max mt-6 flex rounded-full items-center px-3 py-2 gap-x-2 border border-gray-300 text-white hover:bg-red-500 transition-colors'>
      <span className='text-xl'>Download cv</span>
      <span>{downloadIcon} </span>
      </a>
      </div>
      </div>
      <div className='w-full flex mt-20  justify-between flex-wrap item-center gap-x-7 gap-y-10'>
        {aboutData.map((item,i)=>
         <Achievements key={i} title={item.title} amount={item.amount} >{item.icon}</Achievements>
        
        )}
       
      </div>
      
    </div>
  )
}

export default About
