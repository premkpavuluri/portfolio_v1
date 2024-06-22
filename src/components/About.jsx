import React from "react";
import {AboutCard, BgCard, DescriptionBox, DPBox} from "../styles/PortfolioComponents";

const About = ({id}) => {
  return (<AboutCard id={id}>
    <BgCard>
      <DPBox></DPBox>
      <DescriptionBox>
        I am a full-stack web developer with a passion for creating responsive web applications. I have experience in
        JavaScript, React, Node.js, and more. I am a quick learner and enjoy working on projects that challenge me to
        grow.
      </DescriptionBox>
    </BgCard>
  </AboutCard>);
}

export default About;