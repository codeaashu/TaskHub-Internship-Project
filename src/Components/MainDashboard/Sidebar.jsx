import React from "react";

// avatar image
import logo from "../../assets/logo.svg";
import mobileLogo from "../../assets/logo.png";

// react icons
import { FiUsers } from "react-icons/fi";
import { BiArrowBack, BiHomeAlt2 } from "react-icons/bi";
import { IoLogOutOutline } from "react-icons/io5";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";

// styles
import styles from "../../styles/styles";

import { useNavigate } from "react-router-dom";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const Sidebar = ({ setActive, active }) => {
  // use navigate
  const navigate = useNavigate();

  // get dark or light from localstorage
  const darkTheme = JSON.parse(localStorage.getItem("theme"));

  return (
    <>
      <aside
        className={`w-[60px] 800px:w-[280px] ${
          darkTheme ? "bg-[#0D1526]" : "bg-[#D9E1F2]"
        } 800px:p-8 p-2 800px:py-4 py-8 min-h-[100vh] fixed top-0 left-0 1300px:left-122 overflow-y-scroll`}>
        <div className="w-full flex items-center justify-center flex-col">
          <img
            src={logo}
            alt="logo"
            className="800px:w-[190px] hidden 800px:block w-[150px] cursor-pointer"
            onClick={() => navigate("/")}
          />
          <img
            src={mobileLogo}
            alt="logo"
            className="800px:hidden w-[40px] cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        <button
          className={`${styles.button} ${
            darkTheme ? "bg-[#7997D2] !text-[#0D1526]" : null
          } flex  items-center gap-2 bg-[#406BBF]  w-full !rounded text-[#ECF0F9] py-2 justify-center mt-12`}
          onClick={() => navigate("/user-dashboard")}>
          <BiArrowBack className="font-bold" />
          <p className="text-[1rem] font-semibold 800px:block hidden">
            Task Home
          </p>
        </button>

        <div
          className={`w-full  ${
            darkTheme
              ? "bg-[#264073] !text-[#D9E1F2] !border-[#264073]"
              : "bg-[#C6D3EC] border-[#9FB5DF] "
          } mt-12 `}>
          <button
            className={`${styles.userDashboardBtn} ${
              darkTheme ? "hover:bg-[#3960AC]" : "hover:bg-[#9FB5DF]"
            } ${active === 1 ? "!bg-[#9FB5DF]" : ""}`}
            onClick={() => setActive(1)}>
            <LuLayoutDashboard
              className={`${darkTheme ? "text-[#8CA6D9]" : "text-[#264073] "}`}
            />
            <p className="800px:block hidden">Dashboard</p>
          </button>
          <button
            className={`${styles.userDashboardBtn} ${
              darkTheme ? "hover:bg-[#3960AC]" : "hover:bg-[#9FB5DF]"
            } ${active === 2 ? "!bg-[#9FB5DF]" : ""}`}
            onClick={() => setActive(2)}>
            <FiUsers
              className={`${darkTheme ? "text-[#8CA6D9]" : "text-[#264073]"}`}
            />
            <p className="800px:block hidden">Teams</p>
          </button>
          <button
            className={`${styles.userDashboardBtn} ${
              darkTheme ? "hover:bg-[#3960AC]" : "hover:bg-[#9FB5DF]"
            } ${active === 3 ? "bg-[#9FB5DF]" : ""}`}
            onClick={() => setActive(3)}>
            <RiCheckboxMultipleBlankLine
              className={`${darkTheme ? "text-[#8CA6D9]" : "text-[#264073]"}`}
            />
            <p className="800px:block hidden">Manage Task</p>
          </button>
          <button
            className={`${styles.userDashboardBtn} ${
              darkTheme ? "hover:bg-[#3960AC]" : "hover:bg-[#9FB5DF]"
            } ${active === 4 ? "!bg-[#9FB5DF]" : ""}`}
            onClick={() => setActive(4)}>
            <AiOutlineFundProjectionScreen
              className={`${darkTheme ? "text-[#8CA6D9]" : "text-[#264073]"}`}
            />
            <p className="800px:block hidden">Projects</p>
          </button>
        </div>

        <button
          className={`${
            darkTheme
              ? "hover:bg-[#3960AC] bg-[#264073] text-[#D9E1F2]"
              : "hover:bg-[#9FB5DF]  bg-[#C6D3EC]"
          }  hover:bg-[#9FB5DF] transition duration-300 rounded p-4 mt-12 w-full flex items-center gap-2`}
          onClick={() => navigate("/")}>
          <IoLogOutOutline
            className={`${darkTheme ? "text-[#8CA6D9]" : "text-[#264073]"}`}
          />
          <p className="800px:block hidden">Logout</p>
        </button>
      </aside>
    </>
  );
};

export default Sidebar;
