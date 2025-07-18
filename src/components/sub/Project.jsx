'use client'

import Image from "next/image"
import { motion } from "framer-motion"

const Project = ({data,index}) => {
  return (
    <motion.div initial={{opacity:0,y:index%2===0?100:-100}} whileInView={{opacity:1,y:0}} transition={{duration:1,type:'spring',stiffness:100}} className="relative w-[350px] sm:w-full h-max border border-yellow-400 rounded-lg cursor-pointer overflow-hidden group" >
      <Image
  src={data.url}
  alt="Project Image"
  width={400}
  height={400}
  className="rounded-lg opacity-70 w-full"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
      {/* <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center gap-y-2 bg-white/95 p-6 rounded-lg">
        <h2 className="text-lg font-bold tracking-wide text-gray-500">{data.name}</h2>
        <p className="text-justify text-gray-500 first-letter:pl-2">{data.desc} </p>
      </div> */}
       {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
        {/* GitHub Button */}
        {data.github && (
    <a
      href={data.github}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200"
    >
      GitHub
    </a>
  )}
  
  {/* Live Demo Button (Only show if demo exists) */}
  {data.demo && (
    <a
      href={data.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-yellow-400 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-500"
    >
      View
    </a>
  )}
      </div>
    </motion.div>
  )
}

export default Project
