import React from "react";
import styled from "styled-components";

const AboutCard = styled.div`
    color: var(--text-color);
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    padding: 5rem 0;
`

const BgCard = styled.div`
    background-color: var(--primary-background-color);
    color: var(--text-color);
    display: flex;
    margin-top: 4rem;
`;

const About = ({id}) => {
  return (<AboutCard id={id}>
    <BgCard>
      <h1>Profile section placeholder</h1>
      <p>
        I am a full-stack web developer with a passion for creating responsive web applications. I have experience in
        JavaScript, React, Node.js, and more. I am a quick learner and enjoy working on projects that challenge me to
        grow.
      </p>
    </BgCard>
  </AboutCard>);
}

export default About;