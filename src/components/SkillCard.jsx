import React from 'react';
// 

const SkillCard = ({logo,name}) => {
  return (
    <div>
       <div className='flex flex-col items-center justify-center  w-[170px] h-[180px]  mt-12  rounded-lg shadow-green-500 shadow-md hover:scale-105 duration-300'>
            <img src={logo} className='h-[120px] w-[120px]   mt-5 rounded-lg bg-white' alt="" />
            <p className='text-center font-bold text-[20px] '>{name}</p>
    
       </div>

    </div>
  )
}

export default SkillCard;