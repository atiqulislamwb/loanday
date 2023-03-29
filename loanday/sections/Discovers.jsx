import React from "react";

const loanTypes = [
  {
    id: "01",
    name: "Personal Loan",
    desc: "But that’s not the kind of attention you want, is it?",
    img: "https://images.unsplash.com/photo-1598988720779-9f0d8057dd5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBnaXJsfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    id: "02",
    name: "Business Loan",
    desc: "But that’s not the kind of attention you want, is it?",
    img: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    id: "03",
    name: "Educational Loan",
    desc: "But that’s not the kind of attention you want, is it?",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvJjAbEEu-ftt-D3VnIts7TBd1efqeaRyVdg&usqp=CAU",
  },
  {
    id: "04",
    name: "Commercial Loan",
    desc: "But that’s not the kind of attention you want, is it?",
    img: "https://www.loanonphone.co.in/blog/wp-content/uploads/2019/05/feat.jpg",
  },
  {
    id: "05",
    name: "Health Loan",
    desc: "But that’s not the kind of attention you want, is it?",
    img: "https://creditkarma-cms.imgix.net/wp-content/uploads/2019/03/medical-loans_908034252.jpg",
  },
];

const Discovers = () => {
  return (
    <div className="w-full bg-gray-100 pt-10">
      <div className="flex flex-wrap items-start ">
        {loanTypes?.map((item, i) => (
          <div
            key={i}
            className="relative parent 
            h-[400px] sm:h-[500px] w-full sm:w-[380px] object-fit text-white"
            style={{ backgroundImage: `url(${item?.img})` }}
          >
            <div className="absolute inset-0 bg-[#182143] opacity-80"></div>
            <div className="absolute child -bottom-16 left-0 p-2 ">
              <p className="text-[25px] mt-2 text-[#8AC319] mb-10 font-bold">
                {item?.id}. <span className="text-white">{item?.name}</span>
              </p>

              <p className="text-[14px] text-[#F9FAFB] ">{item?.desc}</p>
              <button className="text-[12px] text-[#F9FAFB] child1 mt-5 uppercase font-bold border-b-2 border-[#F9FAFB]">
                Find Out MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discovers;
