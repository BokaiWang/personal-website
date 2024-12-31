"use client";

import React, { Fragment, useContext } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import parse from "html-react-parser";
import SectionHeader from "../_components/SectionHeader";
import { experienceData } from "../data";
import SkillBadge from "../_components/SkillBadge";
import useThemeContext from "../hooks/useThemeContext";

const Experience = () => {
  const themeContext = useThemeContext();
  const isDarkMode = themeContext?.theme === "dark";

  return (
    <section id="experience" className="scroll-m-20 mx-auto w-full sm:w-4/5">
      <SectionHeader>Experience</SectionHeader>
      <VerticalTimeline lineColor={isDarkMode ? "#2D2D2D" : ""}>
        {experienceData.map(
          (
            {
              duration,
              jobTitle,
              location,
              description,
              company,
              icon: Icon,
              mainSkills,
            },
            index
          ) => (
            <Fragment key={index}>
              <VerticalTimelineElement
                date={duration}
                contentStyle={{
                  background: isDarkMode ? "#2D2D2D" : "#FFCCA9",
                  boxShadow: isDarkMode
                    ? "3px 3px 5px #121212"
                    : "3px 3px 5px #FDB07B",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight: isDarkMode
                    ? "0.6rem solid #2D2D2D"
                    : "0.6rem solid #FFCCA9",
                }}
                iconClassName="bg-brand-100 text-brand-900 dark:bg-darkMode-800 dark:text-brand-700"
                icon={Icon}
                visible={true}
              >
                <div className="flex gap-1 flex-wrap">
                  {mainSkills?.map((skill) => (
                    <SkillBadge key={skill}>{skill}</SkillBadge>
                  ))}
                </div>
                <h3 className="font-semibold capitalize">
                  {jobTitle} @{company}
                </h3>
                <p className="!font-normal !mt-0">{location}</p>
                <p className="!font-normal !mt-0">{parse(description)}</p>
              </VerticalTimelineElement>
            </Fragment>
          )
        )}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
