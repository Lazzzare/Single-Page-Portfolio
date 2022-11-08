import React from "react";
import Graphic from "../assets/pattern-graphic-design.svg";
import UiUx from "../assets/pattern-ui-ux.svg";
import Apps from "../assets/pattern-apps.svg";
import Ilustrations from "../assets/pattern-illustrations.svg";
import Photograpy from "../assets/pattern-photography.svg";
import Motion from "../assets/pattern-motion-graphics.svg";

function Solutions() {
  return (
    <>
      <div className="flex flex-col mt-6 md:hidden">
        <div className="bg-[#755CDE] w-[343px] h-[364px] rounded-lg mx-auto relative">
          <img
            src={Graphic}
            alt="graphic"
            className="absolute top-0 right-0 pr-6 pt-6"
          />
          <h1 className="text-white absolute bottom-0 left-0 pl-6 pb-6 font-bold text-2xl">
            Graphic Design
          </h1>
        </div>

        <div className="flex flex-row space-x-[25px] mx-auto mt-[25px]">
          <div className="bg-[#F6A560] w-[159px] h-[182px] rounded-lg relative">
            <img
              src={UiUx}
              alt="ui-ux"
              className="absolute top-0 right-0 pt-6 pr-6"
            />
            <h1 className="absolute bottom-0 left-0 pl-6 pb-6 text-white text-[24px] font-bold">
              UI/UX
            </h1>
          </div>

          <div className="bg-[#F39E9E] w-[159px] h-[182px] rounded-lg relative">
            <img
              src={Apps}
              alt="apps"
              className="absolute top-0 right-0 pt-6 pr-6"
            />
            <h1 className="absolute bottom-0 left-0 pl-6 pb-6 text-white text-[24px] font-bold">
              Apps
            </h1>
          </div>
        </div>

        <div>
          <div className="bg-[#EB7565] w-[343px] h-[158px] rounded-lg mx-auto mt-6 relative">
            <img
              src={Ilustrations}
              alt="ilustrations"
              className="absolute right-0 top-0 pr-[40px] pt-6"
            />
            <h1 className="absolute bottom-0 left-0 pl-6 pb-6 text-white font-bold text-[24px]">
              Illustrations
            </h1>
          </div>
        </div>

        <div>
          <div className="bg-[#61C4B7] w-[343px] h-[182px] mx-auto relative mt-6 rounded-lg">
            <img
              src={Photograpy}
              alt="photograpy"
              className="absolute right-0 top-0 pr-[40px] pt-6"
            />
            <h1 className="absolute bottom-0 left-0 pl-6 pb-6 text-white font-bold text-[24px]">
              Photography
            </h1>
          </div>
        </div>

        <div>
          <div className="bg-[#552049] w-[343px] h-[182px] mx-auto relative mt-6 mb-6 rounded-lg">
            <img
              src={Motion}
              alt=""
              className="absolute right-0 top-0 pr-[40px] pt-6"
            />
            <h1 className="absolute bottom-0 left-0 pl-6 pb-6 text-white font-bold text-[24px]">
              Motion Graphics
            </h1>
          </div>
        </div>
      </div>




      

      {/* Medium Screeeen  */}

      <div className="hidden lg:hidden md:flex justify-center pt-16">
        <div className="flex flex-row">
          <div className="bg-[#755CDE] w-[333px] h-[364px] rounded-lg relative">
            <img src={Graphic} alt="graphic" className="absolute top-0 right-0 pt-6 pr-6"/>
            <h1 className="absolute bottom-0 left-0 pl-6 pb-6
            text-white font-bold text-2xl">Graphic Design</h1>
          </div>
        </div>

        <div className="flex-col ml-6">
          <div className="flex flex-row space-x-[23px]">
            <div className="bg-[#F6A560] w-[155px] h-[182px] rounded-lg relative">
                <img src={UiUx} alt="ui/ux" className="absolute top-0 right-0 pt-6 pr-6"/>
                <h1 className="absolute bottom-0 left-0 pl-6 pb-6
                text-white font-bold text-2xl"> UI/UX </h1>
            </div>

            <div className="bg-[#F39E9E] w-[155px] h-[182px] rounded-lg relative">
                <img src={Apps} alt="apps" className="absolute top-0 right-0 pt-6 pr-6"/>
                <h1 className="absolute bottom-0 left-0 pl-6 pb-6
                text-white font-bold text-2xl"> Apps </h1>
            </div>
          </div>

          <div className="mt-[23px]">
            <div className="bg-[#EB7565] w-[333] h-[158px] rounded-lg relative">
                <img src={Ilustrations} alt="illustrations" className="absolute top-0 right-0 pt-6 pr-6"/>
                <h1 className="absolute bottom-0 left-0 pl-6 pb-6
                text-white font-bold text-2xl">Illustrations</h1>
            </div>
          </div>
        </div>
      </div>


      <div className="flex-row lg:hidden hidden md:flex justify-center space-x-[24px] mt-6">
        <div className="bg-[#61C4B7] w-[333px] h-[182px] rounded-lg relative">
            <img src={Photograpy} alt="photograpy" className="absolute top-0 right-0 pt-6 pr-6"/>
            <h1 className="absolute bottom-0 left-0 pl-6 pb-6
            text-white text-2xl font-bold">Photography</h1>
        </div>

        <div className="bg-[#552049] w-[333px] h-[182px] rounded-lg relative">
            <img src={Motion} alt="motion-graphic" className="absolute top-0 right-0 pt-6 pr-6"/>
            <h1 className="absolute bottom-0 left-0 pl-6 pb-6
            text-white text-2xl font-bold">Motion Graphics</h1>
        </div>
      </div>





      {/* Desktop */}



      <div className="hidden lg:flex md:hidden justify-center pt-16">
        <div className="flex flex-row">
          <div className="bg-[#755CDE] w-[354px] h-[364px] rounded-lg relative">
            <img src={Graphic} alt="graphic" className="absolute top-0 right-0 pt-6 pr-6"/>
            <h1 className="absolute bottom-0 left-0 pl-6 pb-6
            text-white font-bold text-2xl">Graphic Design</h1>
          </div>
        </div>

        <div className="flex-col ml-6">
          <div className="flex flex-row space-x-[23px]">
            <div className="bg-[#F6A560] w-[164px] h-[182px] rounded-lg relative">
                <img src={UiUx} alt="ui/ux" className="absolute top-0 right-0 pt-6 pr-6"/>
                <h1 className="absolute bottom-0 left-0 pl-6 pb-6
                text-white font-bold text-2xl"> UI/UX </h1>
            </div>

            <div className="bg-[#F39E9E] w-[155px] h-[182px] rounded-lg relative">
                <img src={Apps} alt="apps" className="absolute top-0 right-0 pt-6 pr-6"/>
                <h1 className="absolute bottom-0 left-0 pl-6 pb-6
                text-white font-bold text-2xl"> Apps </h1>
            </div>
          </div>

          <div className="mt-[23px]">
            <div className="bg-[#EB7565] w-[354px] h-[158px] rounded-lg relative">
                <img src={Ilustrations} alt="illustrations" className="absolute top-0 right-0 pt-6 pr-6"/>
                <h1 className="absolute bottom-0 left-0 pl-6 pb-6
                text-white font-bold text-2xl">Illustrations</h1>
            </div>
          </div>
        </div>

        <div>
            
        </div>


    <div className="flex flex-col space-y-[24px] pl-6">
        <div className="bg-[#61C4B7] w-[354px] h-[182px] rounded-lg relative">
            <img src={Photograpy} alt="photograpy" className="absolute top-0 right-0 pr-6 pt-6"/>
            <h1 className="absolute bottom-0 left-0 pl-6 pb-6
            text-white font-bold text-2xl">Photography</h1>
        </div>

        <div className="bg-[#552049] w-[354px] h-[158px] rounded-lg relative">
            <img src={Motion} alt="MotionGraphic" className="absolute top-0 right-0 pr-6 pt-6"/>
            <h1 className="absolute bottom-0 left-0 pl-6 pb-6
            text-white font-bold text-2xl">Motion Graphics</h1>
        </div>
    </div>


      </div>

    </>
  );
}

export default Solutions;
