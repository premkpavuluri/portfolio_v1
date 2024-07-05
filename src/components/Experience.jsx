import React from "react";
import {ExperienceBox, TitleSection} from "../styles/PortfolioComponents";
import ExperienceCard from "./ExperienceCard";
import {config, sectionLabels} from "../config/Config";

const Experience = ({id}) => {
  const {myExperience} = config;
  const expItems = myExperience.map(({role, company, description, from, to}) => {
    return <ExperienceCard role={role} company={company} desc={description} from={from} to={to}/>
  });

  return (<ExperienceBox id={id}>
    <TitleSection>{sectionLabels.EXPERIENCE}</TitleSection>
    {expItems}
  </ExperienceBox>);
}

export default Experience;
