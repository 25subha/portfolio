import React from 'react';
import ProjectCard from '../components/ProjectCard';
import ".././styles/ProjectCard.css"
 

import sisyphus from '../../public/sisypush.png';
import todolist from '../../public/todolist.png';
import shoppingSight from '../../public/shopping-site.png';
import randomImg from '../../public/rendom.png';


const Project = () => {
 
  return (
    <div  name='Project' className='w-full   md:px-20 px-4'>
      <div className='flex  flex-col items-center my-20'>
        <h1 className='font-[500] text-[30px] text-center mt-12 mb-3'>My Project</h1>
          <div className='h-1 w-28 bg-green-500 text-center'></div>
      </div>
        <div className=' w-full flex md:flex-col justify-center'>
          <div className='md:flex    items-center md:justify-between  grid gid-cols-2'>
          
              <ProjectCard 
              imgurl={sisyphus}
              projectnumber={"project  "}
              link={'https://github.com/25subha/sisyphus-copy-project-using-html-or-css'}/>
            
          
              <ProjectCard 
              imgurl={todolist}
              projectnumber={"project "}
              link={'https://github.com/25subha/first-project-todo-list'}/>
           
           
              <ProjectCard 
              imgurl={shoppingSight}
              projectnumber={"project "}
              link={"https://github.com/25subha/shopping-sight"}/>
            
           
              <ProjectCard 
              imgurl={randomImg}
              projectnumber={"project "}
              link={"https://github.com/25subha/rendom-image"} />
           

          </div>
      </div>
     </div>


    
    
  );
};

export default Project;