"use client";
import React, { useState } from "react";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <footer className="bg-white border-t dark:border-[#515151] dark:bg-[#212121] dark:text-white px-5 text-black py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-semibold mr-4">© Dark Horses</span>
          <button className="block md:hidden" onClick={toggleNavbar}>
            {isOpen ? <FiInstagram size={24} /> : <FiInstagram size={24} />}
          </button>
        </div>
        <ul className={`flex ${isOpen ? "block" : "hidden"} md:flex text-lg`}>
          <li className="mr-6">
            <a href="#home" className="flex items-center">
              <FiTwitter className="mr-2" />
            </a>
          </li>
          <li className="mr-6">
            <a href="#about" className="flex items-center">
              <FiLinkedin className="mr-2" />
            </a>
          </li>
          <li>
            <a href="#contact" className="flex items-center">
              <FiInstagram className="mr-2" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
