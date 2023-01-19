import React from "react";
import {BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";


const Ratting = ({ rating }) => {
  const rattingStar = Array.from({ length: 5 }, (v, index) => {
    let number = index + 0.5;
    return (
      <div className="mr-1" key={index}>
        {rating> index + 1
          ?< BsStarFill className="text-yellow-500" />
          : rating?.rate > number
          ? <BsStarHalf className="text-yellow-500" />
          : <BsStar className="text-yellow-500" />
          }
      </div>
    );
  });
  return (
    <div className="flex items-center">
        {rattingStar}
    </div>
  )
};

export default Ratting;
