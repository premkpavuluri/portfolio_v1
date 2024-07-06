import React from "react";
import {ProjectContainer, ProjectWallpaper} from "../styles/PortfolioComponents";
import portfolio from "assets/images/portfolio.png";
import ProjectInfo from "./ProjectInfo";

const ProjectCard = ({title, description, img, links}) => {
  return (
    <ProjectContainer>
      <ProjectWallpaper src={portfolio} target="_blank"/>
      <ProjectInfo title={title} description={description} links={links}/>
    </ProjectContainer>)
}

export default ProjectCard;