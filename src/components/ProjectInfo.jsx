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
  const descLines = description
    .split('\n')
    .map((line, index) => <p key={index} style={{whiteSpace: 'pre-wrap'}}>{line}</p>);

  return (
    <ProjectInfoBox>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{descLines}</ProjectDescription>
      <ViewLinks>
        <ViewBtn href={site} target={target}>View Site</ViewBtn>
        <ViewBtn href={sourceCode} target="_blank">View Code</ViewBtn>
      </ViewLinks>
    </ProjectInfoBox>);
}

export default ProjectInfo;