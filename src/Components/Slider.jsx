import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../assets/image-slide-1.jpg";
import img2 from "../assets/image-slide-2.jpg";
import img3 from "../assets/image-slide-3.jpg";
import img4 from "../assets/image-slide-4.jpg";
import img5 from "../assets/image-slide-5.jpg";

export default class MultipleItems extends Component {
    render() {
      const settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
      };
    return (
      <div className="mb-[88px]">
        <h2 className="items-center justify-center flex font-bold text-3xl leading-[40px] text-black pb-[26px]">
          My Work
        </h2>
        <Slider {...settings}>
            <div className="">
              <img src={img1} alt="" className="rounded-md"/>
            </div>
            <div className="">
              <img src={img2} alt="" className="rounded-md"/>
            </div>
            <div className="">
              <img src={img3} alt="" className="rounded-md"/>
            </div>
            <div className="">
              <img src={img4} alt="" className="rounded-md"/>
            </div>
            <div className="">
              <img src={img5} alt="" className="rounded-md"/>
            </div>
        </Slider>
      </div>
    );
  }
}
