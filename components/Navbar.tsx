import React, { useState } from 'react';

const Navbar: React.FC = () => {
  // State to track the active item
  const [activeItem, setActiveItem] = useState('Project');

  // Function to handle item click
  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <nav className="bg-white rounded-xl p-7 mb-10 shadow-md">
      <ul className="flex justify-around text-xl ">
        {['Project', 'Events', 'Support Us', 'About'].map((item) => (
          <li
            key={item}
            onClick={() => handleItemClick(item)}
            className={`cursor-pointer ${
              activeItem === item ? 'font-bold border-b-2 border-black text-black' : 'text-black'
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
