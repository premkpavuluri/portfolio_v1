import React from "react";
import {Skill, SkillIcon, SkillName} from "../styles/PortfolioComponents";
import Icon from "./Icon";

const SkillCard = ({name}) => {
  return (<Skill>
    <SkillIcon>
      <Icon name={name} />
    </SkillIcon>
    <SkillName>{name}</SkillName>
  </Skill>);
}

export default SkillCard;
