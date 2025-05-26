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
<div id='home' className='h-screen grid place-items-center px-4 sm:px-6 lg:px-20 'onMouseMove={handleMove} onMouseEnter={handleEnter}>
  <div>
  <motion.div  initial={{opacity:0,y:-100}} animate={{opacity:1, y:0}} transition={{delay:0.5}} viewport={{once:true}} className=' flex flex-col justify-center items-center gap-y-3 font-light capitalize'>
    <motion.div className='flex justify-center items-center' style={{rotateX:mouseMove?rotateX:0,rotateY:mouseMove?rotateY:0,transition:'0.1s'}}>
      <Image className='h-auto w-[150px] sm:w-[150px]' src={'/person.png'} alt='Person Image' width={400} height={400} priority={true}/>
      <span className='absolute text-3xl text-white'>Hello</span>
    </motion.div>
    <h1 className='font-bold text-gray-500 text-center  tracking-wider text-2xl sm:text-3xl lg:text-4xl'>I'm Amith k m</h1>
    <p className='text-gray-600  tracking-wider sm:text-lg lg:text-xl'>passionate Full-Stack Developer🤗 </p>
  </motion.div>
  <motion.div  initial={{opacity:0,y:100}} animate={{opacity:1, y:0}} transition={{delay:0.5}} viewport={{once:true}} className='flex gap-x-10 justify-center mt-4 text-yellow-500 sm:text-2xl'>
    {heroIcons.map((icon,i)=><a href="#" key={i} className=' rounded-lg hover:bg-red-400 hover:text-white transition-colors' >{icon}</a>)}
    
  </motion.div>
  <motion.a href="#"  initial={{opacity:0,x:-30}} animate={{opacity:1, x:0}} transition={{delay:0.7}} viewport={{once:true}} className='mx-auto block font-light text-white bg-red-400  hover:bg-red-500 transition-colors mt-7 w-max rounded-lg px-3 py-1 tracking-wider capitalize' >
    Talk to me

  </motion.a>
  </div>
</div>

  )
}

export default Hero
