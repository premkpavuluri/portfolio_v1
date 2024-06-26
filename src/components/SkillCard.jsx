import React from "react";
import {Skill, SkillName} from "../styles/PortfolioComponents";
import Icon from "./Icon";

const SkillCard = ({name}) => {
  return (<Skill>
    <Icon name={name} />
    {/*<SkillIcon as={Icon} name={name.toLowerCase()} alt={name} />*/}
    <SkillName>{name}</SkillName>
  </Skill>);
}

export default SkillCard;
