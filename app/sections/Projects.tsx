import React, { Fragment } from "react";
import SectionHeader from "../_components/SectionHeader";
import Project from "../_components/Project";
import { projectData } from "../data";

const Projects = () => {
  return (
    <section id="projects" className="scroll-m-20 mx-auto w-full sm:w-3/5">
      <SectionHeader>Projects</SectionHeader>
      <div>
        {projectData.map((project, index) => (
          <Fragment key={index}>
            <Project {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
