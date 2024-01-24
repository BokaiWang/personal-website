import React from "react";
import { ReactNode } from "react";
import { MdWork } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";

interface Experience {
  duration: string;
  jobTitle: string;
  location: string;
  company: string;
  description: string;
  icon: ReactNode;
  mainSkills?: string[];
}
export const experienceData: Experience[] = [
  {
    duration: "Feb, 2022 -> Present",
    jobTitle: "Junior Frontend Developer",
    location: "Toronto, ON",
    company: "Springdel",
    description:
      "Springdel provides mobile devices management solution for users to manage their mobile devices. I am currently working as a frontend developer, creating UI based on mockups using ReactJS, ReduxJS, JavaScript, and TypeScript. I am open to full-time and freelance opportunities.",
    icon: React.createElement(MdWork),
    mainSkills: ["ReactJS", "ReduxJS", "JavaScript", "TypeScript"],
  },
  {
    duration: "Sept, 2021 -> Feb, 2022",
    jobTitle: "Web Developer",
    location: "Missisauga, ON",
    company: "Liohan",
    description:
      "LIOHAN provides a lot of incredible and entertaining activities that parents and children can bond over. I worked as a web developer using Bubble.io to create the web app. I started as an intern and then transitioned to a contractor.",
    icon: React.createElement(MdWork),
    mainSkills: ["Bubble.io"],
  },
  {
    duration: "May, 2021 -> Aug, 2021",
    jobTitle: "Developer Intern",
    location: "Toronto, ON",
    company: "Tenatch",
    description: `TENATCH is a retail solutions startup based in Toronto, aiming to solve the affordability crisis of small businesses. This was my first coding job, and I worked alone to maintain and add features to a program called COBWEB using Java and Swing. If you are curious, feel free to check it out at <a href='https://www.cobweb.ca/about' target="_blank">https://www.cobweb.ca/about</a>`,
    icon: React.createElement(MdWork),
    mainSkills: ["Java", "Swing"],
  },
  {
    duration: "Sept, 2020 -> Dec, 2021",
    jobTitle: "Student",
    location: "Toronto, ON",
    company: "Cambrian College",
    description:
      "I graduated after a year and a half of studying. I was one of the few students who were able to land an internship job.",
    icon: React.createElement(RiGraduationCapFill),
  },
  {
    duration: "Jul, 2013 -> Jan, 2016",
    jobTitle: "M.S.",
    location: "Taipei, Taiwan",
    company: "National Taiwan University",
    description:
      "In my pursuit of a biochemistry degree, I researched metabolic syndrome, focusing on bitter melon extract's role in alleviating obesity.",
    icon: React.createElement(RiGraduationCapFill),
  },
];
