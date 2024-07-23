import React from "react";

// image
import vectorImage from "../../assets/Vector.png";

// framer motion
import { motion } from "framer-motion";

const Modal = ({ setTodoDelete }) => {
  // get dark or light from localstorage
  const darkTheme = JSON.parse(localStorage.getItem("theme"));

  return (
    <>
      <div className="w-full h-screen fixed top-0 left-0 bg-[#060b13a4] flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className={`${
            darkTheme ? "bg-[#132039]" : "bg-[#ECF0F9]"
          } p-4 rounded`}>
          <div
            className={`${
              darkTheme ? "text-[#D9E1F2]" : "text-[#132039]"
            } flex items-center gap-5`}>
            <img src={vectorImage} alt="vector/image" className="w-[50px]" />

            <div>
              <h3 className="font-bold text-[1.1rem]">Are you Sure?</h3>
              <p>This Action might delete everything up</p>
            </div>
          </div>
          <div className="w-full mt-8 flex items-center justify-end gap-5">
            <button
              className={`${
                darkTheme
                  ? "bg-[#364e798f] text-[#D9E1F2] "
                  : "bg-[#D9E1F2] text-[#132039]"
              } px-4 py-2 rounded`}
              onClick={() => setTodoDelete(false)}>
              Cancel
            </button>
            <button
              className={`${
                darkTheme
                  ? "bg-[#7997D2] text-[#0D1526] "
                  : "bg-[#406BBF] text-[#ECF0F9]"
              } px-4 py-2 rounded`}
              onClick={() => setTodoDelete(false)}>
              Ok
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Modal;
