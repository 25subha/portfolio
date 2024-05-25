import React, { useState } from 'react'
import { Link } from 'react-scroll';

import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {
  const navItems = [
    {
      id: 1,
      page: "Home",
    },
    {
      id: 2,
      page: "About",
    },
    {
      id: 3,
      page: "Skills",
    },
    {
      id: 4,
      page: "Project",
    },
    {
      id: 5,
      page: "Contact",
    },
    
  ];

  let [open, setOpen] = useState(false);
  return (
    <nav className='shadow-md w-full fixed top-0 left-0 z-20	'>
      <div className='md:flex bg-[black] items-center justify-between  py-4 md:px-24 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[poppins] '>
        <Link to='Home' smooth="true" duration="500" >
        <h1 className='md:text-4xl text-3xl	text-green-500 cursor-pointer p-1  hover:text-[#6ce6fc] transition duration-500 '>S<span className='hover:text-[#59dd9b] transition duration-500 md:text-2xl	text-xl text-[aqua]	'>ubhankar</span></h1> 
        </Link>
        </div>
        <div className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden' onClick={() => {setOpen(!open)}}>
        {open ? <IoMdClose size={24} /> : <IoMenu size={24} />}
        </div>
        <div>
          <ul className={`md:flex md:items-center  md:pb-0 pb-12 pt-12 absolute md:static md:bg-black bg-[rgba(32,57,65,0.8)] md:z-auto z-[-1] w-full left-0 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'right-20' : 'left-[-490px]'}`}>
            {
              navItems.map(({id,page}) => (
                <li className='md:ml-8 text-xl  md:my-0 my-7 text-center' key={id}>
                        <Link
                        className='hover:text-[#53c5ac]  rounded-md duration-500 cursor-pointer  p-1'
                      to={page} 
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active">{page}</Link>
                      </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar