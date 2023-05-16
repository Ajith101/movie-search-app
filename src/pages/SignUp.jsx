import React from "react";
import { useForms } from "../hooks/useForms";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/context/AuthContext";

const SignUp = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const { handleChange, inputForms } = useForms({
    firstName: "",
    email: "",
    password: "",
  });
  const submitHandler = (event) => {
    event.preventDefault();
    if (
      inputForms.email === "" ||
      inputForms.password === "" ||
      inputForms.firstName === ""
    ) {
      return;
    }
    navigate("/");
    setAuth(true);
    localStorage.setItem("user", JSON.stringify(inputForms));
  };
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center flex-col px-4">
        <form
          className="w-full sm:w-[414px] m-5 dark:bg-black dark:bg-opacity-80 bg-white flex flex-col px-[30px] sm:px-[68px] py-[48px] rounded-[4px]"
          onSubmit={submitHandler}
        >
          <h2 className="text-[32px] font-[700] dark:text-white mb-[31px]">
            Sign Up
          </h2>
          <input
            onChange={handleChange}
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full mb-[16px] outline-none bg-[#333333] rounded-[4px] px-[20px] py-[15px] text-[#8C8C8C] text-[16px]"
          />
          <input
            onChange={handleChange}
            type="text"
            name="email"
            placeholder="Email or phone number"
            className="w-full mb-[16px] outline-none bg-[#333333] rounded-[4px] px-[20px] py-[15px] text-[#8C8C8C] text-[16px]"
          />
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="password"
            className="w-full mb-[16px] outline-none bg-[#333333] rounded-[4px] px-[20px] py-[15px] text-[#8C8C8C] text-[16px]"
          />
          <button
            className="bg-[#E50914] w-full text-white mt-[40px] font-[700] text-[16px] rounded-[4px] text-center py-[16px]"
            type="submit"
          >
            Submit
          </button>

          <h2 className="font-[500] text-[16px] mt-[60px] sm:mt-[132px] text-[#737373]">
            Already have account ?
            <span
              onClick={() => navigate("/login")}
              className="dark:text-white text-black"
            >
              {" "}
              Sign In now.
            </span>
          </h2>
        </form>
      </div>
    </>
  );
};

export default SignUp;
