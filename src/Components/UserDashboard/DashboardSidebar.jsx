import React, { useState } from "react";

// avatar image
import avatar from "../../assets/avatar.png";

// react icons
import { AiOutlinePlus } from "react-icons/ai";
import { BiHomeAlt2 } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline, IoLogOutOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { LuLayoutDashboard } from "react-icons/lu";

// styles
import styles from "../../styles/styles";
import CreateTask from "./CreateTask";
import DashboardContent from "./DashboardContent";
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";

const DashboardSidebar = ({ setActive, active }) => {
  const [createTask, setCreateTask] = useState(false);

  // use navigate
  const navigate = useNavigate();

  // get dark or light from localstorage
  const darkTheme = JSON.parse(localStorage.getItem("theme"));

  // getting user information from local storage
  const username = JSON.parse(localStorage.getItem("userName"));
  const bio = JSON.parse(localStorage.getItem("bio"));
  const PhotoUrl = JSON.parse(localStorage.getItem("PhotoUrl"));

  return (
    <>
      <aside
        className={`w-[60px] 800px:w-[280px] ${
          darkTheme ? "bg-[#0D1526]" : "bg-[#D9E1F2]"
        } 800px:p-8 p-2 800px:py-4 py-8 min-h-[100vh] fixed top-0 left-0 1100px:left-18 1300px:left-24 overflow-y-scroll`}>
        <div className="w-full flex items-center justify-center flex-col">
          <img
            src={PhotoUrl ? PhotoUrl : avatar}
            alt="avatar/image"
            className="800px:w-[80px] w-[40px] h-[40px] border border-[#406BBF] 800px:h-[80px] rounded-full bg-cover bg-no-repeat"
          />
          <h3
            className={`text-[#406BBF] font-bold text-2xl mt-2 ${
              darkTheme ? "text-[#7997D2]" : ""
            } 800px:block hidden`}>
            {username}
          </h3>
          <p
            className={`text-[#406BBF]  mt-1 text-justify ${
              darkTheme ? "text-[#7997D2]" : ""
            } 800px:block hidden`}>
            {bio}
          </p>
        </div>

        <button
          className={`${styles.button} ${
            darkTheme ? "bg-[#7997D2] !text-[#0D1526]" : null
          } flex  items-center gap-2 bg-[#406BBF]  w-full !rounded text-[#ECF0F9] py-2 justify-center mt-12`}
          onClick={() => setCreateTask(true)}>
          <p className="text-[1rem] font-semibold 800px:block hidden">
            Create Task
          </p>
          <AiOutlinePlus className="font-bold" />
        </button>

        <button
          className={`${styles.button} ${
            darkTheme ? "bg-[#7997D2] !text-[#0D1526]" : null
          } flex  items-center gap-2 bg-[#406BBF]  w-full !rounded text-[#ECF0F9] py-2 justify-center`}
          onClick={() => navigate("/dashboard")}>
          <p className="text-[1rem] font-semibold 800px:block hidden">
            Go Dashboard
          </p>
          <LuLayoutDashboard className="font-bold" />
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
            <BiHomeAlt2
              className={`${darkTheme ? "text-[#8CA6D9]" : "text-[#264073] "}`}
            />
            <p className="800px:block hidden">Home</p>
          </button>
          <button
            className={`${styles.userDashboardBtn} ${
              darkTheme ? "hover:bg-[#3960AC]" : "hover:bg-[#9FB5DF]"
            } ${active === 2 ? "!bg-[#9FB5DF]" : ""}`}
            onClick={() => setActive(2)}>
            <CiSearch
              className={`${darkTheme ? "text-[#8CA6D9]" : "text-[#264073]"}`}
            />
            <p className="800px:block hidden">Search</p>
          </button>
          <button
            className={`${styles.userDashboardBtn} ${
              darkTheme ? "hover:bg-[#3960AC]" : "hover:bg-[#9FB5DF]"
            } ${active === 3 ? "bg-[#9FB5DF]" : ""}`}
            onClick={() => setActive(3)}>
            <IoNotificationsOutline
              className={`${darkTheme ? "text-[#8CA6D9]" : "text-[#264073]"}`}
            />
            <p className="800px:block hidden">Notification</p>
          </button>
          <button
            className={`${styles.userDashboardBtn} ${
              darkTheme ? "hover:bg-[#3960AC]" : "hover:bg-[#9FB5DF]"
            } ${active === 4 ? "!bg-[#9FB5DF]" : ""}`}
            onClick={() => setActive(4)}>
            <RxAvatar
              className={`${darkTheme ? "text-[#8CA6D9]" : "text-[#264073]"}`}
            />
            <p className="800px:block hidden">Account</p>
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
      {createTask && <CreateTask setCreateTask={setCreateTask} />}
    </>
  );
};

export default DashboardSidebar;
