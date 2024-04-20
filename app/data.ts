import GameHub from "@/public/gameHub.png";
import IssueTracker from "@/public/issueTracker.png";
import { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
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

interface Project {
  title: string;
  description: string;
  skills: string[];
  image: StaticImageData;
  remoteRepoUrl: string;
  liveDemoUrl: string;
}

export const projectData: Project[] = [
  {
    title: "Issue Tracker",
    description:
      "This is a full-stack project where users can log in with their google accounts and keep track of issues and they can visualize the statuses of the issues through a bar graph.",
    skills: ["NextJS", "Prisma", "Tailwind", "RadixUI", "recharts"],
    image: IssueTracker,
    remoteRepoUrl: "https://github.com/BokaiWang/issue-tracker",
    liveDemoUrl: "https://issue-tracker-sigma-mauve.vercel.app",
  },
  {
    title: "Game Hub",
    description:
      "The website allows people to search for games. It has features like filtering, sorting, pagination and switching between light/dark mode.",
    skills: [
      "ReactJS",
      "Zustand",
      "react-query",
      "react-router",
      "chakra-ui",
      "Restful API",
    ],
    image: GameHub,
    remoteRepoUrl: "https://github.com/BokaiWang/game-hub",
    liveDemoUrl: "https://game-hub-one-virid.vercel.app/",
  },
] as const;
