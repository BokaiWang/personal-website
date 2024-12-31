import React, { useContext } from "react";
import { ThemeContext } from "../_components/ThemeProvider";

const useThemeContext = () => {
  return useContext(ThemeContext);
};

export default useThemeContext;
