import React from "react";

// manually imported components
import DefaultDashboard from "./Content/DefaultDashboard";
import Teams from "./Content/Teams";
import ManageTask from "./Content/ManageTask";
import Projects from "./Content/Projects";

const MainDashboardContent = ({ active }) => {
  return (
    <div>
      {active === 1 && <DefaultDashboard />}
      {active === 2 && <Teams />}
      {active === 3 && <ManageTask />}
      {active === 4 && <Projects />}
    </div>
  );
};

export default MainDashboardContent;
