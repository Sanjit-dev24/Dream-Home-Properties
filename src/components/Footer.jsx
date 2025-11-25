import React from 'react'
import logo from '../assets/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons' 


const Footer = () => {
  return (
    <div className='pt-10 p-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <img className='w-[85px] md:w-[120px]' src={logo} alt="" />
            <p className='text-gray-400 mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
            <h3 className='text-white text-lg font-bold nb-4'>Company</h3>
            <ul className='flex flex-col gap-2 text-gray-400'>
                <a href="#Header" className='hover:text-white'>Home</a>
                <a href="#About" className='hover:text-white'>About</a>
                <a href="#Contact" className='hover:text-white'>Contact Us</a>
                <a href="#" className='hover:text-white'>Privacy Policy</a>
            </ul>
        </div>
        <div className='w-full md:w-1/3'>
            <h3 className='text-white text-lg font-bold nb-4'>Subscribe to our Newsletter</h3>
            <p className='text-gray-400 mb-4 max-w-80'>The latest news, articles, and resources, sent to your inbox shortly.</p>
            <div className='flex gap-2'>
                <input type="email" placeholder='Enter your email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto' />

                <button className='py-2 px-2 bg-blue-500 rounded text-white cursor-pointer'>Subscribe</button>
            </div>
        </div>
      </div>
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-400'>
        Copyright 2025 <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> Sanjit, All Right Reserved
      </div>
    </div>
  )
}

export default Footer
