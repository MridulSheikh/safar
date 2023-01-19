import React from "react";
import { link } from "./schema";
import {ImLocation2} from 'react-icons/im'
import {BsHeadset} from 'react-icons/bs'
import {SiMaildotru} from 'react-icons/si'

const Footer = () => {
  return (
    <div className="pt-10 bg-gray-100">
      <div className="grid md:grid-cols-3 gap-10 max-w-screen-xl mx-auto px-5">
        <div>
          <h1 className="text-2xl font-semibold text-primary">About us</h1>
          <p className="text-lg text-gray-700 mt-4 pr-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rem
            corporis aut dolores voluptatem, neque, recusandae harum aliquam
            iure, accusamus dolorem cumque modi ad nulla nihil provident? Ipsum,
            obcaecati deleniti.
          </p>
        </div>
        <div className="text-center md:border-r-2 md:border-l-2">
          <h1 className="text-2xl text-primary font-bold">Popular Links</h1>
          <div className="grid grid-cols-2 gap-x-3 text-gray-700 text-lg mt-5">
            {link.map((lnk) => (
              <a key={lnk.link} className="block mb-2 hover:text-primary" href={lnk.link}>
                {lnk.title}
              </a>
            ))}
          </div>
        </div>
        <div>
        <h1 className="text-2xl text-primary font-bold">SAFAR</h1>
        <div className="flex gap-2 text-lg text-primary items-center mt-5">
            <ImLocation2 />
            <span className="text-gray-700">Dhanmondi, Dhaka, Bangladesh</span>
        </div>
        <div className="flex gap-2 text-lg text-primary items-center mt-5">
            <BsHeadset />
            <span className="text-gray-700">(+880) 1883992407, 1737474558</span>
        </div>
        <div className="flex gap-2 text-lg text-primary items-center mt-5">
            <SiMaildotru />
            <span className="text-gray-700">help@safar.com</span>
        </div>
        </div>
      </div>
      <p className="text-lg text-center my-5 text-gray-700">Copyright @ 2021 safar all right reserved.</p>
    </div>
  );
};

export default Footer;
