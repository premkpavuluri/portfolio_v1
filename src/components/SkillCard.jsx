import {Skill, SkillIcon, SkillName} from "../styles/PortfolioComponents";
import React from "react";

const SkillCard = ({name}) => {
  const logo = `https://img.icons8.com/color/100/000000/${name.toLowerCase()}.png`;

  return (<Skill>
    <SkillIcon src={logo} alt={name}></SkillIcon>
    <SkillName>{name}</SkillName>
  </Skill>);
}

export default SkillCard;
