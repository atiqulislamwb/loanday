import React from "react";

const posts = [
  {
    id: 1,
    title: "Get Best Advertiser In Your Side",
    desc: "The StarTribune doesn’t just hand out the responsibility of informing their community’s citizenry on a daily basis to just any...",
    author: "Cain",
    img: "https://static.vecteezy.com/system/resources/previews/004/773/704/original/a-girl-s-face-with-a-beautiful-smile-a-female-avatar-for-a-website-and-social-network-vector.jpg",
    date: "19th March 2023",
  },
  {
    id: 2,
    title: "Internet Advertising Trends You",
    desc: "Nope, I had to interview for this job. And I tell you, I was magnificent, so much so that, as you know, I got the position...",
    author: "Cain",
    img: "https://media.allure.com/photos/59789d36377eca26ac03093a/16:9/w_1280,c_limit/Screen%20Shot%202017-07-26%20at%208.52.27%20AM.png",
    date: "19th March 2023",
  },
  {
    id: 1,
    title: "Improve Your Business Cards",
    desc: "Upon completion of the interview the gentleman that was to give me my first opportunity at financial freedom...",
    author: "Cain",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzVkRl5poXgOrlPo4N550GgIBUHThNP_zcqtWWLVfooiL3w_nsKIA24Mr9XOnxleE_Sr4&usqp=CAU",
    date: "19th March 2023",
  },
];

const Posts = () => {
  return (
    <div className="w-full ">
      <div className="w-full sm:w-8/12 mx-auto mt-20 mb-20 p-4">
        <div className="flex flex-col items-center justify-center">
          <p className="text-4xl font-bold">Latest Post</p>
          <p className="mb-14 mt-3 text-center">
            Certainly at that point I was not a potential client for the Strib,
            but promotional
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-8">
          {posts?.map((item, i) => (
            <div
              key={i}
              className="px-10 
               hover:shadow-md cursor-pointer
               hover:scale-105 transition duration-500 
              shadow-lg py-5 border border-gray-200"
            >
              <p className="mt-5 mb-10 text-2xl">{item?.title}</p>
              <p className="text-gray-600">{item?.desc}</p>
              <div className="flex gap-3 mt-6">
                <div>
                  <img
                    src={item?.img}
                    alt=""
                    className="w-14 h-14 object-cover rounded-full"
                  />
                </div>
                <div>
                  <p>{item?.author}</p>
                  <p>{item?.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center">
          <button
            className="m-10 inline-flex items-center uppercase 
            justify-center text-white px-10 py-3 text-md font-bold
           bg-[#86C017]"
          >
            view more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Posts;
