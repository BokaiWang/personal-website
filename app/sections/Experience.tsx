"use client";

import React, { Fragment } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import parse from "html-react-parser";
import SectionHeader from "../_components/SectionHeader";
import { experienceData } from "../data";
import SkillBadge from "../_components/SkillBadge";

const Experience = () => {
  return (
    <section id="experience" className="scroll-m-20 mx-auto w-full sm:w-4/5">
      <SectionHeader>Experience</SectionHeader>
      <VerticalTimeline lineColor="">
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
                  background: "#FFCCA9",
                  boxShadow: "3px 3px 5px #FDB07B",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight: "0.6rem solid #FFCCA9",
                }}
                iconClassName="bg-brand-100 text-brand-900"
                icon={Icon}
                visible={true}
              >
                <div className="flex gap-1 flex-wrap">
                  {mainSkills?.map((skill) => (
                    <SkillBadge>{skill}</SkillBadge>
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
