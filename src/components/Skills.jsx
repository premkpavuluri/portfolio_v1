import React from "react";
import {SectionWrapper, SkillsContainer, TitleSection} from "../styles/PortfolioComponents";
import SkillCard from "./SkillCard";
import {config, sectionLabels} from "../config/Config";

const Skills = ({id}) => {
  const {skills} = config;
  const skillCards = skills.map(({name, displayName}) => {
    return <SkillCard
      key={name}
      name={name.toLowerCase()}
      displayName={displayName}
    />
  });

  return (<SectionWrapper id={id}>
    <TitleSection>{sectionLabels.SKILLS}</TitleSection>
    <SkillsContainer>
      {skillCards}
    </SkillsContainer>
  </SectionWrapper>);
}

export default Skills;