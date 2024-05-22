import React from 'react';
import { ReactTyped } from "react-typed";
import subhankarone from '../../public/subha.png';

 
const Home = () => {
  return (
    <div name='Home' className=''>
      <div className='py-[150px] md:flex justify-between '>
        <div className='my-12'>
          <h1 className='font-[500] text-[35px]'>hello, <br /> I am <span className='text-green-600'>Subhankar</span> </h1>
          <h2 className='font[500] text-[25px]'>And, I am <span> </span>
          <ReactTyped 
          className='font[500] text-[25px] text-green-600'
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
        <div className='basis-[30%] '>
            <img src={subhankarone} alt="subhankar img" className='h-[250px] w-[250px] rounded-full bg-cover transition-transform duration-[0.5s] hover:transform hover:scale-[1.1] ' />
        </div>
      </div>
      
    </div>
  
  )
}

export default Home;