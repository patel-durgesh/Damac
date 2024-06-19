import React from "react";

function pages() {
  const data = [
    {
      name: "Floating Pools",
      imgUrl: "floating.png",
    },
    {
      name: "Spacious Cabins Like Rooms",
      imgUrl: "cabin.png",
    },
    {
      name: "Sea Facing Swimming Pools",
      imgUrl: "seafacing.png",
    },
    {
      name: "Gymnasium & Fitness",
      imgUrl: "gym.png",
    },
  ];
  return (
    <div className="flex justify-between flex-wrap md:px-10 mt-6">
      {data.map((item) => {
        return (
          <div className="px-4 py-8 md:px-10 md:py-20">
            <div className="img relative ">
              <img
                src={item.imgUrl}
                alt=""
                className="w-32 h-32 md:w-48 md:h-48 md:ml-4 ml-2 object-cover rounded-full absolute md:mt-[-60px] mt-[-10px]"
              />
            </div>

            <div className="below-img text-[#00357b] items-center w-36 h-48 md:w-56 md:h-56 rounded-xl shadow-2xl">
              <h4 className="md:text-2xl text-md px-2 text-center md:pt-36 pt-32 font-medium">
                {item.name}
              </h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default pages;
