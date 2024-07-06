import React from "react";
import {SectionWrapper, TitleSection} from "../styles/PortfolioComponents";
import {config, sectionLabels} from "../config/Config";
import ProjectCard from "./ProjectCard";

const Projects = ({id}) => {
  const {myProjects} = config;
  const allProjects = myProjects.map(({title, description, img, links}) =>
    <ProjectCard title={title} description={description} img={img} links={links}/>)

  return (<SectionWrapper id={id}>
    <TitleSection>{sectionLabels.PROJECTS}</TitleSection>
    {allProjects}
  </SectionWrapper>);
}

export default Projects;