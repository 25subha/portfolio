import React from 'react';
import { ReactTyped } from "react-typed";
import subhankarone from '../../public/subha.png';

 
const Home = () => {
  return (
    <div name='Home' className='max-w-screen-2xl container  px-4 md:px-20 relative'>
      <div className='py-[150px] flex   justify-between mb-[150px] '>
        <div className=' absolute z-10 md:top-[220px] top-[190px]'>
          <h1 className='font-[500] md:text-[35px] text-[20px] '>Hello, <br /> I am <span className='text-green-600'>Subhankar</span> </h1>
          <h2 className='font[500] md:text-[25px]'>And, I am <span> </span>
          <ReactTyped 
          className='font[500] md:text-[25px] text-green-600'
          strings={[
            "a full stack web Devoloper (M.R.E.N)",
            "a Coder",
            "a web designer",
          ]}

          typeSpeed={40}
          backSpeed={50}
          loop={true}
          />
          </h2>
        </div>
        <div className='md:basis-[30%] absolute right-4 md:right-20'>
            <img src={subhankarone} alt="subhankar img" className=' md:h-[250px] md:w-[250px] h-[150px] w-[150px] rounded-full md:bg-cover transition-transform duration-2.5s] hover:transform hover:scale-[1.1] ' />
        </div>
      </div>
      
    </div>
  
  )
}

export default Home;