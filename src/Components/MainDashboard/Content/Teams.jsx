import React from "react";

// react icons
import { AiFillStar } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin5Fill } from "react-icons/ri";

// iamges
import image1 from "../../../assets/image1.jpg";
import image2 from "../../../assets/image2.jpg";
import image3 from "../../../assets/image3.jpg";

const Teams = () => {
  return (
    <div className="w-full 800px:w-[85%] mx-auto max-w-[1200px]">
      <h3 className="font-bold text-1xl text-[#264073] 800px:text-2xl mb-2 800px:mb-6 mt-2 800px:mt-9">
        All Teams
      </h3>
      <div className="flex items-center justify-center w-full flex-col">
        <table className="w-full text-center">
          <tr className="border-b ">
            <th className="p-3 text-[#264073]">Team Leader</th>
            <th className="text-[#264073]">Summary</th>
            <th className="text-[#264073]">Completion</th>
            <th className="text-[#264073]">Reward</th>
            <th className="text-[#264073]">Action</th>
          </tr>
          <tr className="border-b py-3 text-center">
            <td className="p-4">
              <img src={image1} alt="image/1" className="w-[40px] mx-auto" />
            </td>
            <td>Lorem ipsum dolor sit amet.</td>
            <td>45%</td>
            <td>
              <AiFillStar className="  text-[#fd9c2c] mx-auto" size={22} />
            </td>
            <td>
              <div className="flex gap-4 w-full items-center justify-center">
                <BiEdit color="#2b9b09" className=" cursor-pointer" />
                <RiDeleteBin5Fill color="#ff0000" className=" cursor-pointer" />
              </div>
            </td>
          </tr>
          <tr className="border-b py-3 text-center">
            <td className="p-4">
              <img src={image2} alt="image/1" className="w-[40px] mx-auto" />
            </td>
            <td> amet consectetur adipisicing </td>
            <td>80%</td>
            <td>
              <AiFillStar className="  text-[#fd9c2c] mx-auto" size={22} />
            </td>
            <td>
              <div className="flex gap-4 w-full items-center justify-center">
                <BiEdit color="#2b9b09" className=" cursor-pointer" />
                <RiDeleteBin5Fill color="#ff0000" className=" cursor-pointer" />
              </div>
            </td>
          </tr>
          <tr className="border-b py-3">
            <td className="p-4">
              <img src={image3} alt="image/1" className="w-[40px] mx-auto" />
            </td>
            <td>nostrum dolorem porro.</td>
            <td>100%</td>
            <td>
              <AiFillStar className="  text-[#fd9c2c] mx-auto" size={22} />
            </td>
            <td>
              <div className="flex gap-4 w-full items-center justify-center">
                <BiEdit color="#2b9b09" className=" cursor-pointer" />
                <RiDeleteBin5Fill color="#ff0000" className=" cursor-pointer" />
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Teams;
