import React, { useState } from "react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardContent from "./DashboardContent";

const Dashboard = () => {
  const [active, setActtive] = useState(1);

  // get dark or light from localstorage
  const darkTheme = JSON.parse(localStorage.getItem("theme"));

  return (
    <section
      className={`${
        darkTheme ? "bg-[#0D1526]" : ""
      } max-w-[1200px] mx-auto flex`}>
      <div className="800px:w-[300px] w-[60px]">
        <DashboardSidebar setActive={setActtive} active={active} />
      </div>
      <div
        className={`800px:w-[100%] w-[80%] ${
          darkTheme ? "bg-[#060B13]" : "bg-white"
        }`}>
        <DashboardContent
          setsidebarActive={setActtive}
          sidebarActive={active}
        />
      </div>
    </section>
  );
};

export default Dashboard;
