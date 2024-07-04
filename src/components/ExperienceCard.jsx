import React from "react";
import {ExperienceItem} from "../styles/PortfolioComponents";
import TimeLine from "./TimeLine";
import AboutExp from "./AboutExp";

const ExperienceCard = ({role, company, desc, from, to}) => {
  return (<ExperienceItem>
    <TimeLine from={from} to={to}/>
    <AboutExp role={role} company={company} desc={desc}/>
  </ExperienceItem>);
}

export default ExperienceCard;