import React from "react";
import {SkillsCard, SkillsContainer, TitleSection} from "../styles/PortfolioComponents";
import SkillCard from "./SkillCard";

const Skills = ({id}) => {
  const skills = [
    "Bash",
    "JavaScript",
    "Nodejs",
    "HTML",
    "CSS",
    "Docker",
    "Kotlin",
    "Python",
    "MongoDB"
  ];
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