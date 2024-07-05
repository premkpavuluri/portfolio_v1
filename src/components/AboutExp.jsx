import React from "react";
import {AboutExpBox, IconWrapper, JobDescription, JobTitleSection} from "../styles/PortfolioComponents";
import Icon from "./Icon";

const AboutExp = ({role, company, desc}) => {
  return (<AboutExpBox>
      {role && company &&
        (<JobTitleSection>
          <IconWrapper><Icon name="company"/></IconWrapper>
          {role} @ {company}
        </JobTitleSection>)}
      <JobDescription>{desc}</JobDescription>
    </AboutExpBox>
  )
}

export default AboutExp;