import React from "react";
import Navbar from "./HomePage/Navbar";

const Support = () => {
  return (
    <>
      <Navbar />

      <div className="w-full flex mt-6 800px:mt-24  items-center justify-center">
        <h3 className="">
          Contact me for any support
          <a href="mailto:asfakahmed680@gmail.com" className="font-bold">
            {" "}
            asfakahmed680@gmail.com
          </a>
        </h3>
      </div>
    </>
  );
};

export default Support;
