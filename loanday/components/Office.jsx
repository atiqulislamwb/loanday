import React from "react";

const Office = () => {
  return (
    <div
      className="flex flex-col 
    sm:flex-row sm:items-center
     justify-between"
    >
      <div
        className="flex flex-col sm:flex-row
       text-white sm:items-center gap-4 sm:gap-8 justify-center"
      >
        <div>
          <p className="text-2xl text-white font-bold mt-5 sm:mb-5">
            New York Office
          </p>
          <p className="text-md text-gray-400  mt-1 ">
            917 Atlantic Lane, Strongsville, NY, United State
          </p>
        </div>
        <div>
          <p className="text-2xl  mt-5 sm:mb-5 font-bold">New Jersey Office</p>
          <p className="text-md text-gray-400  mt-1 ">
            1 Walnut Court, East Orange, NJ, United State
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start sm:items-end sm:justify-end">
        <p className="text-2xl  mt-5 sm:mb-5 text-white ">Contact Us Now!</p>
        <p
          className=" text-4xl sm:text-5xl
         font-bold text-[#88C417] "
        >
          +8801937547204
        </p>
      </div>
    </div>
  );
};

export default Office;
