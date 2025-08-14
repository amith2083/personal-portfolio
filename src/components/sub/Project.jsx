
'use client'
import Image from "next/image"
import { motion } from "framer-motion"

const Project = ({data, index}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, rotate: 2 }}
      className="relative w-full max-w-sm overflow-hidden rounded-2xl shadow-xl cursor-pointer group bg-white dark:bg-gray-800"
    >
      <Image
        src={data.url}
        alt={data.name}
        width={400}
        height={300}
        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{data.name}</h3>
        <div className="flex gap-4">
          {data.github && (
            <a href={data.github} target="_blank" rel="noopener noreferrer" className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200">
              GitHub
            </a>
          )}
          {data.demo && (
            <a href={data.demo} target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-white px-4 py-2 rounded-full hover:bg-yellow-500">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default Project