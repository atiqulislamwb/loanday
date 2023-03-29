import React from "react";
import { BiMoneyWithdraw } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { TbFileCertificate } from "react-icons/tb";
const Stats = () => {
  return (
    <div className=" w-full sm:w-8/12 mx-auto">
      <div className="grid sm:grid-cols-4 mt-10 mb-14 ">
        <div className="flex items-center justify-center flex-col gap-1">
          <BiMoneyWithdraw size={60} color="#86C515" />
          <p className="text-4xl font-bold">2100</p>
          <p>Successful Loan Approval</p>
        </div>
        <div
          className="flex items-center justify-center 
          mt-5 sm:mt-0
        flex-col gap-1"
        >
          <AiOutlineLike size={60} color="#86C515" />
          <p className="text-4xl font-bold">99 %</p>
          <p>Customer Satisfection</p>
        </div>
        <div className="flex  mt-5 sm:mt-0 items-center justify-center flex-col gap-1">
          <GoLocation size={60} color="#86C515" />
          <p className="text-4xl font-bold">90 +</p>
          <p>Office National Partners</p>
        </div>
        <div className="flex  mt-5 sm:mt-0 items-center justify-center flex-col gap-1">
          <TbFileCertificate size={60} color="#86C515" />
          <p className="text-4xl font-bold">70 +</p>
          <p>Award Certificate</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
