import React from 'react'

const Heading = ({text}) => {
  return (
    <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-500 mb-6'>{text}</h1>
  )
}

export default Heading