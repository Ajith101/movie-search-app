import React from "react";
import { Search } from "./components/search/Search";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { AuthContext } from "./components/context/AuthContext";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Testing from "./pages/Testing";
import { ThemeContext } from "./components/context/ThemeContext";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";

const App = () => {
  return (
    <>
      <AuthContext>
        <ThemeContext>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/testing" element={<Testing />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<Search />} />
            </Route>
          </Routes>
        </ThemeContext>
      </AuthContext>
    </>
  );
};

export default App;
