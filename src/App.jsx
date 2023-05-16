import React from "react";
import { Search } from "./components/search/Search";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { AuthContext } from "./components/context/AuthContext";
import ProtectedRoutes, {
  ProtectesRoutForLogin,
} from "./components/ProtectedRoutes";
import { ThemeContext } from "./components/context/ThemeContext";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import { HeaderFooter } from "./components/header-footer/HeaderFooter";

const App = () => {
  return (
    <>
      <AuthContext>
        <ThemeContext>
          <HeaderFooter>
            <Routes>
              <Route element={<ProtectesRoutForLogin />}>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
              </Route>
              <Route element={<ProtectedRoutes />}>
                <Route path="/" element={<Search />} />
              </Route>
            </Routes>
          </HeaderFooter>
        </ThemeContext>
      </AuthContext>
    </>
  );
};

export default App;
