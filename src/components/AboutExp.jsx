import React from "react";
import {AboutExpBox, IconWrapper, JobTitleSection} from "../styles/PortfolioComponents";
import Icon from "./Icon";
import JobDesc from "./JobDesc";

const AboutExp = ({role, company, desc}) => {
  return (<AboutExpBox>
      {role && company &&
        (<JobTitleSection>
          <IconWrapper><Icon name="company"/></IconWrapper>
          {role} @ {company}
        </JobTitleSection>)}
      <JobDesc description={desc}/>
    </AboutExpBox>
  )
}

export default AboutExp;