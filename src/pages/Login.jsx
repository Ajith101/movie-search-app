import React, { useContext, useState } from "react";
import { HeaderFooter } from "../components/header-footer/HeaderFooter";
import { useNavigate } from "react-router-dom";
import { AuthData, useAuth } from "../components/context/AuthContext";
import { useChangeTheme } from "../components/context/ThemeContext";

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const [inputForms, setInpuForms] = useState({ email: "", password: "" });
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInpuForms((pre) => ({ ...pre, [name]: value }));
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (inputForms.email === "" || inputForms.password === "") {
      return;
    }
    navigate("/");
    setAuth(true);
  };

  return (
    <>
      <HeaderFooter>
        <div className="dark:text-white text-black flex justify-center items-center min-h-[100vh] h-full">
          <div className="dark:bg-black bg-white dar:bg-opacity-90 bg-opacity-90 sm:px-[68px] pt-[48px] pb-[31px]">
            <h2 className="text-[32px] font-[700] mb-[31px]">Sign In</h2>
            <form onSubmit={submitHandler} className="flex flex-col w-full">
              <input
                onChange={inputHandler}
                type="text"
                name="email"
                placeholder="Email or phone number"
                className="sm:w-[314px] w-[95%] mb-[16px] outline-none bg-[#333333] rounded-[4px] px-[20px] py-[15px] text-[#8C8C8C] text-[16px]"
              />
              <input
                onChange={inputHandler}
                type="password"
                name="password"
                placeholder="Password"
                className="sm:w-[314px] w-[95%] outline-none bg-[#333333] rounded-[4px] px-[20px] py-[15px] text-[#8C8C8C] text-[16px]"
              />

              <button
                className="bg-[#E50914] text-white mt-[40px] font-[700] text-[16px] rounded-[4px] text-center py-[16px]"
                type="submit"
              >
                Sign In
              </button>
              <h3 className="text-[13px] text-[#B3B3B3] text-right font-[500] mt-[14px]">
                Forgot Password ?
              </h3>
              <h2 className="font-[500] text-[16px] mt-[60px] sm:mt-[132px] text-[#737373]">
                New to Movies Media?
                <span className="text-white"> Sign up now.</span>
              </h2>
            </form>
          </div>
        </div>
      </HeaderFooter>
    </>
  );
};

export default Login;
