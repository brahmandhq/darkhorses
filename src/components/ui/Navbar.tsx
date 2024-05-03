'use client'
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { RiHome2Line, RiInformationLine, RiContactsLine } from 'react-icons/ri';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-white border-b  dark:border-[#515151] dark:bg-[#212121] dark:text-white text-black  py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold mr-4">Dark Horses</span>
          <button className=" block md:hidden" onClick={toggleNavbar}>
            {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
        <ul className={`flex ${isOpen ? 'block' : 'hidden'} md:flex`}>
          <li className="mr-6">
            <a href="#home" className="flex items-center">
              <RiHome2Line className="mr-2" /> Home
            </a>
          </li>
          <li className="mr-6">
            <a href="#about" className="flex items-center">
              <RiInformationLine className="mr-2" /> About
            </a>
          </li>
          <li>
            <a href="#contact" className="flex items-center">
              <RiContactsLine className="mr-2" /> Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
