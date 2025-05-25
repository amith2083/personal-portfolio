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
        timerRef.current = setTimeout(updateCount, 20) // adjust speed here
      }
    }

    updateCount()
  }

  useEffect(() => {
    if (isInView) {
      count(amount)
    }

    return () => clearTimeout(timerRef.current)
  }, [isInView, amount])

  return (
    <div className='flex items-end gap-x-3' ref={ref}>
      <span className='text-4xl lg:text-2xl text-gray-300'>{children}</span>
      <h1 className='flex flex-col gap-y-2'>
        <motion.span className='text-2xl lg:xl font-light text-yellow-500'>
          {displayValue}
        </motion.span>
        <span className='text-sm tracking-wider text-gray-500'>{title}</span>
      </h1>
    </div>
  )
}

export default Achievements
