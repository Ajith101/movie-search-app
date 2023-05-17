import React, { useEffect, useState } from "react";
import titleLogo from "../../assets/icon-park-solid_movie.png";
import { HiOutlineUserCircle } from "react-icons/hi";
import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import { TiSocialInstagram, TiArrowSortedDown } from "react-icons/ti";
import { BsTwitter } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { BsMoonStarsFill } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";
import webIcon from "../../assets/icon-park-outline_earth.png";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useChangeTheme } from "../context/ThemeContext";
import { useThemeChange } from "../../hooks/useThemeChange";

export const HeaderFooter = ({ children }) => {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const { hieght, width } = useWindowSize();
  const [darkMode, setDarkMode] = useState(false);
  const dayNightHandler = () => {
    setDarkMode((pre) => (pre = !pre));
  };

  // toogle night mode
  const { theme, handleThemeChange } = useThemeChange();

  const logOutHandler = () => {
    setAuth(false);
    navigate("/login");
    localStorage.removeItem("user");
  };

  return (
    <>
      <div className="bg-one">
        <div className="dark:bg-black bg-white dark:bg-opacity-80 bg-opacity-80">
          <div className="flex text-blue-300 justify-between items-center sm:pl-[23px] sm:pr-[74px] px-[10px] sm:px-[20px] py-[31px]">
            <div
              onClick={() => navigate("/")}
              className="flex items-center gap-[10px] cursor-pointer"
            >
              <img src={titleLogo} alt="" />
              <h2 className="md:text-[32px] text-[28px] font-[800] text-[#D62D30]">
                Movie App
              </h2>
            </div>
            {/* {width < 769 && !auth && (
              <div
                onClick={() => navigate("/login")}
                className="flex gap-[10px] items-center"
              >
                <button className="bg-[rgb(229,9,20)] text-white text-[16px] px-[16px] py-[4px] rounded-[4px] font-[500]">
                  Sign In
                </button>
              </div>
            )} */}
            <div className="flex gap-[10px] items-center">
              <button
                onClick={handleThemeChange}
                className="bg-[#fff] cursor-pointer text-black text-[16px] p-[15px] rounded-[20px] font-[700]"
              >
                {theme === "light" ? <FiSun /> : <BsMoonStarsFill />}
              </button>
              {auth && (
                <button
                  onClick={() => logOutHandler()}
                  className={`${
                    width < 769
                      ? "bg-white cursor-pointer rounded-full w-[40px] h-[40px] p-[5px] flex justify-center items-center"
                      : "bg-[#fff] cursor-pointer flex gap-[14px] items-center text-black text-[16px] p-[15px] rounded-[20px] font-[700]"
                  }`}
                >
                  {width < 769 ? (
                    <IoMdLogOut
                      size={"21px"}
                      className="text-red-600 hover:bg-opacity-80"
                    />
                  ) : (
                    <>
                      Logout <HiOutlineUserCircle size={"25px"} />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
          {children}
          <div className="w-full bg-white dark:bg-[#000000] pb-[72px] px-[20px] md:px-0 pt-[29px] justify-start md:justify-center flex flex-col md:flex-row items-start md:items-center text-[#757575]">
            <div className="flex flex-col gap-4 md:mr-[14px] lg:mr-[28px]">
              <h2>Questions? Call 1-844-505-2993</h2>
              <h2>FAQ</h2>
              <h2>Cookie Preferences</h2>
              <div>
                <button className="dark:bg-[#000000] bg-white flex gap-[20px] items-center border-[1px] border-[#333333] p-[15px] text-center">
                  <img src={webIcon} alt="" /> English <TiArrowSortedDown />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:mr-[62px] lg:mr-[124px]">
              <h2>Help Center</h2>
              <h2>Corporate Information</h2>
            </div>
            <div className="flex flex-col gap-4  md:mr-[91px] lg:mr-[183px]">
              <h2>Terms of Use</h2>
              <h2>Privacy</h2>
            </div>
            <div className="flex gap-4 items-center">
              <AiFillFacebook size={"24px"} className="text-[#808080]" />
              <TiSocialInstagram size={"24px"} className="text-[#808080]" />
              <BsTwitter size={"24px"} className="text-[#808080]" />
              <AiFillYoutube size={"24px"} className="text-[#808080]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
