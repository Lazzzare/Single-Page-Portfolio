import React from "react";
import AboutImg from "../assets/image-amy.webp";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start lg:pr-[165px] lg:pl-[154px] justify-center mt-[100px] md:mt-[120px] lg:mt-[206px] mb-[88px]">
      <img src={AboutImg} alt="amy" className="w-[300px] h-[300px] md:w-[364px] md:h-[364px] lg:w-[445px] lg:h-[445px]" />

      <div className="px-4 items-center text-center md:text-left md:pl-[69px] lg:pl-[125px] lg:pt-8">

        <h1 className="w-[343px] md:w-[339px] lg:w-[540px] lg:h-[100px] mx-auto text-[#030303] text-[26px] md:text-[32px] md:leading-[40px] lg:leading-[50px] lg:text-[40px] font-bold mt-10 md:mt-0 lg:mt-10">I’m Amy, and I’d love to work on your next project</h1>

        <p className="w-[343px] md:w-[339px] lg:w-[540px] lg:h-[84px] mx-auto text-[#7A746E] text-base md:text-[18px] md:leading-[28px] leading-6 font-medium mt-6 pb-7 md:pb-8 lg:mb-[40px]">
          I love working with others to create beautiful design solutions. I’ve
          designed everything from brand illustrations to complete mobile apps.
          I’m also handy with a camera!
        </p>

        <a href="/" className="bg-[#EB7565] text-white text-sm font-bold leading-7 px-[28px] py-3 md:pt-[14px] md:px-[45px] rounded-[28px]
        hover:bg-[#F6A560] duration-200">Free Consultation</a>

      </div>
    </div>
  );
}

export default About;
