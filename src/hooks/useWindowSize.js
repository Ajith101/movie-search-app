import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    hieght: undefined,
  });

  const handleResize = () => {
    setWindowSize({ width: window.innerWidth, hieght: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};
