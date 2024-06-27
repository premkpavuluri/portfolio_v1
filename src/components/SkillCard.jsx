import React from "react";
import {Skill, SkillIcon, SkillName} from "../styles/PortfolioComponents";
import Icon from "./Icon";

const SkillCard = ({name, displayName}) => {
  return (<Skill>
    <SkillIcon>
      <Icon name={name} />
    </SkillIcon>
    <SkillName>{displayName}</SkillName>
  </Skill>);
}

export default SkillCard;
