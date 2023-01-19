import { useRouter } from 'next/router'
import React from 'react'
import { AiFillCaretLeft, AiFillCaretRight, AiOutlineArrowRight } from 'react-icons/ai'
import Slider from "react-slick";
import Ratting from "../shared/Ratting"

type props = {
    revew : string,
    name : string,
}

export const CustomRevewsCard = ({name, rating, revew} : any) => {
    const router = useRouter()
    return(
        <div onClick={()=>router.push('/')} className='bg-white p-10 border rounded-md'>
            <p className='text-lg font-roboto'>
              {revew.substring(0,200)}...
            </p>
            <div className='mt-5 flex flex-col justify-start items-end'>
                <h1 className='mb-2 text-2xl font-bold text-primary'>{name}</h1>
                <Ratting rating={5} />
            </div>
        </div>
    )
}

function SampleNextArrow(props : any) {
    const {onClick } = props;
    return (
      <span
        className="text-3xl top-1/3 absolute -right-10 md:-right-16 cursor-pointer ease-in duration-200 hover:bg-primary w-14 h-14 flex justify-center items-center rounded-full text-primary  hover:text-white"
        onClick={onClick}
      >
      <AiFillCaretRight className="ml-1" /> 
    </span>
    );
  }
  
  function SamplePrevArrow(props : any) {
    const {onClick } = props;
    return (
        <span
        className="text-3xl top-1/3 absolute -left-10 md:-left-16 cursor-pointer ease-in duration-200 hover:bg-primary w-14 h-14 flex justify-center items-center rounded-full text-primary hover:text-white z-40"
        onClick={onClick}
      >
      <AiFillCaretLeft className="mr-1" />    
    </span>
    );
  }

const Revew = () => {
    const text = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow className="nextarrow" />,
        prevArrow: <SamplePrevArrow className="prevarrow" />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows : false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                arrows : false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows : false
              }
            }
          ]
      };
  return (
    <div className='max-w-screen-xl mx-auto px-5 pb-20 md:pt-10' id="testimonial">
        <h2 className='hidden md:block text-primary font-cursive text-xl md:text-center mb-5 mx-auto'>Testimonials</h2>
        <h1 className='text-3xl md:text-5xl text-gray-800 font-bold md:text-center'>What Our Happy Customers Say About Us</h1>
        <div className='px-2 md:px-14 mt-5 md:mt-20'>
        <Slider {...settings}>
        <div className="px-5 py-5 xl:py-0">
             <CustomRevewsCard name={'John Smith, CEO'} revew={text} />
          </div>
          <div className="px-5 py-5 xl:py-0">
             <CustomRevewsCard name={'John Smith, CEO'} revew={text} />
          </div>
          <div className="px-5 py-5 xl:py-0">
             <CustomRevewsCard name={'John Smith, CEO'} revew={text} />
          </div>
          <div className="px-5 py-5 xl:py-0">
             <CustomRevewsCard name={'John Smith, CEO'} revew={text} />
          </div>
          <div className="px-5 py-5 xl:py-0">
             <CustomRevewsCard name={'John Smith, CEO'} revew={text} />
          </div>
        </Slider>
        </div>
    </div>
  )
}

export default Revew