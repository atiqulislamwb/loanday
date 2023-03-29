"use client";

import React, { useState } from "react";

import Image from "next/image";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { ImLocation2 } from "react-icons/im";
import { MdCall } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
const TopHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-[#182143] text-white text-md">
      <div className="w-8/12 mx-auto  flex flex-row items-center justify-between">
        <div className="flex gap-6 items-center p-3">
          <div className="flex gap-2 items-center">
            <ImLocation2 size={18} color="#88C417" />
            <p>Road 3,Gulshan-1,Dhaka, Bangladesh</p>
          </div>
          <div className="flex gap-2 items-center">
            <MdCall size={18} color="#88C417" />
            <p>+8801937547204</p>
          </div>
          <div className="flex gap-2 items-center">
            <HiOutlineMail size={18} color="#88C417" />
            <p>info@loanday.com</p>
          </div>
        </div>

        <div className="relative">
          <button
            className="inline-flex items-center 
            justify-center w-full px-6 py-3 font-medium
           bg-[#88C417]
    "
            onClick={handleToggle}
          >
            English
            {isOpen ? (
              <FiChevronUp className="w-5 h-5 ml-2 -mr-1 " aria-hidden="true" />
            ) : (
              <FiChevronDown
                className="w-5 h-5 ml-2 -mr-1"
                aria-hidden="true"
              />
            )}
          </button>
          {isOpen && (
            <div
              className="absolute 
             transition-all transform duration-1000 ease-out
            right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            >
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  English
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Bangla
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
