import React from "react";
import {
  ProjectDescription,
  ProjectInfoBox,
  ProjectTitle,
  ViewBtn,
  ViewLinks
} from "../styles/PortfolioComponents";

const ProjectInfo = ({title, description, links: {sourceCode, site}}) => {
  const target = site === "" ? "_self" : "_blank";

  return (
    <ProjectInfoBox>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <ViewLinks>
        <ViewBtn href={site} target={target}>View Site</ViewBtn>
        <ViewBtn href={sourceCode} target="_blank">View Source code</ViewBtn>
      </ViewLinks>
    </ProjectInfoBox>);
}

export default ProjectInfo;