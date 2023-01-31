import React from "react";
import Map from "react-map-gl";

const Contact = () => {
  return (
    <div className="pb-28 md:pt-10 max-w-screen-xl mx-auto px-5" id="contact">
      <h2 className="hidden md:block text-primary font-cursive text-xl text-center mb-5 mx-auto">
        Contact Us
      </h2>
      <h1 className="text-3xl md:text-5xl font-bold md:text-center md:w-3/5 mx-auto text-white">
        Any Question?
      </h1>
      <div className="mt-20">
        <div></div>
        <div className=" md:w-1/2 mx-auto">
          <div>
            <form className="flex flex-col items-center w-full px-10 py-5 shadow-md border bg-white">
              <div className="w-full">
                <span>*Name</span>
                <br />
                <input type="text" className="border px-3 py-2 w-full rounded-sm mt-1 active:outline outline-primary" />
              </div>
              <div className="mt-3 w-full">
                <span>*Email</span>
                <br />
                <input type="email" className="border px-3 py-2 w-full rounded-sm mt-1 active:outline outline-primary" />
              </div>
              <div className="mt-3 w-full">
                <span>*Message</span>
                <br />
                <textarea rows={10} className="border px-3 py-2 w-full rounded-sm mt-1 active:outline outline-primary" />
              </div>
              <button className="px-7 mt-2 py-2 rounded-sm bg-primary text-white">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
