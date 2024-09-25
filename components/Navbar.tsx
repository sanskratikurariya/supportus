import React, { useState } from 'react';

const Navbar: React.FC = () => {

  const [activeItem, setActiveItem] = useState('Project');


  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <nav className="bg-white rounded-3xl p-7 mb-10 shadow-md">
      <ul className="flex justify-around text-3xl ">
        {['Project', 'Events', 'Support Us', 'About'].map((item) => (
          <li
            key={item}
            onClick={() => handleItemClick(item)}
            className={`cursor-pointer ${
              activeItem === item ? 'font-bold border-b-4 border-gray-700 text-black' : 'text-black'
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
