import React, { useState } from "react";

const DashboardNav = ({ active, setActive }) => {
  // get dark or light from localstorage
  const darkTheme = JSON.parse(localStorage.getItem("theme"));

  return (
    <nav
      className={`${
        darkTheme ? "bg-[#132039]" : "bg-[#C6D3EC]"
      }  w-full flex items-center justify-center`}>
      <ul
        className={`${
          darkTheme ? "text-[#D9E1F2]" : ""
        } flex items-center justify-between w-full 800px:w-[70%] mx-auto`}>
        <li
          className={`py-4 800px:px-12 px-4 cursor-pointer ${
            active === 1 ? "border-b-[4px] border-[#2557bb]" : null
          }`}
          onClick={() => setActive(1)}>
          All
        </li>
        <li
          className={`py-4 800px:px-12 px-1 cursor-pointer ${
            active === 2 ? "border-b-[4px] border-[#2557bb]" : null
          }`}
          onClick={() => setActive(2)}>
          Completed
        </li>
        <li
          className={`py-4 800px:px-12 px-1 cursor-pointer ${
            active === 3 ? "border-b-[4px] border-[#2557bb]" : null
          }`}
          onClick={() => setActive(3)}>
          Incompleted
        </li>
      </ul>
    </nav>
  );
};

export default DashboardNav;
