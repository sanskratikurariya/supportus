import React, { useState } from 'react';

const Navbar: React.FC = () => {

  const [activeItem, setActiveItem] = useState('Project');


  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <div className='flex justify-center '>

      <nav className="bg-white w-[80%] rounded-3xl pb-4 pt-7  mb-10 shadow-md">
        <ul className="flex justify-center text-3xl ">
          {['Project', 'Events', 'Support Us', 'About'].map((item) => (
            <li
              key={item}
              onClick={() => handleItemClick(item)}
              className={`cursor-pointer font-normal text-black px-6 flex flex-col items-center `}
            >
              {item}
              <div className={`${activeItem === item && "w-[120%] h-[10px] rounded-lg bg-gray-700 mt-1.5"}`}></div>
            </li>
          ))}
        </ul>
      </nav>
    </div>


  );
};

export default Navbar;
