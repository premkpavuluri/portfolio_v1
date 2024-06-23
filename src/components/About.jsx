import React from "react";
import {AboutCard, BgCard, DescriptionBox, DPBox} from "../styles/PortfolioComponents";
import Location from "./Location";
import config from "../config/Config";

const About = ({id}) => {
  const {city} = config;

  return (<AboutCard id={id}>
    <BgCard>
      <DPBox></DPBox>
      <DescriptionBox>
        <Location city={city}></Location>
        I am a full-stack web developer with a passion for creating responsive web applications. I enjoy working on projects that challenge me to
        grow.
      </DescriptionBox>
    </BgCard>
  </AboutCard>);
}

export default About;