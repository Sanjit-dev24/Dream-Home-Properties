import React from 'react'
import { testimonials } from '../assets/projects'
import starIcon from '../assets/star_icon.svg'
import { motion } from "motion/react"

const Testimonials = () => {
  return (
    <motion.div 
    initial={{opacity: 0, x:200}}
    transition={{duration: 1.5}}
    whileInView={{opacity: 1, x:0}}
    viewport={{once: true}}
    className='container mx-auto py-10 pt-15 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Testimonials'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline decoration-1 under font-light'>Testimonials</span></h1>
      <p className='text-center text-gray-500 mx-auto mx-w-80 mb-12'>Real Stories From Those Who Found Home With Us</p>


      <div className='flex flex-wrap justify-center gap-8'>
        {testimonials.map((testimonial, index) => (
            <div key={index} className='max-w-[320px] border shadow-lg px-8 py-12 rounded text-center'>
                <img src={testimonial.image} alt={testimonial.alt} className='w-20 h-20 rounded-full mx-auto mb-4' />
                <h2 className='text-xl text-gray-500 font-medium'>{testimonial.name}</h2>
                <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
                <div className='flex justify-center gap-2 text-red-500 mb-4'>
                    {Array.from({length: testimonial.rating}, (item, index)=> (
                        <img key={index} src={starIcon} alt="" />
                    ))}
                </div>

                <p className='text-gray-800'>{testimonial.text}</p>
            </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonials
