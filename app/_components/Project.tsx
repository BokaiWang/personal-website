import Image, { StaticImageData } from "next/image";
import React, { FC, Fragment } from "react";
import SkillBadge from "./SkillBadge";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import LinkButtonWithIcon from "./LinkButtonWithIcon";
import { FaSquareGithub } from "react-icons/fa6";

interface Props {
  title: string;
  description: string;
  skills: string[];
  image: StaticImageData;
  remoteRepoUrl: string;
  liveDemoUrl: string;
}

const Project: FC<Props> = ({
  title,
  description,
  skills,
  image,
  remoteRepoUrl,
  liveDemoUrl,
}) => {
  return (
    <section className="group mb-5 flex bg-brand-200 rounded-lg gap-2 shadow-md shadow-brand-300/80 even:flex-row-reverse">
      <div className="flex-1 m-4">
        <h3 className="font-semibold text-xl">{title}</h3>
        <p>{description}</p>
        <div className="flex gap-1 flex-wrap mt-1">
          {skills.map((skill) => (
            <Fragment key={skill}>
              <SkillBadge>{skill}</SkillBadge>
            </Fragment>
          ))}
        </div>
        <div className="mt-3 flex gap-2">
          <LinkButtonWithIcon href={remoteRepoUrl} icon={FaSquareGithub}>
            Code
          </LinkButtonWithIcon>
          <LinkButtonWithIcon
            href={liveDemoUrl}
            icon={FiExternalLink}
            secondary
          >
            Demo
          </LinkButtonWithIcon>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src={image}
          alt="website"
          className="group-odd:rounded-e-lg group-even:rounded-s-lg h-full object-fill"
        />
      </div>
    </section>
  );
};

export default Project;
