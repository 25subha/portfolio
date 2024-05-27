import React from 'react';
import ProjectCard from '../components/ProjectCard';
import ".././styles/ProjectCard.css"
 

import sisyphus from '../../public/sisypush.png';
import todolist from '../../public/todolist.png';
import shoppingSight from '../../public/shopping-site.png';
import randomImg from '../../public/rendom.png';


const Project = () => {
 
  return (
    <div  name='Project' className='  md:mx-24 mx-10'>
      <div className='flex flex-col items-center my-20'>
      <h1 className='font-[500] text-[30px] text-center mt-12 mb-2'>My Project</h1>
      <div className='h-1 w-28 bg-green-500 text-center'></div>
      </div>
      <div className='max-w-[1200px] grid md:grid-cols-4 grid-cols-2 md:gap-8  '>
      <div>
        <ProjectCard 
        imgurl={sisyphus}
        projectnumber={"project  "}
        link={'https://github.com/25subha/sisyphus-copy-project-using-html-or-css'}/>
     </div>
      <div>
        <ProjectCard 
        imgurl={todolist}
        projectnumber={"project "}
        
        link={'https://github.com/25subha/first-project-todo-list'}/>
      </div>
      <div>
        <ProjectCard 
        imgurl={shoppingSight}
        projectnumber={"project "}
        link={"https://github.com/25subha/shopping-sight"}/>
      </div>
      <div>
        <ProjectCard 
        imgurl={randomImg}
        projectnumber={"project "}
        link={"https://github.com/25subha/rendom-image"}
        />
        
      </div>

      </div>
     </div>


    
    
  );
};

export default Project;