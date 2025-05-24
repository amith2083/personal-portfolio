'use client'
import Image from 'next/image'
import React, { useMemo, useState } from 'react'
import { heroIcons } from '@/assets'
import { useMotionValue, useTransform ,motion} from 'framer-motion'

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const[windowOffset,setWindowOffset]= useState({innerWidth:0,innerHeight:0})
  const[mouseMove,setMouseMove]=  useState(false)
const handleMove =(e)=>{
  const{clientX,clientY}= e
  x.set(clientX);
  y.set(clientY)
}
const handleEnter =()=>{
  setWindowOffset({innerHeight:window.innerHeight,innerWidth:window.innerWidth})
  setMouseMove(true)
}
const{innerWidth,innerHeight}= windowOffset
const rotateY = useTransform(x,[0,innerWidth],[-30,30])
const rotateX = useTransform(y,[0,innerHeight],[10,-50])
  return (
<div className='h-screen grid place-items-center 'onMouseMove={handleMove} onMouseEnter={handleEnter}>
  <div>
  <div className=' flex flex-col justify-center items-center gap-y-3 font-light capitalize'>
    <motion.div className='flex justify-center items-center' style={{rotateX:mouseMove?rotateX:0,rotateY:mouseMove?rotateY:0,transition:'0.1s'}}>
      <Image className='h-auto w-[150px]' src={'/person.png'} alt='Person Image' width={400} height={400} priority={true}/>
      <span className='absolute text-3xl text-white'>Hi</span>
    </motion.div>
    <h1 className='font-bold text-gray-500 text-center text-3xl tracking-wider sm:text-2xl'>My name is Amith k m</h1>
    <p className='text-gray-600 text-lg tracking-wider'>passionate Full-Stack Developer🤗 </p>
  </div>
  <div className='flex gap-x-10 justify-center mt-4 text-yellow-500 sm:text-2xl'>
    {heroIcons.map((icon,i)=><a href="#" key={i} className=' rounded-lg hover:bg-red-400 hover:text-white transition-colors' >{icon}</a>)}
    
  </div>
  <a href="#" className='mx-auto block font-light text-white bg-red-400  hover:bg-red-500 transition-colors mt-7 w-max rounded-lg px-3 py-1 tracking-wider capitalize' >Talk to me</a>
  </div>
</div>

  )
}

export default Hero
