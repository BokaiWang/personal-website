"use client";

import Navbar from "./_components/Navbar";
import SectionDivider from "./_components/SectionDivider";
import ThemeProvider from "./_components/ThemeProvider";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Home from "./sections/Home";
import Projects from "./sections/Projects";

export default function Page() {
  return (
    <>
      <ThemeProvider>
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
      </ThemeProvider>
    </>
  );
}
