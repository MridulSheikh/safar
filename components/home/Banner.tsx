import React from "react";
import BannerCard from "./BannerCard";
import Slider from "react-slick";
import {AiOutlineRight,AiOutlineLeft} from 'react-icons/ai'
import BannerCard2 from "./BannerCard2";
import BannerCard3 from "./BannerCard3";

function SampleNextArrow(props : any) {
    const {onClick } = props;
    return (
      <span
        className="text-3xl top-1/2 absolute right-0 md:right-10 cursor-pointer ease-in duration-200 bg hover:bg-black/25 w-14 h-14 flex justify-center items-center rounded-full text-white  hover:text-PrimaryYellow-500"
        onClick={onClick}
      >
      <AiOutlineRight className="ml-1" /> 
    </span>
    );
  }

  function SamplePrevArrow(props : any) {
    const {onClick } = props;
    return (
        <span
        className="text-3xl top-1/2 absolute left-0 md:left-10 cursor-pointer ease-in duration-200 hover:bg-black/25 w-14 h-14 flex justify-center items-center rounded-full text-white  hover:text-PrimaryYellow-500 z-40"
        onClick={onClick}
      >
      <AiOutlineLeft className="mr-1" />    
    </span>
    );
  }

const Banner = () => {
  const settings = {
    autoplay : true,
    autoplaySpeed : 2000,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className="nextarrow" />,
    prevArrow: <SamplePrevArrow className="prevarrow" />,
  };
  return (
    <div>
      <Slider {...settings}>
         <BannerCard />
         <BannerCard2 />
         <BannerCard3 />
      </Slider>
    </div>
  );
};

export default Banner;
