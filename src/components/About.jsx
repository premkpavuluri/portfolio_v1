import React from "react";
import {
  AboutCard,
  AboutIcon,
  BgCard,
  Description,
  DescriptionBox,
  DPBox,
  ProfilePic
} from "../styles/PortfolioComponents";
import Location from "./Location";
import {config} from "../config/Config";
import aboutIcon from "assets/icons/about.png";

const About = ({id}) => {
  const {city, aboutMe, profilePic} = config;

  return (<AboutCard id={id}>
    <BgCard>
      <DPBox><ProfilePic src={profilePic} alt="Profile"/></DPBox>
      <DescriptionBox>
        <Location city={city}></Location>
        <Description><AboutIcon src={aboutIcon}></AboutIcon>{aboutMe}</Description>
      </DescriptionBox>
    </BgCard>
  </AboutCard>);
}

export default About;