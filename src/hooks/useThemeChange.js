import { useEffect, useState } from "react";

export const useThemeChange = () => {
  const localTheme = () => {
    const getLocalStorageTheme = localStorage.getItem("theme");
    if (getLocalStorageTheme) {
      return getLocalStorageTheme;
    }
    return "light";
  };

  const [theme, setTheme] = useState(localTheme());

  const handleThemeChange = () => {
    setTheme((pre) => (pre === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [theme]);

  return {
    handleThemeChange,
    theme,
    setTheme,
  };
};
