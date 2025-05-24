import React from 'react'
import Heading from './Heading'
import Image from 'next/image'
import Achievements from './Achievements'

const About = () => {
  return (
    <div className='bg-red-50 min-h-screen flex flex-col justify-center items-center px-96'>
      <Heading/>
      <div>
        <Image src={'/about-me.png'} alt='About Image'width={400} height={400}/>
      </div>
      <div>
      <span> arrow left</span>
      <p>about text</p>
      <a href="/nick-cv.pdf" download=''>
      <span>Download cv</span>
      <span>Download icon</span>
      </a>
      </div>
      <div>
        <Achievements/>
      </div>
      
    </div>
  )
}

export default About
