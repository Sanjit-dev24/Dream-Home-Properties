import React from 'react'
import brand from '../assets/brand_img.png'
import { motion } from "motion/react"

const About = () => {
  return (
    <motion.div 
    initial={{opacity: 0, x:200}}
    transition={{duration: 1.5}}
    whileInView={{opacity: 1, x:0}}
    viewport={{once: true}}
    className='flex flex-col sm:justify-center items-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline decoration-1 under font-light'>Our Brand</span> </h1>
      <p className='text-center text-gray-500 mx-w-80 mb-8'>Passionate About Properties, Dedicated to Your Vision</p>

      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img src={brand} alt="" className='w-full sm:w-1/2 max-w-lg' />
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
          <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
              <div>
                <p className='font-medium text-4xl text-gray-800'>10+</p>
                <p >Years of Experience</p>
              </div>

              <div>
                <p className='font-medium text-4xl text-gray-800'>12+</p>
                <p >Projects Completed</p>
              </div>

              <div>
                <p className='font-medium text-4xl text-gray-800'>20+</p>
                <p >Mn. Sq. Ft. Delivered</p>
              </div>

              <div>
                <p className='font-medium text-4xl text-gray-800'>25+</p>
                <p >Original Projects</p>
              </div>
          </div>

          <p className='my-10 max-w-lg'>
            A real estate tagline is deeply associated with your identity and should come to mind whenever someone thinks of your business. Think of the pros from other industries — “Just Do It” (Nike), “The Happiest Place on Earth” (Disneyland), and “What's in your wallet?” (Capital One) - all memorable taglines that are well-known in households across America.
          </p>

          <button className='bg-blue-600 text-white px-8 py-2 rounded cursor-pointer'>Learn more</button>
        </div>
      </div>
    </motion.div>
  )
}

export default About
