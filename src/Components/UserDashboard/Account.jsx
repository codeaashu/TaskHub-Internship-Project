import React, { useState } from "react";

// style
import styles from "../../styles/styles";

// react icons
import {
  AiOutlineCamera,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";

// react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// react router dom
import { Link } from "react-router-dom";

// avatar image
import avatar from "../../assets/avatar.png";

const Account = () => {
  // get the user info from localstorage
  const username = JSON.parse(localStorage.getItem("userName"));
  const profileImg = JSON.parse(localStorage.getItem("PhotoUrl"));
  const userbio = JSON.parse(localStorage.getItem("bio"));
  const Email = JSON.parse(localStorage.getItem("email"));
  const userPassword = JSON.parse(localStorage.getItem("password"));

  // all states
  const [email, setEmail] = useState(Email ? Email : "");
  const [userName, setUserName] = useState(username ? username : "");
  const [password, setPassword] = useState(userPassword ? userPassword : "");
  const [visible, setVisible] = useState(false);
  const [photoUrl, setPhotoUrl] = useState(null);
  const [bio, setBio] = useState(userbio ? userbio : "");

  // const handleFileInputChange = (e) => {
  //   const file = e.target.files[0];
  //   const url = URL.createObjectURL(file);
  //   setUrl(url);
  //   setAvatar(file);
  // };

  // handleImageChange
  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setPhotoUrl(url);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // local storage data
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("password", JSON.stringify(password));
    localStorage.setItem("userName", JSON.stringify(userName));
    localStorage.setItem("bio", JSON.stringify(bio));
    localStorage.setItem("PhotoUrl", JSON.stringify(photoUrl));
    localStorage.setItem("isAuthenticated", true);
    toast.success("Your information successfully updated!");
  };

  // get dark or light from localstorage
  const darkTheme = JSON.parse(localStorage.getItem("theme"));

  return (
    <div className={`${darkTheme ? "bg-[#060B13]" : ""} p-2 800px:p-8 mx-auto`}>
      <form className="space-y-6 p-0 800px:p-6" onSubmit={handleFormSubmit}>
        <div className="w-full flex items-center justify-center">
          <div className="relative h-[110px] 800px:h-[150px]">
            <img
              src={photoUrl ? photoUrl : profileImg ? profileImg : avatar}
              alt="profile/image"
              className="800px:w-[150px] w-[100px] h-[100px] 800px:h-[150px] object-cover rounded-full border-[3px] border-[#3957db]"
            />

            <div
              className={`absolute w-[30px] h-[30px] bg-[#e3e9ee] bottom-[5px] rounded-full flex items-center justify-center right-[5px] cursor-pointer ${
                darkTheme ? " !bg-[#3960AC]" : ""
              }`}>
              <input
                type="file"
                id="profile/image"
                className="hidden"
                onChange={handleImageChange}
              />

              <label htmlFor="profile/image">
                <AiOutlineCamera
                  className={`cursor-pointer ${
                    darkTheme ? " !text-[#D9E1F2]" : ""
                  }`}
                />
              </label>
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="Username"
            className={`block text-sm font-medium text-gray-700 ${
              darkTheme ? " !text-[#D9E1F2]" : ""
            }`}>
            Username
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="Username"
              autoComplete="Username"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                darkTheme ? "bg-[#3960AC] text-[#D9E1F2]" : ""
              }`}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className={`block text-sm font-medium text-gray-700 ${
              darkTheme ? " !text-[#D9E1F2]" : ""
            }`}>
            Email address
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                darkTheme ? "bg-[#3960AC] text-[#D9E1F2]" : ""
              }`}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="password"
            className={`block text-sm font-medium text-gray-700 ${
              darkTheme ? " !text-[#D9E1F2]" : ""
            }`}>
            Password
          </label>
          <div className="mt-1 relative">
            <input
              type={visible ? "text" : "password"}
              name="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                darkTheme ? "bg-[#3960AC] text-[#D9E1F2]" : ""
              }`}
            />
            {visible ? (
              <AiOutlineEye
                className="absolute right-2 top-2 cursor-pointer"
                size={25}
                onClick={() => setVisible(false)}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="absolute right-2 top-2 cursor-pointer"
                size={25}
                onClick={() => setVisible(true)}
              />
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="Bio"
            className={`block text-sm font-medium text-gray-700 ${
              darkTheme ? " !text-[#D9E1F2]" : ""
            }`}>
            Bio
          </label>
          <div className="mt-1">
            <textarea
              type="text"
              name="Bio"
              required
              value={bio}
              maxLength={100}
              onChange={(e) => setBio(e.target.value)}
              className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                darkTheme ? "bg-[#3960AC] text-[#D9E1F2]" : ""
              }`}></textarea>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className={`group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 ${
              darkTheme ? "!bg-[#7997D2] !text-[#0D1526]" : ""
            }`}>
            Update
          </button>

          {/* toast message */}
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="light"
          />
        </div>
      </form>
    </div>
  );
};

export default Account;
