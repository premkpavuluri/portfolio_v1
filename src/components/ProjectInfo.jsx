import React from "react";
import {
  ProjectDescription,
  ProjectInfoBox,
  ProjectTitle,
  ViewBtn,
  ViewLinks
} from "../styles/PortfolioComponents";

const ProjectInfo = ({title, description, links: {sourceCode, site}}) => {
  return (
    <ProjectInfoBox>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <ViewLinks>
        <ViewBtn href={site} target="_blank">View Site</ViewBtn>
        <ViewBtn href={sourceCode} target="_blank">View Source code</ViewBtn>
      </ViewLinks>
    </ProjectInfoBox>);
}

export default ProjectInfo;