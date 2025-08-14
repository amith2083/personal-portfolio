// components/sub/Heading.js
import React from 'react'
import { motion } from 'framer-motion'

const Heading = ({text}) => {
  return (
    <motion.h1 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-500 mb-12'
    >
      {text}
    </motion.h1>
  )
}

export default Heading