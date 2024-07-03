import React from "react";
import styled from "styled-components";
import {TitleSection} from "../styles/PortfolioComponents";

const myExperience = [
  {
    title: "Web Developer - ThoughtWorks",
    description: "I'm working as a web developer at ThoughtWorks where I was responsible for building and maintaining web applications.",
    from: '2023',
    to: 'Present'
  },
  {
    title: "Intern - ThoughtWorks",
    description: "I worked as an intern at ThoughtWorks where I was responsible for building and maintaining web applications.",
    from: '2021',
    to: '2023'
  }
]

const ExperienceBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5rem;
`;

const ExperienceItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border: 1px solid black;
    border-radius: 10px;
    margin: 1rem;
`;

const ExperienceCard = ({title,desc,from,to}) => {
  return (<ExperienceItem>
    <p>{from} - {to}</p>
    <h2>{title}</h2>
    <p>{desc}</p>
  </ExperienceItem>);
}

const Experience = ({id}) => {
  const expItems = myExperience.map(({title,description,from,to}) => {
    return <ExperienceCard title={title} desc={description} from={from} to={to}/>
  });

  return (<ExperienceBox id={id}>
    <TitleSection>Experience</TitleSection>
    {expItems}
  </ExperienceBox>);
}

export default Experience;
