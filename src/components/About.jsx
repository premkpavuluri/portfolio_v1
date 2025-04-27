import React from "react";
import {
  AboutCard,
  BgCard,
  Description,
  DescriptionBox,
  DPBox,
  NameBox,
  ProfilePic
} from "../styles/PortfolioComponents";
import Location from "./Location";
import {config} from "../config/Config";
import SocialMediaBox from "./SocialMediaBox";

const About = ({id}) => {
  const {city, aboutMe, profilePic, fullName} = config;

  return (<AboutCard id={id}>
    <BgCard>
      <DPBox>
        <ProfilePic src={profilePic} alt="Profile"/>
        <NameBox>{fullName}</NameBox>
      </DPBox>
      <DescriptionBox>
        <Location city={city}></Location>
        <Description>
          {aboutMe}
        </Description>
        <SocialMediaBox/>
      </DescriptionBox>
    </BgCard>
  </AboutCard>);
}

export default About;
