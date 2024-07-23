import { React, useState } from "react";

// react icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";

// styles
import styles from "../../styles/styles";

// link from react router dom
import { Link } from "react-router-dom";

// react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// manually imported components
import Navbar from "../HomePage/Navbar";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [url, setUrl] = useState(null);
  const [bio, setBio] = useState("");

  // get the user email fro localstorage
  const userEmailFromLocalstorage = JSON.parse(localStorage.getItem("email"));

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setUrl(url);
    setAvatar(file);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (email === userEmailFromLocalstorage) {
      toast.error(
        `The "${email}" already registered, Please try to different email!`
      );
    } else {
      toast.success("Your account successfully created, Now login!");

      // local storage data
      localStorage.setItem("email", JSON.stringify(email));
      localStorage.setItem("password", JSON.stringify(password));
      localStorage.setItem("userName", JSON.stringify(userName));
      localStorage.setItem("bio", JSON.stringify(bio));
      localStorage.setItem("PhotoUrl", JSON.stringify(url));
      localStorage.setItem("isAuthenticated", true);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-4 sm:px-6 lg:px-8 dark:bg-[#060B13] max-w-[1200px] mx-auto">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className=" text-center text-3xl font-extrabold text-gray-900 dark:text-[#7997D2]">
            Sign Up
          </h2>
        </div>
        <div className="mt-8 mx-auto w-[90%] 800px:w-[45%]">
          <div className="bg-white dark:bg-[#060B13] dark:border dark:border-[#7997D2] py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6 " onSubmit={handleFormSubmit}>
              <div>
                <label
                  htmlFor="Username"
                  className="block text-sm dark:text-[#D9E1F2]  font-medium text-gray-700">
                  Username
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="Username"
                    autoComplete="Username"
                    required
                    value={userName}
                    placeholder="Username"
                    onChange={(e) => setUserName(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:bg-[#3960AC] dark:border-[#6e93dd] rounded-md shadow-sm placeholder-gray-400 dark:placeholder:text-[#7997D2] focus:outline-none dark:text-[#7997D2]  focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm dark:text-[#D9E1F2]  font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:bg-[#3960AC] dark:border-[#6e93dd] rounded-md shadow-sm placeholder-gray-400 dark:placeholder:text-[#7997D2] focus:outline-none dark:text-[#7997D2]  focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm dark:text-[#D9E1F2]  font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    type={visible ? "text" : "password"}
                    name="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:bg-[#3960AC] dark:border-[#6e93dd] rounded-md shadow-sm placeholder-gray-400 dark:placeholder:text-[#7997D2] focus:outline-none dark:text-[#7997D2]  focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {visible ? (
                    <AiOutlineEye
                      className="absolute dark:text-[#6e93dd] right-2 top-2 cursor-pointer"
                      size={25}
                      onClick={() => setVisible(false)}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className="absolute right-2 dark:text-[#6e93dd] top-2 cursor-pointer"
                      size={25}
                      onClick={() => setVisible(true)}
                    />
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="Bio"
                  className="block text-sm dark:text-[#D9E1F2] font-medium text-gray-700">
                  Bio
                </label>
                <div className="mt-1">
                  <textarea
                    type="text"
                    name="Bio"
                    required
                    value={bio}
                    maxLength={100}
                    placeholder="Write bio"
                    onChange={(e) => setBio(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 dark:bg-[#3960AC] dark:border-[#6e93dd] dark:placeholder:text-[#7997D2] focus:outline-none dark:text-[#7997D2] focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
                </div>
              </div>

              <div className={`${styles.noramlFlex}`}>
                <span className="inline-block h-10 w-10 rounded-full overflow-hidden">
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="avatar"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <RxAvatar className="w-10 h-10 dark:text-[#6e93dd]" />
                  )}
                </span>

                <label
                  htmlFor="file-input"
                  className="ml-5 flex items-center justify-center px-4 py-2 border dark:border-[#6e93dd] dark:bg-[#7997D2] dark:text-[#0D1526] border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <span>Upload file</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileInputChange}
                    className="sr-only"
                  />
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full h-[40px] flex justify-center py-2 px-4 dark:bg-[#7997D2] dark:text-[#0D1526] border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                  Submit
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
              <div
                className={`${styles.noramlFlex} w-full dark:text-[#D9E1F2]`}>
                <h4>Already have an account?</h4>
                <Link
                  to="/login"
                  className="text-blue-600 pl-2 dark:text-[#6689CC]">
                  Sign in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
