import React from "react";
import {
  AboutCard,
  AboutIcon,
  BgCard,
  Description,
  DescriptionBox,
  DPBox,
  NameBox,
  ProfilePic
} from "../styles/PortfolioComponents";
import Location from "./Location";
import {config} from "../config/Config";
import Icon from "./Icon";

const About = ({id}) => {
  const {city, aboutMe, profilePic} = config;

  return (<AboutCard id={id}>
    <BgCard>
      <DPBox><ProfilePic src={profilePic} alt="Profile"/></DPBox>
      <DescriptionBox>
        <NameBox>Prem kumar</NameBox>
        <Location city={city}></Location>
        <Description>
          <AboutIcon><Icon name={"about"}/></AboutIcon>
          {aboutMe}
        </Description>
      </DescriptionBox>
    </BgCard>
  </AboutCard>);
}

export default About;
