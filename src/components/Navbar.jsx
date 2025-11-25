import React, { useEffect, useState } from 'react'
// import logo from '../assets/logo.svg'
import logo from '../assets/logo2.png'
import menu from '../assets/menu_icon.svg'
import cross from '../assets/cross_icon.svg'
import  { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {

  const [toggleMobileMenu, setToggleMobileMenu] = useState(false)

  useEffect(() => {
    if(toggleMobileMenu){
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [toggleMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10 mx-auto h-[100%]'>
      <div className='container mx-auto flex justify-between items-center py-4 px-4 md:px-0 bg-transparent pointer-events-auto'>
        <img className='w-[85px] md:w-[120px]' src={logo} />

        <ul className='hidden md:flex lg:gap-10 md:gap-3 text-white lg:text-xl md:text-lg border-2 border-indigo-200 border-x-indigo-500 rounded-[50px] p-5 lg:pl-28 lg:pr-28 md:pl-15 md:pr-10'>
            <a href="#Header" className='cursor-pointer hover:text-black transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>Home</a>
            <a href="#About" className='cursor-pointer hover:text-black transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>About</a>
            <a href="#Projects" className='cursor-pointer hover:text-black transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>Projects</a>
            <a href="#Testimonials" className='cursor-pointer hover:text-black transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>Testimonials</a>
            <a href="#Contact" className='cursor-pointer hover:text-black transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>Contact Us</a>
        </ul>

        {/* <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign Up</button> */}
        <div className='flex gap-4 cursor-pointer'>
          <a href="https://www.instagram.com"> <FontAwesomeIcon icon={faInstagram} size='2x' color='#df0755' /> </a>
          <a href="https://www.facebook.com"> <FontAwesomeIcon icon={faFacebook} size='2x' color='blue' /> </a>
          <a href="https://www.youtube.com"> <FontAwesomeIcon icon={faYoutube} size='2x' color='red' /> </a>
        </div>

        <img src={menu} alt="" className='md:hidden w-7 cursor-pointer' onClick={() => setToggleMobileMenu(true)}/>
      </div>

      {/* mobile menu */}
      <div className={`md:hidden ${toggleMobileMenu ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all pointer-events-auto`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img src={cross} alt="" className='w-6' onClick={() => setToggleMobileMenu(false)}/>
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <a onClick={() => setToggleMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
          <a onClick={() => setToggleMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
          <a onClick={() => setToggleMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
          <a onClick={() => setToggleMobileMenu(false)} href="#Testimonials" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
