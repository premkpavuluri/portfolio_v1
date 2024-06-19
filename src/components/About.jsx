import React from "react";
import {AboutCard} from "../styles/PortfolioComponents";

const About = ({id}) => {
  return (<AboutCard id={id}>
    <h1>Profile section placeholder</h1>
    <p>
      I am a full-stack web developer with a passion for creating responsive web applications. I have experience in
      JavaScript, React, Node.js, and more. I am a quick learner and enjoy working on projects that challenge me to
      grow.
    </p>
  </AboutCard>);
}

export default About;