import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../HomePage/Navbar";

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // local storage data
    const getUsernameFromLocalStorage = JSON.parse(
      localStorage.getItem("userName")
    );
    const getPasswordFromLocalStorage = JSON.parse(
      localStorage.getItem("password")
    );

    if (
      userName === getUsernameFromLocalStorage &&
      password === getPasswordFromLocalStorage
    ) {
      toast.success("login success");
      navigate("/user-dashboard");
    } else {
      toast.error("Please provide the correct information");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-[100vh] dark:bg-[#060B13] bg-gray-50 flex flex-col  py-6 sm:px-6 lg:px-8">
        <div className="sm:mx-auto mt-6 sm:w-full sm:max-w-md">
          <h2 className=" text-center dark:text-[#7997D2] text-3xl font-extrabold text-gray-900">
            Login
          </h2>
        </div>
        <div className="mt-8 mx-auto w-[90%] 800px:w-[45%]">
          <div className="bg-white dark:bg-[#060B13] dark:border dark:border-[#7997D2] py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleOnSubmit}>
              <div>
                <label
                  htmlFor="Username"
                  className="block text-sm dark:text-[#D9E1F2] font-medium text-gray-700">
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
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 dark:bg-[#3960AC] dark:border-[#829ed6] dark:placeholder:text-[#7997D2] focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 dark:bg-[#3960AC] dark:border-[#829ed6] dark:placeholder:text-[#7997D2] dark:text-[#7997D2] focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {visible ? (
                    <AiOutlineEye
                      className="absolute dark:text-[#6e93dd] right-2 top-2 cursor-pointer"
                      size={25}
                      onClick={() => setVisible(false)}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className="absolute dark:text-[#6e93dd] right-2 top-2 cursor-pointer"
                      size={25}
                      onClick={() => setVisible(true)}
                    />
                  )}
                </div>
              </div>
              <div className={`${styles.noramlFlex} justify-between`}>
                <div className={`${styles.noramlFlex}`}>
                  <input
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm dark:text-[#D9E1F2]  text-gray-900">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-blue-600 hover:text-blue-500 dark:text-[#6689CC]">
                    Forgot your password?
                  </p>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full h-[40px] flex justify-center  py-2 px-4 dark:bg-[#7997D2] dark:text-[#0D1526] border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                  Submit
                </button>
              </div>
              <div
                className={`${styles.noramlFlex} w-full dark:text-[#D9E1F2] `}>
                <h4>Not have any account?</h4>
                <Link
                  to="/sign_up"
                  className="text-blue-600 pl-2 dark:text-[#6689CC]">
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>

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
    </>
  );
};

export default Login;
