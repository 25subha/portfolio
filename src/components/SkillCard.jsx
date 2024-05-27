import React from 'react';
// 

const SkillCard = ({logo,name}) => {
  return (
    <div>
       <div className='w-[180px] h-[180px]  mt-12   rounded-lg shadow-green-500 shadow-md hover:scale-105 duration-300'>
       <div className='md:flex flex-col items-center justify-center'>
            <img src={logo} className='h-[120px] w-[120px] mt-5 rounded-lg bg-white' alt="" />

        </div>
        <div>
            <p className='text-center font-bold text-[20px] '>{name}</p>
        </div>
       </div>

    </div>
  )
}

export default SkillCard;