import React, { useEffect, useState } from "react";
import { SearchInput } from "./SearchInput";
import { MovieCards } from "../movieList/MovieCards";
import { useFetch } from "../../hooks/useFetch";
import { HeaderFooter } from "../header-footer/HeaderFooter";
import { useAuth } from "../context/AuthContext";

export const Search = () => {
  const { auth } = useAuth();

  const { inputHandler, searchResults, inputValues } = useFetch(
    "https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=1&include_adult=false",
    "marvel"
  );

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <HeaderFooter>
        <SearchInput
          inputValues={inputValues}
          inputHandler={inputHandler}
          submitHandler={submitHandler}
        />
        <div className="flex justify-center items-center py-[36px]">
          <div className="md:px-[90px] md:py-[52px] mx-[20px] gap-x-[20px] gap-y-[20px] sm:grid-cols-3 grid-cols-2 grid md:grid-cols-4 lg:grid-cols-5 md:gap-y-[60px] md:gap-x-[50px] mt-[35px]">
            {searchResults?.map((itemes, id) => {
              if (id < 15) {
                return <MovieCards itemes={itemes} key={itemes.id} />;
              }
            })}
          </div>
        </div>
      </HeaderFooter>
    </>
  );
};
