import React, {useState} from "react";
import PortfolioContainer from "../styles/PortfolioContainer";
import NavBar from "./NavBar";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
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
      <About id="about"/>
      <Skills id="skills"/>
      <Experience id="experience"/>
      <Education id="education"/>
      <Projects id="projects"/>
      <Contact id="contact"/>
    </>
  </PortfolioContainer>);
}

export default Portfolio;