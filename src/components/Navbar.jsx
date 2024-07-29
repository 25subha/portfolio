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

  const closeNavber = () => {
    setOpen(false)
  }

  let [open, setOpen] = useState(false);
  return (
    <>
   <header className=' md:px-20 px-4 fixed top-0 left-0 right-0 z-50 bg-black border-b-2 border-green-600 py-2'>
   <nav className='md:flex justify-between items-center  ' >
   <Link to='Home' smooth="true" duration="500" >
      <div className=' group font-[signature] font-semibold text-[28px] bg-gradient-to-b from-purple-500 to-blue-500 text-transparent bg-clip-text hover:text-green-400 cursor-pointer transition duration-400'>
        <span className='text-[35px] text-green-400 group-hover:text-blue-400'>S</span>ubhankar
      </div>
    </Link>
      <div className=' relative'>
      <div className={`md:hidden absolute right-4 -top-8 transition-all duration-200 ${open ? "rotate-90" : "rotate-0"}`} onClick={() => {setOpen(!open)}}>
          {open ? <IoMdClose size={24} /> : <IoMenu size={24} />}
        </div>
        <ul className={`md:flex gap-8 md:static py-4 md:py-0 list-none absolute transition-all duration-500 top-[10px] items-center bg-gray-400 h-screen w-[60%] md:w-full  md:h-0 ${open ? "-left-4" : "-left-full"}`}>
          {
            navItems.map((item, index) => {
              return(
                <li className='my-6 md:my-0 cursor-pointer hover:text-green-500 '  key={index}><Link to={item.page} smooth={true} offset={-70} activeClass='active' duration={500} onClick={closeNavber}>{item.page}</Link> </li>
              )
            } )
          }
        </ul>
      </div>
    </nav>
   </header>
    </>
    // <div className='w-full'>
    //   <nav className=' w-full  fixed top-0 left-0 z-20	'>
    //   <div className='md:flex bg-[#11293d] items-center justify-between  py-4 md:px-20 px-4'>
    //     <div className='font-bold text-2xl cursor-pointer flex items-center font-[poppins] '>
    //       <Link to='Home' smooth="true" duration="500" >
    //       <h1 className='md:text-4xl text-3xl	text-green-500 cursor-pointer p-1 font-[signature] hover:text-[#6ce6fc] transition duration-500 '>S<span className='hover:text-[#59dd9b] transition duration-500 md:text-2xl	text-xl text-[aqua]	'>ubhankar</span></h1> 
    //       </Link>
    //     </div>
    //     <div className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden' onClick={() => {setOpen(!open)}}>
    //       {open ? <IoMdClose size={24} /> : <IoMenu size={24} />}
    //     </div>
    //     <div>
    //       <ul className={`md:flex md:items-center  md:pb-0 pb-12 absolute md:static md:bg-[#11293d] bg-[rgba(32,57,65,0.9)] md:z-auto z-[-1] w-full left-0 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
    //         {
    //           navItems.map(({id,page}) => (
    //             <li className='md:ml-8 text-xl  md:my-0 my-7 ' key={id}>
    //                     <Link
    //                     className='hover:text-[#53c5ac]  rounded-md duration-500 cursor-pointer  p-1'
    //                   to={page} 
    //                   smooth={true}
    //                   duration={500}
    //                   offset={-70}
    //                   activeClass="active">{page}</Link>
    //                   </li>
    //           ))
    //         }
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    // </div>
  )
}

export default Navbar