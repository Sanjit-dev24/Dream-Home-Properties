import React from 'react'
import Navbar from './Navbar'
// import headerImg from '../assets/headerImg1.jpg'
import header_img from '../assets/header_img.png'
import { motion } from "motion/react"

const Header = () => {

  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden pointer-events-none' style={{backgroundImage: `url(${header_img})`}} id='Header'> 
        <Navbar></Navbar>
        <motion.div 
        initial={{opacity: 0, y:100}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, y:0}}
        viewport={{once: true}}
        className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
            <h2 className='text-6xl sm:text-6xl md:text-[68px] inline-block max-w-6xl font-semibold text-shadow-lg'>Explore home that fit your dreams</h2>
            <div className='space-x-6 mt-15'>
                <a href="#Projects" className='cursor-pointer pointer-events-auto border border-white px-8 py-3 rounded'>Projects</a>
                <a href="#Contact" className='cursor-pointer pointer-events-auto bg-blue-500 px-8 py-3 rounded'>Contact us</a>
                {/* <FontAwesomeIcon icon={faCat}></FontAwesomeIcon> */}
            </div>
        </motion.div>
    </div>
  )
}

export default Header
