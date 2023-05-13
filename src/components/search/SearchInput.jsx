import React from "react";
import { GoSearch } from "react-icons/go";

export const SearchInput = ({ submitHandler, inputHandler, inputValues }) => {
  return (
    <div className="flex justify-center items-center w-full">
      <form
        onSubmit={submitHandler}
        className="w-[90%] lg:w-[846px] py-[16px] rounded-[20px] px-[18px] gap-[13px] flex bg-white items-center"
      >
        <GoSearch size={"18px"} />
        <input
          value={inputValues}
          onChange={inputHandler}
          className="outline-none w-full"
          type="text"
          placeholder="Search Movies Here fgfdhfdhf"
        />
      </form>
    </div>
  );
};
