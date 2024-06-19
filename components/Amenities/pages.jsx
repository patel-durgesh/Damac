import React from "react";
import Features from "../Features/pages.jsx";

function pages() {
  return (
    <>
      <div className="mt-0 pt-0 bg-white">
        <div className="in-div-top pt-8 text-[#00357b]  font-medium text-center word-spacing-[2px]">
          <h3 className="text-2xl md:text-3xl tracking-[8px]">
            HARBOUR <br /> LIGHTS
          </h3>
          <p className="text-[10px] md:text-[12px] font-extralight">
            de GRISOGONO
          </p>
          <p className="font-extralight text-[4px] md:text-[6px] leading-[2px]">
            GENEVE
          </p>
        </div>
        <div className="in-div  text-[#00357b]  font-semibold text-center word-spacing-[2px] mt-6">
          <h3 className="text-2xl md:text-4xl uppercase">
            Features & Amenities
          </h3>
        </div>
        <div className="in-div m-auto w-[82%] md:w-[50%] pt-4 md:pt-6">
          <p className="text-center text-lg">
            Harbour Lights beautifully honours maritime voyages while embracing
            an opulent seafront lifestyle. Its maritime-inspired amenities
            provide an unmatched seaside experience, offering a life of
            tranquility and bliss.
          </p>
        </div>
      </div>
      <Features />
    </>
  );
}

export default pages;
