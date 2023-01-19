import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineAlignRight, AiOutlineMinus } from "react-icons/ai";
import { link } from "./schema";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [down, setDown] = useState(false);
  const controler = () => {
    if (window.scrollY > 650) {
      setDown(true);
    } else {
      setDown(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controler);
  }, []);
  return (
    <div className="fixed w-full top-0 py-3 z-50">
      <div className="flex max-w-screen-xl text-white font-bold justify-between px-5 mx-auto items-center">
        {
          !down ?  <h1 className={"text-3xl font-medium text-primary"}>SAFAR</h1> : <div />
        }
        <div>
          <button onClick={() => setClick(!click)} className={`text-3xl ${down ? 'text-primary bg-white rounded-md' : 'text-white'}`}>
            {!click ? <AiOutlineAlignRight /> : <AiOutlineMinus />}
          </button>
        </div>
      </div>
      <div
        className={`bg-white border text-xl font-bold flex flex-col md:w-5/12 right-14 rounded-md p-4 ease-in duration-200 ${
          click ? "fixed" : "hidden"
        }`}
      >
        {link.map((lnk) => (
          <span className="hover:text-primary ease-in duration-200">
            <a href={lnk.link}>{lnk.title}</a>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
