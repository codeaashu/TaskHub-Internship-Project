import React from "react";

// image
import image from "../assets/asfakAhmed.jpg";
import Navbar from "./HomePage/Navbar";

const AboutUs = () => {
  return (
    <div className="dark:bg-black min-h-[100vh] h-auto">
      <Navbar />
      <div className="w-full flex-col-reverse 800px:flex-row flex justify-between mt-8 800px:mt-24 px-4 800px:px-19">
        <div className="w-full 800px:w-[50%]">
          <img
            src={image}
            alt="asfakahmed/image"
            className="w-full 800px:w-[60%] mx-auto rounded border-[4px] border-[#264073]"
          />
        </div>

        <div className="w-full 800px:w-[50%]">
          <h3 className="font-bold text-2xl text-[#264073] 800px:text-3xl mb-1 ">
            Asfak Ahmed
          </h3>
          <p className=" text-1xl text-[#264073] 800px:text-2xl mb-2 ">
            Founder of this app
          </p>
          <p className="800px:w-[80%] mt-4 w-full">
            I am Asfaq Ahmed. I am a front-end web developer. I have been
            working in this sector for the past 1+ years. I consider coding as
            the most important thing in my life. I love to tackle complex
            problems.{" "}
            <b>
              I won 2nd runner's prize in " ProgrammingHeroweb application
              showcase contest 2".
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
