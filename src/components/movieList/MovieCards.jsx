import React from "react";
import defaultIcon from "../../assets/defaultIcon.jpg";

export const MovieCards = ({ itemes, title }) => {
  //image.tmdb.org/t/p/original${itemes.poster_path}
  https: return (
    <div className={`${title ? "" : "h-[260px]"}`}>
      <img
        className="w-full h-full object-cover overflow-hidden"
        src={`${
          itemes.poster_path === null
            ? defaultIcon
            : `https://image.tmdb.org/t/p/original${itemes.poster_path}`
        }`}
        alt=""
      />
    </div>
  );
};
