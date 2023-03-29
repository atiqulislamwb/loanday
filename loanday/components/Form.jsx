import React from "react";

const Form = () => {
  return (
    <div className="w-full p-3 sm:p-10 bg-[#fff] mt-16 ">
      <div className=" max-w-[500px] min-w-[300px]">
        <h1 className="text-xl font-semibold">Hello much do you need?</h1>
        <form className="mt-6">
          <div className="flex justify-between gap-3">
            <span className="w-1/2">
              <label
                for="firstname"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                Name
              </label>
              <input
                id="firstname"
                type="text"
                name="firstname"
                placeholder="Name"
                autocomplete="given-name"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
            </span>
            <span className="w-1/2">
              <label
                for="lastname"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                Phone
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
          <label
            for="email"
            className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >
            E-mail
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="john.doe@company.com"
            autocomplete="email"
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            required
          />
          <label
            for="password"
            className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >
            Amount of Money ($)
          </label>
          <input
            id="password"
            type="number"
            autocomplete="new-password"
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            required
          />
          <label
            for="password-confirm"
            className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >
            How Long For Day?
          </label>
          <input
            id="password-confirm"
            type="number"
            autocomplete="new-password"
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            required
          />
          <button
            type="submit"
            className="w-full py-3 mt-6 font-medium
             tracking-widest text-white uppercase
              bg-[#86C017] shadow-lg focus:outline-none
               hover:shadow-none"
          >
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
