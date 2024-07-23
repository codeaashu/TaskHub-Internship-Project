import react from "react";

// librarys
import { BrowserRouter, Routes, Route } from "react-router-dom";

// manually imported components
import HomePage from "./Components/HomePage/HomePage";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Signup/SignUp";
import UserDashboard from "./Components/UserDashboard/Dashboard";
import MainDashboard from "./Components/MainDashboard/MainDashboard";
import AboutUs from "./Components/AboutUs";
import Support from "./Components/Support";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/dashboard" element={<MainDashboard />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
