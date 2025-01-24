"use client";
import React from "react";
import {
  FaSquareGithub,
  FaLinkedin,
  FaReact,
  FaHtml5,
  FaCss3,
} from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";
import { TbBrandNextjs } from "react-icons/tb";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section id="home" className="mx-auto w-full sm:w-3/5">
      <article className="flex flex-col gap-3">
        <h1 className="text-6xl">Hey there,</h1>
        <p className="text-5xl">
          {`I'm `}
          <TypeAnimation
            sequence={["a Web Developer", 500, "Bo-Kai Wang", 500]}
            cursor={true}
            repeat={Infinity}
          />
        </p>
        <p className="text-3xl leading-loose">
          {`I'm a frontend developer specializing in React and fueled by a passion
          for turning lines of code into captivating user experiences. I enjoy
          building websites and web apps.`}
        </p>
        <div className="flex gap-6 flex-wrap">
          <div className="flex items-center justify-start gap-3">
            <p className="text-xl whitespace-nowrap">Tech Stack:</p>
            <div title="React.js">
              <FaReact className="w-7 h-7" />
            </div>
            <div title="Next.js">
              <TbBrandNextjs className="w-7 h-7" />
            </div>
            <div title="HTML">
              <FaHtml5 className="w-7 h-7" />
            </div>
            <div title="CSS">
              <FaCss3 className="w-7 h-7" />
            </div>
          </div>
          <div className="flex items-center justify-start gap-3">
            <p className="text-xl whitespace-nowrap">Social Media:</p>
            <a
              href="https://github.com/BokaiWang"
              target="_blank"
              className="transition-transform hover:scale-110"
            >
              <FaSquareGithub className="w-7 h-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/bo-kai-wang-132257142/"
              target="_blank"
              className="transition-transform hover:scale-110"
            >
              <FaLinkedin className="w-7 h-7" />
            </a>
          </div>
          <div>
            <a
              className="group transition-transform hover:scale-105 rounded-full py-1 px-3 cursor-pointer flex items-center gap-1 bg-brand-500 dark:bg-brand-800 dark:text-snow-500"
              href="MyResume.pdf"
              download={`Bo-Kai's Resume`}
            >
              Resume{" "}
              <HiDownload className="opacity-70 group-hover:translate-y-1 transition-transform dark:text-snow-500" />
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Home;
