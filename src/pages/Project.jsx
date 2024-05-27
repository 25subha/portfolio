import React from 'react';
import ProjectCard from '../components/ProjectCard';
import ".././styles/ProjectCard.css"
 

import sisyphus from '../../public/sisypush.png';
import todolist from '../../public/todolist.png';
import shoppingSight from '../../public/shopping-site.png';
import randomImg from '../../public/rendom.png';


const Project = () => {
 
  return (
    <div  name='Project' className='   '>
      <div className='flex flex-col items-center my-20'>
      <h1 className='font-[500] text-[30px] text-center mt-12 mb-2'>My Project</h1>
      <div className='h-1 w-28 bg-green-500 text-center'></div>
      </div>
      <div className='grid grid-cols-auto gap-20'>
      <div>
        <ProjectCard 
        imgurl={sisyphus}
        projectnumber={"project one "}
        link={'https://github.com/25subha/sisyphus-copy-project-using-html-or-css'}/>
     </div>
      <div>
        <ProjectCard 
        imgurl={todolist}
        projectnumber={"project two"}
        
        link={'https://github.com/25subha/first-project-todo-list'}/>
      </div>
      <div>
        <ProjectCard 
        imgurl={shoppingSight}
        projectnumber={"project three"}
        link={"https://github.com/25subha/shopping-sight"}/>
      </div>
      <div>
        <ProjectCard 
        imgurl={randomImg}
        projectnumber={"project four"}
        link={"https://github.com/25subha/rendom-image"}
        />
        
      </div>

      </div>
     </div>


    
    
  );
};

export default Project;