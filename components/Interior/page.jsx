import React, { useState } from "react";

function Page() {
  const [value, setValue] = useState(0);
  const imgData = [
    { imgUrl: "ext5.png" },
    { imgUrl: "ext3.png" },
    { imgUrl: "ext1.png" },
    { imgUrl: "ext4.png" },
    { imgUrl: "ext2.png" },
  ];

  const handlePrevClick = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const handleNextClick = () => {
    if (value < imgData.length - 1) {
      setValue(value + 1);
    }
  };

  const otherImages = imgData.filter((_, index) => index !== value);

  return (
    <div className="px-0">
      <div className="main-min-div relative">
        <svg
          width="35"
          height="34"
          viewBox="0 0 35 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute top-[33vh] md:left-10 left-4 ${
            value === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={handlePrevClick}
        >
          <circle
            cx="17"
            cy="17"
            r="17"
            transform="matrix(-1 0 0 1 34.5 0)"
            fill="#FCFCFC"
          />
          <path
            d="M20.565 11.875L14.435 17L20.565 22.125"
            stroke="#00357B"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="min-div flex items-center justify-center pt-10">
          <img
            src={imgData[value].imgUrl}
            alt=""
            className="w-[180vh] h-[60vh] object-cover rounded-lg overflow-hidden"
          />
        </div>
        <svg
          width="35"
          height="34"
          viewBox="0 0 25 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute top-[33vh] md:right-10 right-4 ${
            value === imgData.length - 1
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}
          onClick={handleNextClick}
        >
          <circle cx="12.5" cy="13" r="12.5" fill="#FCFCFC" />
          <path
            d="M10.2463 9.23108L14.7537 12.9995L10.2463 16.7678"
            stroke="#00357B"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="min-div py-10 flex flex-wrap gap-4 justify-center">
        {otherImages.map((image, index) => (
          <img
            key={index}
            src={image.imgUrl}
            alt=""
            className="md:w-[40vh] md:h-[20vh] w-[20vh] object-cover rounded-lg overflow-hidden"
          />
        ))}
      </div>
    </div>
  );
}

export default Page;
