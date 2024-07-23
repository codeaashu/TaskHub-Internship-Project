import React from "react";

// react icons
import { RxCross1 } from "react-icons/rx";

// framer motion
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MobileSidebar = ({ setOpen }) => {
  // get dark or light from localstorage
  const darkTheme = JSON.parse(localStorage.getItem("theme"));

  return (
    <div className="w-full h-screen fixed top-0 right-0 bg-[#0d1526d3] z-50">
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0, x: 300 }}
        className={`w-[60%] h-[100vh] ${
          darkTheme ? "bg-[#0d1526d3]" : "bg-[#ECF0F9]"
        } fixed right-0 top-0`}>
        <div className="w-full flex justify-end items-end p-2">
          <RxCross1
            className="p-2 rounded-full hover:bg-[#C6D3EC] transition duration-300"
            size={30}
            onClick={() => setOpen(false)}
          />
        </div>
        <ul className=" px-6 flex uppercase font-semibold text-[#132039] items-center gap-6 flex-col mt-8">
          <li className="hover:bg-[#C6D3EC] py-2 w-full text-center">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:bg-[#C6D3EC] py-2 w-full text-center">
            <Link to={"/about-us"}>About Us</Link>
          </li>
          <li className="hover:bg-[#C6D3EC] py-2 w-full text-center">
            <Link to={"/support"}>Support</Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default MobileSidebar;
