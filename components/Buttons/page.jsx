"use client";
import React, { useState } from "react";
import Exterior from "../Exterior/page.jsx";
import Interior from "../Interior/page.jsx";

function page() {
  const data = ["EXTERIORS", "INTERIORS"];
  const [value, setvalue] = useState("EXTERIORS");
  const handle = (state) => {
    setvalue(state);
  };

  const renderComponents = () => {
    switch (value) {
      case "EXTERIORS":
        return <Exterior />;
      case "INTERIORS":
        return <Interior />;
      default:
        return null;
    }
  };
  return (
    <div className="md:px-28">
      <div className="first md:text-end px-12 text-center">
        <p className="text-[12px] md:text-[14px] text-[#00000085]">
          *T&Cs apply | ** Based on similar branded projects in the last 2
          years.{" "}
          <a href="#" className="border-b-[1px]">
            Source 1
          </a>{" "}
          |{" "}
          <a href="#" className="border-b-[1px]">
            Source 2
          </a>
        </p>
      </div>
      <div className="second flex md:justify-end justify-center mt-10">
        {data.map((val) => {
          return (
            <button
              onClick={() => handle(`${val}`)}
              className={`btn border-2 md:px-4 px-8 py-3 border-[#00357b] font-bold text-[14px] md:rounded-lg rounded-md mr-2 md:py-2 ${
                value === val
                  ? "bg-[#00357b] text-[#eaeaea]"
                  : "bg-white text-[#00357b]"
              }`}
            >
              {val}
            </button>
          );
        })}
      </div>
      {renderComponents()}
    </div>
  );
}

export default page;
