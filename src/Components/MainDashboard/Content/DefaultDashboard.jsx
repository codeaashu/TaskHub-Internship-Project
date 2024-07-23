import React from "react";

// react icons
import { GrTask } from "react-icons/gr";
import { VscProject } from "react-icons/vsc";
import { MdOutlinePeopleAlt } from "react-icons/md";

const DefaultDashboard = () => {
  return (
    <div className="w-full 800px:w-[85%] p-2 800px:p-8 mx-auto max-w-[1200px]">
      {/* overview section */}
      <h3 className="font-bold text-[#264073] text-1xl 800px:text-2xl mb-2 800px:mb-6">
        Overview
      </h3>
      <div className="grid grid-cols-1 800px:grid-cols-3 gap-5">
        <div className="p-2 800px:p-6 bg-[#d9e1f2] rounded">
          <h3 className="font-bold text-[#264073] text-[0.9rem] 800px:text-[1rem] flex items-center gap-3">
            <MdOutlinePeopleAlt />
            Total Members
          </h3>
          <p className="mt-2 font-semibold">46</p>
        </div>

        <div className="p-2 800px:p-6 bg-[#d9e1f2] rounded">
          <h3
            className="font-bold text-[#264073] text-[0.9rem] 800px:text-[1rem] flex items-center gap-3
          ">
            <GrTask />
            Total Task
          </h3>
          <p className="mt-2 font-semibold">4</p>
        </div>

        <div className="p-2 800px:p-6 bg-[#d9e1f2] rounded">
          <h3 className="font-bold text-[#264073] text-[0.9rem] 800px:text-[1rem] flex items-center gap-3">
            <VscProject />
            Total Projects
          </h3>
          <p className="mt-2 font-semibold">8</p>
        </div>
      </div>

      {/* recent section */}

      <h3 className="font-bold text-[#264073] text-1xl 800px:text-2xl mt-4 800px:mt-12 mb-2 800px:mb-4">
        Recent Task
      </h3>

      <div className="flex items-center justify-center w-full flex-col">
        <table className="w-full text-center">
          <tr className="border-b ">
            <th className="p-3 text-[#264073]">Id</th>
            <th className="text-[#264073]">Name</th>
            <th className="text-[#264073]">priority</th>
            <th className="text-[#264073]">Description</th>
          </tr>
          <tr className="border-b py-3">
            <td className="p-4">01</td>
            <td>Daily Rotine</td>
            <td>High</td>
            <td>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quam
            </td>
          </tr>
          <tr className="border-b py-3">
            <td className="p-4">02</td>
            <td>Daily Rotine</td>
            <td>High</td>
            <td>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quam
            </td>
          </tr>
          <tr className="border-b py-3">
            <td className="p-4">03</td>
            <td>Daily Rotine</td>
            <td>High</td>
            <td>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quam
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default DefaultDashboard;
