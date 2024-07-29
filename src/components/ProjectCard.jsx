import React from 'react';
import { HiOutlineExternalLink } from "react-icons/hi";
import ".././styles/ProjectCard.css"

const ProjectCard = ({imgurl, projectnumber,link}) => {
  return (
    
        <div className='flex flex-col  flex-wrap justify-center items-center h-[250px] overflow-hidden	 p-4 w-[250px] rounded-lg '>
            <div className=' work m-auto flex flex-col items-center justify-center h-full w-full overflow-hidden rounded-lg relative  hover:h-full '>
                <img src={imgurl} alt="" className='rounded-md bg-cover block h-full cursor-pointer w-full transition-transform duration-[0.5s] hover:transform hover:scale-[1.1] hover:h-full'/>
                <div className='layer h-0 w-full bg-gradient-to-b from-[rgba(0,0,0,0.6)] to-[rgba(87,243,73,0.96)] absolute left-0 bottom-0	 flex flex-col justify-center items-center overflow-hidden hover:h-full  '>
                  <h3 className='text-center font-[500] text-[20px]'>{projectnumber}</h3>
                  <p className='text-center font-[200] text-[15px] mt-4 mb-[-15px]'> visit this site</p>
                  <a href={link} target='blank' className=' mt-6 h-[40px] w-[40px] font-bold flex flex-col justify-center items-center text-[#39af82] rounded-full bg-white '><HiOutlineExternalLink size={20}  /> </a>
                </div>
             </div>
        <div>
          {/* <p> {projectnumber}</p> */}
        </div>
    </div>
    
  )
}

export default ProjectCard