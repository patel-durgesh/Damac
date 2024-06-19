import React, { useEffect, useState } from "react";

function page() {
  const [showEnquiry, setShowEnquiry] = useState(false);

  const handleToggle = () => {
    setShowEnquiry(!showEnquiry);
  };

  const handlePresnt = () => {
    alert("presentation clicked");
  };
  // const handleEnqu = () => {
  //   alert("enquiry");
  // };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowEnquiry(true);
      } else {
        setShowEnquiry(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Set initial state based on current window size
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="items-end">
      <img
        src="img.png"
        alt=""
        className="min-h-[120vh] md:w-[100%] md:h-[80vh] object-fill md:object-cover absolute z-[-1]"
      />
      <div>
        <img
          src="img.png"
          alt=""
          className="w-full h-[80vh] object-cover absolute z-[-1]"
        />
        <div className="upper-div flex items-center justify-between px-4 py-4 md:px-20 md:py-5">
          <h1 className="text-white font-extrabold text-2xl">
            <svg
              width="166"
              height="22"
              viewBox="0 0 166 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.0893 10.9004C33.4092 7.64807 33.2959 5.12089 31.7492 3.31525C30.2026 1.51679 27.2854 0.61038 22.9994 0.61038H8.48309L7.17183 3.86987H17.1667C22.2653 3.86987 23.7422 6.48499 21.9828 10.816C20.968 13.3217 20.0682 15.6263 17.9461 16.6511C16.0037 17.5917 13.9984 17.8663 10.4291 17.8663L5.80651 17.8573L9.25903 9.42499H4.90502L0 21.4291H13.1562C16.8441 21.4291 19.7561 21.0773 21.9043 20.3773C24.2566 19.6001 26.363 18.3222 28.2252 16.5452C29.9567 14.8509 31.2453 12.9717 32.0893 10.9004ZM122.816 0.588841L122.819 0.604995H117.429L96.7212 20.5514L104.815 0.608585H95.9382L85.2145 9.25628L79.694 13.9229H79.4429L82.041 7.12397L78.8744 0.608585H69.9571L61.8507 20.5891L57.1793 0.608585H47.4059L25.8224 21.4273H31.2174L36.7345 15.9835H50.3336L51.4164 21.4273H65.8664L71.0888 8.55987C71.3521 7.91371 71.6032 7.17064 71.8491 6.33961C71.8735 7.01089 72.0513 7.72525 72.3722 8.4773L76.9668 19.2106H77.7445L90.8885 8.51499C91.382 8.11294 92.1283 7.38781 93.1239 6.33961C92.6147 7.31064 92.259 8.04653 92.0515 8.55987L86.8292 21.4273H96.3689L96.3707 21.4219H106.428L111.884 15.9529H126.01L127.143 21.4219H132.108L127.269 0.587046H122.816V0.588841ZM39.5767 13.1278L48.1836 4.65423L49.7372 13.1278H39.5767ZM114.735 13.0973L123.572 4.24141L125.408 13.0973H114.735ZM165.843 0.570892H151.196C146.907 0.570892 143.252 1.4773 140.246 3.28115C137.236 5.08499 135.069 7.61935 133.747 10.8735C132.905 12.9411 132.666 14.8347 133.027 16.5201C133.454 18.3042 134.518 19.5858 136.244 20.3611C137.813 21.0576 140.451 21.4129 144.139 21.4129H157.269L158.582 18.1068H151.184C147.621 18.1068 145.245 17.6329 144.061 16.6888C142.769 15.6676 142.913 13.3019 143.921 10.7891C145.688 6.45089 149.376 3.74782 154.474 3.74782H160.207L158.893 7.01269H163.243L165.843 0.570892Z"
                fill="#F5F5F5"
              />
            </svg>
          </h1>
          <button
            // onClick={handleEnqu}
            className="md:px-10 px-4 md:py-3 md:border-[3px] text-[10px] font-bold bg-[#dadada08] rounded-md text-[#17ABFF] border-[#17ABFF]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fff"
              className="w-6 h-6 md:hidden mt-6 ml-24 md:ml-0 md:mt-0"
              onClick={handleToggle}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <div className="mt-6 md:mt-0 md:pt-0 ">
              {(showEnquiry || window.innerWidth >= 768) && (
                <span className="ml-2 border border-[#17ABFF] md:border-0 rounded-md px-2 py-2 inline-block text-[#17ABFF] text-sm md:text-[12px]">
                  ENQUIRY NOW
                </span>
              )}
            </div>
          </button>
        </div>
      </div>
      <div className="lower-div flex flex-wrap justify-between items-center px-6 py-4 md:px-20 md:py-20">
        <div className="left-text">
          <div className="heading">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              HARBOUR LIGHTS
            </h2>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              DE <span className="text-[#17ABFF]">GRESOGONO</span>
            </h2>
            <h3 className="text-lg md:text-xl py-2 md:py-4 font-bold text-white">
              <span className="hidden md:inline-block">1,</span>
              2 & 3 Bedroom Seaside Apartments <br />
              in Dubai Maritime City
            </h3>
          </div>
          <div className="relative">
            <div className="w-1 h-10 z-2 bg-[#17ABFF]"></div>
            <p className="hidden absolute z-[-1] top-[-11px] md:block bg-[#00000070] my-1 md:my-2 py-2 text-white pl-4">
              Rental Returns of UPTO 11%**
            </p>
            <div className="w-1 h-10 z-2 mt-3 bg-[#17ABFF]"></div>
            <p className="hidden absolute z-[-1] top-10 md:block bg-[#00000070] my-1 md:my-2 py-2 text-white pl-4">
              Capital Appreciation of UPTO 32%**
            </p>
          </div>
        </div>
        <div className="right-box md:w-72 mt-2 md:mt-0 ">
          <div className="top bg-[#3a3e4bcc] text-white px-6 py-6 rounded-t-2xl">
            <p className="text-[#dadada] text-[14px]">PRICING STARTS FROM</p>
            <h2 className="text-4xl md:text-5xl  font-semibold py-2">
              $ 425,000
            </h2>
            <h5 className="text-lg font-medium">AED 1.3 Million</h5>
            <button
              onClick={handlePresnt}
              className="text-[12px] md:text-[11px]  w-[100%] mt-5 mb-1 md:mb-3 font-bold bg-[#17ABFF] px-11 rounded-md py-3"
            >
              GET A PRESENTATION
            </button>
          </div>
          <div className="bottom border-t-2 border-[#000] bg-[#3e5368] rounded-b-2xl">
            <p className="text-[#98c5e8] text-[14px] md:text-[13px] px-6 py-2">
              Get an Expert's Presentation of Real Estate in Dubai for Life and
              investment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
