import React from "react";
import SectionHeader from "../_components/SectionHeader";

const About = () => {
  return (
    <section id="about" className="scroll-m-20 mx-auto w-full sm:w-3/5">
      <SectionHeader>About</SectionHeader>
      <p className="text-2xl leading-loose">
        After graduating with a{" "}
        <span className="font-bold italic dark:text-slate-300">biology</span>{" "}
        degree and working for a few years in the related industry, I decided to
        change my career path from biology research to the dynamic realm of
        coding. I went to a college in Toronto, where I learned{" "}
        <span className="font-bold italic dark:text-slate-300">
          frontend skills
        </span>{" "}
        and some{" "}
        <span className="font-bold italic dark:text-slate-300">
          backend skills
        </span>
        . However, school alone did not satiate my curiosity. My passion lies in
        turning concepts into reality through the art of programming. This
        website serves as a dedicated showcase for my coding projects. From{" "}
        <span className="font-bold italic dark:text-slate-300">React.js</span>{" "}
        and <span className="font-bold italic dark:text-slate-300">HTML</span>{" "}
        to <span className="font-bold italic dark:text-slate-300">CSS</span> and
        beyond, each project reflects my commitment to craftsmanship and
        innovation. Whether you're here to explore my coding experiences or
        seeking inspiration for your own projects, I invite you to delve in and
        connect. Feel free to reach out if you're as passionate about coding as
        I am. Let's share ideas, insights, and perhaps collaborate on the next
        big thing in the coding world!
      </p>
    </section>
  );
};

export default About;
