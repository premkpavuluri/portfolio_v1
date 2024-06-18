import React, {useState} from "react";
import PortfolioContainer from "../styles/PortfolioContainer";
import NavBar from "./NavBar";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import {sections} from "../constants/sections";

const Portfolio = (props) => {
  const [activeSection, setActiveSection] = useState('about');

  const handleScrollSection = (sectionId) => {
    setActiveSection(sectionId);

    const sectionNode = document.getElementById(sectionId);
    if (sectionNode) {
      sectionNode.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (<PortfolioContainer>
    <NavBar onClick={handleScrollSection} activeSection={activeSection}/>
    <>
      <About id={sections[0].id}/>
      <Skills id={sections[1].id}/>
      <Experience id={sections[2].id}/>
      <Projects id={sections[3].id}/>
      <Contact id={sections[4].id}/>
    </>
  </PortfolioContainer>);
}

export default Portfolio;