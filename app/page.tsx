"use client";

import Navbar from "./_components/Navbar";
import SectionDivider from "./_components/SectionDivider";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import { createContext, Dispatch, SetStateAction, useState } from "react";

type TContext = {
  theme: "dark" | "light";
  setTheme: Dispatch<SetStateAction<"dark" | "light">>;
};

export const ThemeContext = createContext<TContext | undefined>(undefined);

export default function Page() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Navbar />
        <Home />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Contact />
      </ThemeContext.Provider>
    </>
  );
}
