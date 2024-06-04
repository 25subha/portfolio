import React, { useState } from 'react';
import { tabs } from '../blank/Tabs';
import subhankar from '../../public/subhankar.png';

const About = () => {
  let [activetabs, setActivetabs] = useState(0);
  let [activecontent,setActivecontent] = useState(tabs[0])
  let changeData = (ind)=> {
    setActivetabs(ind)
    setActivecontent(tabs[ind])
  }
  return (
    <div  name='About' className='w-full  mx-auto px-4 md:px-20  ' >
      <div   className='flex flex-col items-center w-full'>
      <h1 className='font-[500] text-[30px] text-center mt-12 mb-2'>About Me</h1>
      <div className='h-1 w-24 bg-green-500'></div>
    </div>
      <div className=' flex mt-12 justify-between md:items-start  items-center flex-wrap '>
        
      <div className='md:basis-[20%] basis-full p-4 '>
        <img src={subhankar} className='h-[290px] w-[260px] md:h-[250px] md:w-[210px]   m-auto rounded-md block  transition-transform duration-[0.5s] hover:transform hover:scale-[1.05] ' alt="" />
      </div>
      <div className=' md:basis-[70%] basis-full'>
        <p className='text-gray-300 p-4  '>
        Hello there! I'm subhankar maji, and i'm a full-stack web devoloper. I'm very passionate and dedicated to my work. I have acquired the skills and knowledge necessary to make your project a success. I enjoyed every step of the design process, form discusssion and collaboration. 
        </p>
        <div className='flex mt-4'>
          <ul className='flex flex-row gap-10 m-0 p-4 list-none'>
            {tabs.map((tabsitem,ind) => {
                return(
                  <li className='p-'><button onClick={() => changeData(ind)} className={activetabs === ind ? ' px-2 py-1 rounded-sm text-white bg-green-500 hover:bg-[#44a176] font-[500]': "font-[500] px-2 py-1 bg-gray-200 text-black rounded-sm"}>{tabsitem.title}</button></li>
                )
            })}
          </ul>  
        </div>
        <div className='mt-4 mx-4'>
        {activecontent !== undefined ? <>
        <p className='text-green-500 py-1'>{activecontent.year}</p>
        <p>{activecontent.description}</p>
          <div className='py-1'>
          <p className='text-green-500'>{activecontent.vyear}</p>
        <p>{activecontent.vdescription}</p>
        </div>
        <div className='py-1'>
        <p className='text-green-500'>{activecontent.Byear}</p>
        <p>{activecontent.Bdescription}</p>
        </div>
       <div className='py-1'>
         <p className='text-green-500'>{activecontent.hyear}</p>
        <p>{activecontent.hdescription}</p>
       </div>
          <div className='py-1'>
          <p className='text-green-500'>{activecontent.myear}</p>
        <p>{activecontent.mdescription}</p>

          </div>

        </> : ''}
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;