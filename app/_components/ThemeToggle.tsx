import React, { useContext, useEffect, useState } from "react";
import { RiSunLine } from "react-icons/ri";
import { IoMoon } from "react-icons/io5";
import useThemeContext from "../hooks/useThemeContext";
import { ThemeContextType } from "./ThemeProvider";

const ThemeToggle = () => {
  const { theme, setTheme } = useThemeContext() as ThemeContextType;
  const isDarkMode = theme === "dark";

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex gap-2 items-center">
      {isDarkMode ? <IoMoon /> : <RiSunLine />}
      <div
        className="bg-brand-100 flex items-center h-6 w-12 rounded-full cursor-pointer p-1"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <span className="h-5 w-5 rounded-full bg-brand-500 dark:bg-stone-600 shadow-md transition-transform dark:translate-x-5 right-3" />
      </div>
    </div>
  );
};

export default ThemeToggle;
