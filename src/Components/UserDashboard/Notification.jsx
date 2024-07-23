import React from "react";

// avatar image
import avatar from "../../assets/avatar.png";
import { toast } from "react-toastify";

const Notification = () => {
  // get the user name and image from local storage
  const username = JSON.parse(localStorage.getItem("userName"));
  const photUrl = JSON.parse(localStorage.getItem("PhotoUrl"));

  //  get todos from local storage
  const todos = JSON.parse(localStorage.getItem("todo"));

  // get dark or light from localstorage
  const darkTheme = JSON.parse(localStorage.getItem("theme"));

  return (
    <div className="p-2 800px:p-6 w-full 800px:w-[85%] mx-auto">
      <h3
        className={`${
          darkTheme ? "text-[#7997d2]" : "text-[#132039]"
        } font-bold text-[#132039] text-2xl mb-6`}>
        Notifications
      </h3>

      {todos ? (
        <>
          {todos?.map((todo) => (
            <div
              className={`w-full rounded mt-4 800px:p-4 p-2 flex items-center gap-4 800px:gap-8 ${
                darkTheme ? "bg-[#0D1526]" : "bg-[#D9E1F2] "
              }`}>
              <img
                src={photUrl ? photUrl : avatar}
                alt="avatar/image"
                className="800px:w-[60px] 800px:h-[60px] w-[40px] h-[40px] rounded-full border border-[#406BBF] "
              />
              <div className={`${darkTheme ? "text-[#D9E1F2]" : ""}`}>
                <h3
                  className={`${
                    darkTheme ? "text-[#D9E1F2]" : "text-[#132039]"
                  } `}>
                  <span>{username}</span> <b>Created</b> a task
                </h3>
                <p>4 min ago</p>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="flex items-center justify-center w-full">
          <h4 className="font-semibold">No notification yet!</h4>
        </div>
      )}
    </div>
  );
};

export default Notification;
