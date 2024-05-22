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
    <div  name='About' className='mb-16 py-4 flex flex-col items-center' >
      <h1 className='font-[500] text-[30px] text-center '> About Me</h1>
      <div className='h-1 w-24 bg-green-500'></div>
      <div className=' flex mt-12 justify-between items-top flex-wrap'>
        
      <div className='md:basis-[35%] basis-full p-4'>
        <img src={subhankar} className='md:h-[250px] md:w-[210px]  m-4 rounded-md block  transition-transform duration-[0.5s] hover:transform hover:scale-[1.05]  ' alt="" />
      </div>
      <div className=' md:basis-[60%] basis-full'>
        <p className='text-gray-300 p-4 text-center md:text-left'>
        Hello there! I'm subhankar maji, and i'm a full-stack web devoloper. I'm very passionate and dedicated to my work. I have acquired the skills and knowledge necessary to make your project a success. I enjoyed every step of the design process, form discusssion and collaboration. 
        </p>
        <div className='flex mt-4'>
          <ul className='flex flex-row gap-10 m-0 p-0 list-none'>
            {tabs.map((tabsitem,ind) => {
                return(
                  <li className=''><button onClick={() => changeData(ind)} className={activetabs === ind ? ' px-2  text-white bg-green-500 hover:bg-[#44a176]': "px-1  bg-gray-600"}>{tabsitem.title}</button></li>
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