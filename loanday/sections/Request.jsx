import React from "react";

const Request = () => {
  return (
    <div className="relative bg_request mt-10 mb-10 h-[370px] w-full object-cover text-white">
      <div className="w-full p-4 sm:p-0 sm:w-8/12 mx-auto">
        <div className="grid sm:grid-cols-2 sm:gap-10 ">
          <div className="text-white mt-20">
            <p className="text-3xl font-bold mb-3">Request A Call Back</p>
            <p>
              Posters had been a very beneficial marketing tool because it had
              paved to deliver an effective message that conveyed customer’s
              attention.
            </p>
            <button className="text-[16px] mt-10 uppercase font-bold border-b-2 border-[#8AC319]">
              Contact us
            </button>
          </div>
          <div className="mt-20 text-white">
            <div className="flex flex-col sm:flex-row justify-between gap-3 mb-3 text-white">
              <span className="w-full sm:w-1/2">
                <label
                  for="firstname"
                  className="hidden sm:block text-md font-semibold  "
                >
                  Name
                </label>
                <input
                  id="firstname"
                  type="text"
                  name="firstname"
                  placeholder="Name"
                  autocomplete="given-name"
                  className="block w-full p-3 mt-2 text-black bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
              </span>
              <span className="w-full sm:w-1/2">
                <label
                  for="lastname"
                  className="hidden sm:block text-md  font-semibold  "
                >
                  Phone
                </label>
                <input
                  id="lastname"
                  type="text"
                  name="lastname"
                  placeholder="Phone"
                  autocomplete="family-name"
                  className="block w-full p-3 mt-2  bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
              </span>
            </div>
            <div className="flex flex-col sm:flex-row  justify-between gap-3">
              <span className="w-full sm:w-1/2">
                <label
                  for="firstname"
                  className="hidden sm:block text-md  font-semibold "
                >
                  Email
                </label>
                <input
                  id="firstname"
                  type="text"
                  name="firstname"
                  placeholder="Email"
                  autocomplete="given-name"
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
              </span>
              <span className="w-full sm:w-1/2">
                <label
                  for="lastname"
                  className="hidden sm:block text-md  font-semibold "
                >
                  Choose Our Service
                </label>
                <input
                  id="lastname"
                  type="text"
                  name="lastname"
                  placeholder="Phone"
                  autocomplete="family-name"
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
              </span>
            </div>
            <button
              className="inline-flex items-center mt-5
            justify-center text-white px-10 py-3 text-md font-bold
           bg-[#86C017]"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
