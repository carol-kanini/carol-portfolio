import React from 'react'
import logo from '../assets/logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub, FaWhatsapp } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa6'


const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-10' src={logo} alt='logo' />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin />
            <a href='https://github.com/eduu-11287'> <FaGithub /></a> 
            <a href='https://wa.me/254717677853'> <FaWhatsapp /></a> 
            <a href='https://x.com/Bumble_254'> <FaSquareXTwitter /></a>
            <a href='https://www.instagram.com/eduuh_254/?__pwa=1'><FaInstagram /> </a>
            <a href='https://www.facebook.com/Eduuh254'> <FaFacebook /></a>
        </div>
    </nav>
  )
}

export default Navbar
