import React from "react";

const Customers = () => {
  return (
    <div className="w-full">
      <div className="bg_customers">
        <div className="w-full sm:w-8/12 mx-auto">
          <div className="mx-auto text-white mt-[100px] ">
            <p className="text-center text-4xl pb-5 text-white font-bold">
              What Customers Are Saying
            </p>
            <p className="text-center">
              Comfortable knowing that my loan was going towards a good cause
            </p>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-8/12 mx-auto -mt-[440px] sm:mb-36">
        <div className="grid sm:grid-cols-3 mt-64 p-4 sm:p-0">
          <div
            className="card w-full p-3 sm:w-96 h-[400px] sm:h-auto   mx-auto bg-white 
           shadow-xl hover:shadow"
          >
            <img
              className="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
              src="https://avatars.githubusercontent.com/u/67946056?v=4"
              alt=""
            />
            <div className="text-center mt-2 text-3xl font-medium">
              Ajo Alex
            </div>

            <div className="text-center font-normal text-lg">Kerala</div>
            <div className="px-6 text-center mt-2 font-light text-xl">
              <p>
                I am so grateful for the microfinance loan I received! It helped
                me start my own business and support my family. The process was
                easy and the support from the microfinance organization was
                amazing.
              </p>
            </div>
          </div>
          <div className=" hidden sm:block card w-96 h-[400px]  mx-auto bg-white  shadow-xl hover:shadow">
            <img
              className="w-32 mx-auto h-32  rounded-full object-cover  -mt-20 border-8 border-white"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt=""
            />
            <div className="text-center mt-2 text-3xl font-medium">Birdie</div>

            <div className="text-center font-normal text-lg">Kerala</div>
            <div className="px-6 text-center mt-2 font-light text-xl">
              <p>
                I had a great experience with microfinance. The interest rates
                were fair and the repayment plan was flexible. The loan helped
                me expand my existing business and improve my financial
                situation.
              </p>
            </div>
          </div>
          <div className=" hidden sm:block  card  w-96  mx-auto bg-white  shadow-xl hover:shadow">
            <img
              className="w-32 h-32 mx-auto rounded-full object-cover -mt-20 border-8 border-white"
              src="https://st3.depositphotos.com/1037987/15097/i/600/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg"
              alt=""
            />
            <div className="text-center mt-2 text-3xl font-medium">Santos</div>

            <div className="text-center font-normal text-lg">Kerala</div>
            <div className="px-6 text-center mt-2 font-light text-xl">
              <p>
                I love that microfinance empowers individuals and communities by
                providing access to financial services. The loans are used to
                create real change and improve livelihoods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
