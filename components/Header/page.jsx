import React from "react";

function page() {
  const data = [
    {
      imgurl: "./hotel.png",
      para: "BOOK WITH",
      heading: "ONLY 20%",
    },
    {
      imgurl: "./discount.png",
      para: "PAYMENT PLAN",
      heading: "EASY 70/30",
    },
    {
      imgurl: "./handover.png",
      para: "HANDOVER ON",
      heading: "Q2 2027",
    },
    {
      imgurl: "./area.png",
      para: "AREA START FROM",
      heading: "700 SQMT",
    },
  ];
  return (
    <div className="flex bg-[#f4f9ff] justify-around flex-wrap">
      {data.map((item) => {
        return (
          <div className="md:px-20 py-10 px-4 pb-6">
            <div className="small items-center">
              <div className="flex items-center justify-center">
                <img src={item.imgurl} alt="" />
              </div>
              <div className="flex items-center justify-center">
                <p className="text-[#00357b]">{item.para}</p>
              </div>
              <div className="flex items-center justify-center">
                <h3 className="md:text-4xl text-2xl text-[#00357b] font-bold">
                  {item.heading}
                </h3>
              </div>
              <div className="flex items-center justify-center pt-2">
                <div className="w-20 h-1 bg-[#dadada] rounded-full"></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default page;
