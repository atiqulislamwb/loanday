"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiSearch, FiDollarSign } from "react-icons/fi";
const DesktopNavbar = () => {
  return (
    <div className="w-8/12 py-5 mx-auto flex items-center justify-between">
      <div className="py-3">
        <p className="text-black flex items-center  text-4xl font-bold">
          <FiDollarSign color="#88C417" />
          Loan<span className="text-[#86C017]">Day.</span>
        </p>
      </div>
      <div className="text-black flex gap-8 items-center text-xl ">
        <Link href="/" className="">
          Home
        </Link>
        <button
          className="inline-flex items-center 
            justify-center text-white px-6 py-2
           bg-[#86C017]"
        >
          Apply For Loan
        </button>
        <FiSearch size={30} color="#000" />
      </div>
    </div>
  );
};

export default DesktopNavbar;
