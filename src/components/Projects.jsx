import React from "react";
import {SectionWrapper, TitleSection} from "../styles/PortfolioComponents";
import {config, sectionLabels} from "../config/Config";
import ProjectCard from "./ProjectCard";

const Projects = ({id}) => {
  const {myProjects} = config;
  const allProjects = myProjects.map(({title, description, imgName, links}, index) =>
    <ProjectCard
      key={index}
      title={title}
      description={description}
      img={imgName}
      links={links}
    />);

  return (<SectionWrapper id={id}>
    <TitleSection>{sectionLabels.PROJECTS}</TitleSection>
    {allProjects}
  </SectionWrapper>);
}

export default Projects;