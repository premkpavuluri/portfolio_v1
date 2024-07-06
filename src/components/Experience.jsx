import React from "react";
import {SectionWrapper, TitleSection} from "../styles/PortfolioComponents";
import ExperienceCard from "./ExperienceCard";
import {config, sectionLabels} from "../config/Config";

const Experience = ({id}) => {
  const {myExperience} = config;
  const expItems = myExperience.map(({role, company, description, from, to}, index) => {
    return <ExperienceCard key={index} role={role} company={company} desc={description} from={from} to={to}/>
  });

  return (<SectionWrapper id={id}>
    <TitleSection>{sectionLabels.EXPERIENCE}</TitleSection>
    {expItems}
  </SectionWrapper>);
}

export default Experience;
