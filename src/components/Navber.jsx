import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';

import { IoMdClose } from "react-icons/io";

import { IoMenu } from "react-icons/io5";





const Navber = () => {
let [manu, setManu] = useState(false);
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

  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-12  fixed left-0 top-0 right-0 bg-[#1d5368] '>
      {/*   desktop Navber  */}
        <div className='flex justify-between items-center  text-white h-12 '>
        <Link
             to='Home'>
            <h1 className='text-[32px] text-xl font-bold text-[rgb(84,233,253)] cursor-pointer p-1.5 rounded-md hover:bg-[#4582a5]  transition-transform duration-[0.5s] hover:transform hover:scale-[1.1] shadow'><span className='text-[#4bfa63]'>S</span>ubhankar</h1> </Link>
            <ul className=' hidden md:flex  gap-12 justify-between ml-[600px] flex-wrap cursor-pointer '>
                {
                  navItems.map(({id, page}) => (
                      <li className='hover:scale-105 duration-200 cursor-pointer hover:bg-[#4582a5] p-2 rounded-md' key={id}>
                        <Link
                      to={page} 
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active">{page}</Link>
                      </li>
                    ))
                }
                
            </ul>
            <div>
              <span onClick={() => setManu(!manu)} className='md:hidden '>{manu ? <IoMdClose size={24} /> : <IoMenu size={24} /> }</span>
            

            </div>
        </div>
          {/* small device sceen */}

          {manu && (
          <div className=''>
            <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl bg-[#457392]'>
          {
                  navItems.map(({id,page}) => (
                    
                      <li className='hover:scale-105 duration-200  cursor-pointer hover:bg-[#5752bb] p-2 rounded-md' 
                      key={id}>
                      <Link
                      onClick={() => setManu(!manu)} to={page} smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active">{page}</Link>
                      </li>
                    
                  ))
                }
                  
              </ul>
          </div>
          )}
        
    </div>
  )
};

export default Navber;