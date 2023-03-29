"use client";
import Office from "@/components/Office";
import React from "react";
import { FiDollarSign } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg_office">
        <div className="w-full sm:w-8/12 mx-auto p-4 sm:p-0">
          <Office />
        </div>
      </div>
      <div className="w-full bg-[#182143] pt-10 pb-3">
        <div className="w-full p-4 sm:p-0 sm:w-8/12 mx-auto">
          <div className="grid sm:grid-cols-4 text-white gap-4 sm:gap-0">
            <div>
              <p className="text-white flex items-center  text-4xl font-bold">
                <FiDollarSign color="#88C417" />
                Loan<span className="text-[#86C017]">Day.</span>
              </p>
              <p className="text-gray-400 mt-5 ">
                Please remember though that how far you go is up to you. There
                is no substitute for your own work and effort in succeeding in
                this business.
              </p>
            </div>
            <div className="sm:ml-8 text-gray-400">
              <p className="text-white text-xl mb-3 font-bold">Services</p>
              <p className="mb-3">Personal Loans</p>
              <p className="mb-3"> Business Loans</p>
              <p className="mb-3">Online Cash Loans</p>
              <p>Cash Advance</p>
            </div>
            <div className="text-gray-400">
              <p className="text-white text-xl mb-3 font-bold">Socials</p>
              <p className="mb-3">FaceBook</p>
              <p className="mb-3">Instagram</p>
              <p className="mb-3">Twitter</p>
              <p>Skype</p>
            </div>
            <div className="text-gray-400">
              <p className="text-white text-xl mb-3 font-bold">Open Hours</p>
              <p className="mb-3">
                We work all days a week, Please contact us for any inquiry.
              </p>
              <p>Monday - Friday: 11:00 am - 8:00 pm</p>
              <p>Saturday: 10:00 am - 6:00 pm</p>
              <p>Sunday: 11:00 am - 6:00 pm</p>
            </div>
          </div>
          <div className="bg-gray-700 h-[1px] w-full mt-10 mb-2"></div>
          <div className="flex text-[14px] flex-col sm:flex-row items-center text-gray-400 justify-between">
            <div className="flex items-center gap-6">
              <p>Terms of use </p>
              <p> Privacy Policy</p>
              <p> Community</p>
            </div>
            <div className="mt-5 sm:mt-0 ">
              <p>Copyright ©2023 All rights reserved By LoanDay</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
