"use client";

import Form from "@/components/Form";
import React from "react";

const Banner = () => {
  return (
    <div className=" bg-image  w-full">
      <div className="sm:w-8/12 mx-auto ">
        <div
          className="flex sm:flex-row flex-col
         items-start sm:items-center gap-3 "
        >
          <div className=" text-white w-full sm:w-[50%] p-10 ">
            <p
              className=" text-[40px] sm:text-[62px]
              font-bold "
            >
              Find The Best Monthly Payment
            </p>
            <p className="text-sm mt-[10px] sm:mb-[10px]">
              Apply for our business loan in minutes, without painful
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 
            items-start sm:items-center mt-6 sm:mt-[50px]"
            >
              <button
                className="inline-flex items-center uppercase
            justify-center text-white px-10 py-3 text-md font-bold
           bg-[#86C017]"
              >
                Get Start
              </button>
              <button
                className="inline-flex items-center uppercase
            justify-center text-white px-10 py-3 text-md font-bold
           bg-[#223060]"
              >
                How It Work
              </button>
            </div>
          </div>
          <div className="w-full p-3 sm:w-[50%] sm:ml-10 -mt-[100px] sm:mt-10 sm:p-10 ">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
