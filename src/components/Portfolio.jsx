import React, {useState} from "react";
import PortfolioContainer from "../styles/PortfolioContainer";
import NavBar from "./NavBar";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

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
      <About id="about-id"/>
      <Skills id="skills-id"/>
      <Experience id="experience-id"/>
      <Projects id="projects-id"/>
      <Contact id="contact-id"/>
    </>
  </PortfolioContainer>);
}

export default Portfolio;