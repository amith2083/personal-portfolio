
'use client'
import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Achievements = ({ title, amount, children }) => {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const timerRef = useRef(null)

  const count = (target) => {
    let i = 0
    const updateCount = () => {
      if (i <= target) {
        setDisplayValue(i)
        i++
        timerRef.current = setTimeout(updateCount, 50) // Slower for dramatic effect
      }
    }
    updateCount()
  }

  useEffect(() => {
    if (isInView) count(amount)
    return () => clearTimeout(timerRef.current)
  }, [isInView, amount])

  return (
    <motion.div 
      whileHover={{ scale: 1.1, rotate: 5 }}
      className='flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow'
      ref={ref}
    >
      <span className='text-4xl text-yellow-500'>{children}</span>
      <div>
        <span className='text-3xl font-bold text-red-400'>{displayValue}+</span>
        <p className='text-sm text-gray-600 dark:text-gray-400'>{title}</p>
      </div>
    </motion.div>
  )
}

export default Achievements