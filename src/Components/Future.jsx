import React from "react";
import Logo from "../assets/logo.svg";

const Future = () => {
  return (
    <>
      <div
        className="w-[343px] h-[352px] md:w-[690px] md:h-[352px] lg:w-[1110px] lg:h-[320px]
     bg-black text-white mx-auto flex flex-col justify-center items-center lg:items-start text-center lg:text-left rounded-lg mb-[42px] md:mb-[60px]"
      >
        <div className="flex flex-col lg:flex-row justify-between items-center w-full">
          <div className="flex flex-col">
            <h1 className="font-bold text-[26px] pb-[24px] lg:px-[65px]">
              Book a call with me
            </h1>
            <p className="px-[24px] lg:px-[65px] pb-[24px] lg:w-[540px] lg:h-[84px] leading-[26px]">
              I’d love to have a chat to see how I can help you. The best first
              step is for us to discuss your project during a free consultation.
              Then we can move forward from there.
            </p>
          </div>
          <a
            href="/"
            className="bg-[#EB7565] px-[28px] py-[8px] rounded-3xl font-bold 
        text-[14px] leading-[28px] lg:mr-[95px] hover:bg-[#F6A560] duration-300"
          >
            Free Consultation
          </a>
        </div>
      </div>


      <div className='flex justify-between items-center mx-4 md:mx-10 lg:mx-[275px] mt-[18px] md:mt-9 mb-[32px]'>
        <img src={Logo} alt="logo" className='w-[48px] h-[48px] cursor-pointer' />
        <a href="/" className='text-sm bg-[#030303] text-white font-bold py-3 px-7 rounded-3xl
        hover:bg-[#755CDE] duration-200'> Free Consultation </a>
    </div>
    </>
  );
};

export default Future;
