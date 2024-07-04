import React from "react";
import {AboutExpBox, JobDescription, JobTitle} from "../styles/PortfolioComponents";

const AboutExp = ({role, company, desc}) => {
  return (<AboutExpBox>
      {role && company && (<JobTitle>{role} @ {company}</JobTitle>)}
      <JobDescription>{desc}</JobDescription>
    </AboutExpBox>
  )
}

export default AboutExp;