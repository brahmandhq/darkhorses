"use client";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { RiHome2Line, RiInformationLine, RiContactsLine } from "react-icons/ri";
import { Dropdown } from "flowbite-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-white border-b  dark:border-[#515151] dark:bg-[#212121] dark:text-white text-black px-5  py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex w-full justify-between  ">
          <span className="text-2xl font-bold mr-4">Dark Horses</span>
          <div className="hidden max-md:flex">
            <Dropdown
              label=""
              onClick={toggleNavbar}
              renderTrigger={() => (
                <span>{isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}</span>
              )}
            >
              <Dropdown.Item>Home</Dropdown.Item>
              <Dropdown.Item>About</Dropdown.Item>
              <Dropdown.Item>Contact</Dropdown.Item>
            </Dropdown>
          </div>
        </div>

        <ul className={`hidden md:flex gap-3  `}>
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
