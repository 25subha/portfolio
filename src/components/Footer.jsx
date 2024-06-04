import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";


const Footer = () => {
  return (
    <footer className='w-full  mx-auto px-4 md:px-20 bg-[#0e1c27] mt-20'>
        <div className='flex flex-col justify-center items-center p-4 '>
            <div className='flex space-x-4'>
                <FaFacebook size={24}/>
                <FaInstagram size={24}/>
                <FaLinkedin size={24}/>
                <SiGithub size={24}/>
            </div >
            <div className='mt-4 border-t border-gray-200 pt-4 flex flex-col items-center justify-center'> 
                <p className='text-center text-sm'>Created by Subhankar |  &copy; 2024 All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;