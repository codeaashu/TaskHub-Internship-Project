import React from "react";

// react icons
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin5Fill } from "react-icons/ri";

const ManageTask = () => {
  return (
    <div className="w-full 800px:w-[85%] mx-auto max-w-[1200px]">
      <h3 className="font-bold text-1xl text-[#264073] 800px:text-2xl mb-2 800px:mb-6 mt-2 800px:mt-9">
        All Task
      </h3>
      <div className="flex items-center justify-center w-full flex-col">
        <table className="w-full text-center">
          <tr className="border-b ">
            <th className="p-3 text-[#264073]">Name</th>
            <th className="text-[#264073]">Status</th>
            <th className="text-[#264073]">Due Date</th>
            <th className="text-[#264073]">Completion</th>
            <th className="text-[#264073]">Action</th>
          </tr>
          <tr className="border-b py-3 ">
            <td className="p-4">US Client project</td>
            <td>Completed</td>
            <td>45%</td>
            <td>100%</td>
            <td>
              <div className="flex gap-4 w-full items-center justify-center">
                <BiEdit color="#2b9b09" className=" cursor-pointer" />
                <RiDeleteBin5Fill color="#ff0000" className=" cursor-pointer" />
              </div>
            </td>
          </tr>
          <tr className="border-b py-3 ">
            <td className="p-4">My workout</td>
            <td>On going</td>
            <td>Daily</td>
            <td>80%</td>
            <td>
              <div className="flex gap-4 w-full items-center justify-center">
                <BiEdit color="#2b9b09" className=" cursor-pointer" />
                <RiDeleteBin5Fill color="#ff0000" className=" cursor-pointer" />
              </div>
            </td>
          </tr>
          <tr className="border-b py-3">
            <td className="p-4">Meeting schedule</td>
            <td>Comming</td>
            <td>12-09-2023</td>
            <td>50%</td>
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

export default ManageTask;
