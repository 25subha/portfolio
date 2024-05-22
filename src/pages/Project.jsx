import React from 'react';
import ProjectCard from '../components/ProjectCard';

import sisyphus from '../../public/sisypush.png';
import todolist from '../../public/todolist.png';
import shoppingSight from '../../public/shopping-site.png';
import randomImg from '../../public/rendom.png';


const Project = () => {
 
  return (
    <div  name='Project' className='py-20 flex flex-col items-center '>
      <h1 className='font-[500] text-[30px] text-center mt-12 mb-2'>My Project</h1>
      <div className='h-1 w-28 bg-green-500'></div>
      <div className='flex  flex-wrap gap-20  mt-16'>
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