import React from "react";
import {SkillsCard, SkillsContainer, TitleSection} from "../styles/PortfolioComponents";
import SkillCard from "./SkillCard";
import config from "../config/Config";

const Skills = ({id}) => {
  const {skills} = config;
  const cards = skills.map((skill) => {
    return <SkillCard name={skill}/>
  });

  return (<SkillsCard id={id}>
    <TitleSection>SKILLS</TitleSection>
    <SkillsContainer>
      {cards}
    </SkillsContainer>
  </SkillsCard>);
}

export default Skills;