"use client";

import React from "react";
import {
  AiOutlineClockCircle,
  AiOutlineMoneyCollect,
  AiOutlineLike,
} from "react-icons/ai";
import { TbReportAnalytics } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { BiMoneyWithdraw } from "react-icons/bi";
const Choose = () => {
  return (
    <div className="w-full bg-gray-50">
      <div className=" w-full sm:w-8/12 mx-auto sm:pt-14 text-center p-4 sm:p-0">
        <div className="flex flex-col items-center justify-center mt-10">
          <p className="text-4xl font-bold mt-10 mb-4">Why People Choose Us</p>
          <p className="mb-10 text-gray-600">
            This question should make the viewer want to open the brochure to
            learn more.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 sm:mt-[40px] gap-16 pb-14">
          <div className="p-4 w-[380px] gap-2 bg-white shadow-lg h-[200px] flex flex-col items-center ">
            <div className="w-16 h-16 -mt-12 z-10 flex items-center justify-center rounded-full bg-[#8AC319]">
              <AiOutlineClockCircle size={35} color="#fff" />
            </div>
            <p className="text-2xl font-bold pt-5">Quick & Easy</p>
            <p className="text-center">
              Typography should be relevant and thought out. Type is so strong
              that it can
            </p>
          </div>
          <div className="p-4 w-[380px] gap-2 bg-white shadow-lg h-[200px] flex flex-col items-center ">
            <div className="w-16 h-16 -mt-12 z-10 flex items-center justify-center rounded-full bg-[#8AC319]">
              <AiOutlineMoneyCollect size={35} color="#fff" />
            </div>
            <p className="text-2xl font-bold pt-5">Absolute Security</p>
            <p className="text-center">
              Typography should be relevant and thought out. Type is so strong
              that it can
            </p>
          </div>
          <div className="p-4 w-[380px] gap-2 bg-white shadow-lg h-[200px] flex flex-col items-center ">
            <div className="w-16 h-16 -mt-12 z-10 flex items-center justify-center rounded-full bg-[#8AC319]">
              <AiOutlineLike size={35} color="#fff" />
            </div>
            <p className="text-2xl font-bold pt-5">Quick Approval</p>
            <p className="text-center">
              Typography should be relevant and thought out. Type is so strong
              that it can
            </p>
          </div>
          <div className="p-4 w-[380px] gap-2 bg-white shadow-lg h-[200px] flex flex-col items-center ">
            <div className="w-16 h-16 -mt-12 z-10 flex items-center justify-center rounded-full bg-[#8AC319]">
              <TbReportAnalytics size={35} color="#fff" />
            </div>
            <p className="text-2xl font-bold pt-5">Low Interest Rates</p>
            <p className="text-center">
              Typography should be relevant and thought out. Type is so strong
              that it can
            </p>
          </div>
          <div className="p-4 w-[380px] gap-2 bg-white shadow-lg h-[200px] flex flex-col items-center ">
            <div className="w-16 h-16 -mt-12 z-10 text-white flex items-center justify-center rounded-full bg-[#8AC319]">
              <MdSecurity size={35} color="#fff" />
            </div>
            <p className="text-2xl font-bold pt-5">Personal Security</p>
            <p className="text-center">
              Typography should be relevant and thought out. Type is so strong
              that it can
            </p>
          </div>
          <div className=" p-4 w-[380px] gap-2 bg-white shadow-lg h-[200px] flex flex-col items-center ">
            <div className="w-16 h-16 -mt-12 z-10 flex items-center justify-center rounded-full bg-[#8AC319]">
              <BiMoneyWithdraw size={35} color="#fff" />
            </div>
            <p className="text-2xl font-bold pt-5">Disbursement Day</p>
            <p className="text-center">
              Typography should be relevant and thought out. Type is so strong
              that it can
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
