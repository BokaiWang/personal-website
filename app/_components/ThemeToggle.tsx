import React, { useContext, useEffect, useState } from "react";
import { RiSunLine } from "react-icons/ri";
import { IoMoon } from "react-icons/io5";
import {  ThemeContext } from "../page";

const ThemeToggle = () => {
  const themeContext = useContext(ThemeContext);
  const isDarkMode = themeContext?.theme === "dark";

  useEffect(() => {
    if (themeContext?.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeContext?.theme]);

  return (
    <div className="flex gap-2 items-center">
      {isDarkMode ? <IoMoon /> : <RiSunLine />}
      <div
        className="bg-brand-100 flex items-center h-6 w-12 rounded-full cursor-pointer p-1"
        onClick={() =>
          themeContext?.setTheme(
            themeContext?.theme === "dark" ? "light" : "dark"
          )
        }
      >
        <span className="h-5 w-5 rounded-full bg-brand-500 dark:bg-stone-600 shadow-md transition-transform dark:translate-x-5 right-3" />
      </div>
    </div>
  );
};

export default ThemeToggle;
