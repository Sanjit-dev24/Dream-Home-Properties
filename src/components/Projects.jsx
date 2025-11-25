import React, { useEffect, useState } from 'react'
import leftArrow from '../assets/left_arrow.svg'
import rightArrow from '../assets/right_arrow.svg'
import { projects } from '../assets/projects'
import { motion } from "motion/react"

const Projects = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [cardsToShow, setCardsToShow] = useState(1)

    useEffect(() => {
        const updateCardsToShow = () => {
            if(window.innerWidth >= 1024)
                setCardsToShow(projects.length)
            else
                setCardsToShow(1)
        };
        
        updateCardsToShow();

        window.addEventListener('resize', updateCardsToShow());
        return () => window.removeEventListener('resize', updateCardsToShow());
    }, [])

    const slideNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }

    const slidePrev = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? projects.length : prevIndex - 1)
    }

  return (
    <motion.div 
    initial={{opacity: 0, x:-200}}
    transition={{duration: 1.5}}
    whileInView={{opacity: 1, x:0}}
    viewport={{once: true}}
    className='container mx-auto py-4 pt-15 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects <span className='underline decoration-1 under font-light'>Completed</span></h1>
      <p className='text-center text-gray-500 mx-auto mx-w-80 mb-8'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>

      {/* slider buttons */}
      <div className='flex justify-end items-center mb-8'>
        <button className='p-3 bg-gray-200 rounded mr-2 cursor-pointer' aria-label='Previous Project' onClick={slidePrev}>
            <img src={leftArrow} alt="Previous" />
        </button>
        <button className='p-3 bg-gray-200 rounded mr-2 cursor-pointer' aria-label='Next Project' onClick={slideNext}>
            <img src={rightArrow} alt="Next" />
        </button>
      </div>

      {/* Project Slider Container */}
      <div className='overflow-hidden'>
        <div className='flex gap-8 transition-transform duration-500 ease-in-out' style={{transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`}}>
            {projects.map((project, index) => (
                <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                    <img src={project.image} alt={project.title} className='w-full h-auto mb-14'/>
                    <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                        <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                            <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>
                            <p className='text-gray text-small'>{project.price} <span className='px-1'>|</span> {project.location} </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        {/* <button className='p-3 bg-gray-200 rounded mr-2 cursor-pointer' aria-label='Previous Project' onClick={slidePrev}>
            <img src={leftArrow} alt="Previous" />
        </button> */}
      </div>
    </motion.div>
  )
}

export default Projects
