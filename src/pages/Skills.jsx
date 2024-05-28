import React from 'react';
import SkillCard from '../components/SkillCard';
import html from '../../public/html .png';
import css from '../../public/css.jpg';
import javascript from '../../public/javascript.png';
import reactjs from '../../public/reactjs.png';
import tailwind from '../../public/Tailwind CSS.png';
import node from '../../public/node.png';
import mongodb from '../../public/mongodb.jpg';
import github from '../../public/github.png';
import express from '../../public/express.png';

const Skills = () => {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "html",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: reactjs,
      name: "react-js",
    },
    {
      id: 5,
      logo: tailwind,
      name: "tailwind-css",
    },
    {
      id: 6,
      logo: mongodb,
      name: "Mongodb",
    },
    {
      id: 7,
      logo: express,
      name: "Express-js",
    },
    {
      id: 8,
      logo: node,
      name: "node-js",
    },
    {
      id: 9,
      logo: github,
      name: "Github",
    },
   
  ];
  return (
   <div className=' max-w-screen-2xl container mx-auto px-4 md:px-20 '>
    <div  name='Skills' className='flex flex-col items-center'>
      <h1 className='font-[500] text-[30px] text-center mt-12 mb-2'>My skills</h1>
      <div className='h-1 w-20 bg-green-500'></div>
    </div>
    <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3 '>
      
      {
        cardItem.map(({id,logo,name})=> {
          return(
            <SkillCard 
            key={id}
            logo={logo}
            name={name}/>
          )
        })
      }
     
    </div>
   </div>
  );
};

export default Skills;