import React from "react";
import {AboutCard, BgCard} from "../styles/PortfolioComponents";
import styled from "styled-components";

const ProfileBox = styled.div`
    display: block;
    width: 200px;
    height: 200px;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: var(--primary-color);
`;

const About = ({id}) => {
  return (<AboutCard id={id}>
    <BgCard>
      <ProfileBox></ProfileBox>
      <p>
        I am a full-stack web developer with a passion for creating responsive web applications. I have experience in
        JavaScript, React, Node.js, and more. I am a quick learner and enjoy working on projects that challenge me to
        grow.
      </p>
    </BgCard>
  </AboutCard>);
}

export default About;