import React, { useEffect, useState } from "react";

const Testing = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme((pre) => (pre === "light" ? "dark" : "light"));
  };

  return (
    <div className="bg-white h-screen flex justify-center items-center dark:bg-black">
      <button
        onClick={handleTheme}
        className="bg-red-500 text-white px-5 py-2 rounded-md"
      >
        Click Me
      </button>
    </div>
  );
};

export default Testing;
