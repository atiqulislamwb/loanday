"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiDollarSign,
  FiSearch,
} from "react-icons/fi";
import { HiMenuAlt3, HiOutlineMail } from "react-icons/hi";
import { ImLocation2 } from "react-icons/im";
import { MdCall } from "react-icons/md";
const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleToggle2 = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <div className="flex items-center justify-between p-3">
      <div className="py-3">
        <p className="text-black flex items-center  text-3xl font-bold">
          <FiDollarSign color="#88C417" />
          Loan<span className="text-[#86C017]">Day.</span>
        </p>
      </div>
      <div>
        <button onClick={toggleDrawer}>
          <HiMenuAlt3 color="#000" size={32} />
        </button>
      </div>

      <div
        className={`fixed z-40 top-0 bottom-0 left-0 w-8/12
         bg-gray-100 transition-transform 
         duration-300 ease-in-out transform ${
           isOpen ? "translate-x-0" : "-translate-x-full"
         }`}
      >
        <div className="p-4 mt-10">
          <div className="text-black flex items-center justify-center mb-5 ">
            <FiSearch size={30} color="#000" className="text-center" />
          </div>
          <div>
            <p className="text-black flex items-center mb-5  text-4xl font-bold">
              <FiDollarSign color="#88C417" />
              Loan<span className="text-[#86C017]">Day</span>
            </p>
          </div>
          <div className="text-black flex gap-4 flex-col items-start text-xl ">
            <div>
              <Link href="/" className="">
                Home
              </Link>
            </div>
            <button
              className="inline-flex items-center 
            justify-center text-white px-6 py-2
           bg-[#86C017]"
            >
              Apply For Loan
            </button>
          </div>
          <div
            className="flex gap-3 flex-col items-start text-sm 
          font-bold mt-6"
          >
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
          <div className="relative text-white">
            <button
              className="inline-flex items-center 
            justify-center w-full mt-5 py-3 font-medium
           bg-[#88C417]
    "
              onClick={handleToggle2}
            >
              English
              {isOpen ? (
                <FiChevronUp
                  className="w-5 h-5 ml-2 -mr-1 "
                  aria-hidden="true"
                />
              ) : (
                <FiChevronDown
                  className="w-5 h-5 ml-2 -mr-1"
                  aria-hidden="true"
                />
              )}
            </button>
            {isOpen2 && (
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

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed z-30 top-0 bottom-0 
          left-0 right-0 bg-black opacity-50"
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  );
};

export default MobileNavbar;
