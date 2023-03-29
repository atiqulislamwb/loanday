import React from "react";

const Company = () => {
  return (
    <div className="w-full bg-white">
      <div className="sm:w-8/12 mx-auto mt-10 p-4 sm:p-0">
        <div className="flex sm:mt-10 flex-col sm:flex-row">
          <div
            className="w-full sm:w-[50%] flex flex-col sm:items-start 
          sm:p-5 sm:mt-[80px]"
          >
            <p className="text-4xl font-bold">
              Thousands Of Customers Trust Our Company
            </p>
            <p className="text-[15px] mt-10">
              The brochure must grab a viewer’s attention and hold it long
              enough to deliver the
            </p>
            <p className="text-[15px] ">
              pertinent information. How do you grab your customers’ attention
              with just a piece
            </p>

            <div className="flex flex-col sm:flex-row sm:gap-6 mt-5 sm:mt-14 mb-4 sm:mb-10">
              <div>
                <p className="text-2xl font-bold">Our Company</p>
                <p className="text-[15px] mt-5">
                  You could try by giving the viewer paper cut, but that’s not
                  the kind of attention
                </p>
              </div>
              <div>
                <p className="text-2xl mt-10 sm:mt-0 font-bold">Our Vision</p>
                <p className="text-[15px] mt-5">
                  The brochure must grab a viewer’s attention and hold it long
                  enough to
                </p>
              </div>
            </div>
            <div className="mt-5 mb-3 sm:mb-0">
              <button
                className="inline-flex items-center uppercase
            justify-center text-white px-10 py-3 text-md font-bold
           bg-[#86C017]"
              >
                Get Start
              </button>
            </div>
          </div>
          <div className="w-full sm:w-[50%]">
            <div className="flex sm:items-end sm:p-10">
              <img
                src="https://www.jobstreet.com.ph/career-resources/wp-content/uploads/sites/3/2014/07/Is-the-Company-Youre-Working-for-Stable.jpg"
                className="w-full h-[350px] sm:h-[500px]  object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
