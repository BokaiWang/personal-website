import React, { useEffect, useState } from "react";
import { RiSunLine } from "react-icons/ri";
import { IoMoon } from "react-icons/io5";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex gap-2">
      {darkMode ? <IoMoon /> : <RiSunLine />}
      <div
        className="bg-white flex items-center h-6 w-12 rounded-full cursor-pointer p-1"
        onClick={() => setDarkMode(!darkMode)}
      >
        <span className="h-5 w-5 rounded-full bg-orange-200 dark:bg-stone-600 shadow-md transition-transform dark:translate-x-5 right-3" />
      </div>
    </div>
  );
};

export default ThemeToggle;
