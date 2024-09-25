import React from 'react';

const SupportersCount: React.FC = () => (
  <div className="mt-8 pt-26 w-full px-10">

    <div className='flex items-center 
    w-full justify-between'> <p className='text-black text-5xl max-w-[600px]  font-extrabold '>Total supporters
        received</p> <div className='relative'>

        <div className='absolute top-[-70%] w-60 h-60 bg-[radial-gradient(circle,_rgba(255,255,100,1)_0%,_rgba(255,255,254,0)_72%)] rounded-full  mx-auto '></div>

        <p className="text-8xl  text-left font-bold text-cyan-400 z-50 relative">2000<span className='text-black'>+</span> </p></div>
    </div>

  </div>
);

export default SupportersCount;