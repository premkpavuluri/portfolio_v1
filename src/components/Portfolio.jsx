import React, {useState} from "react";
import {Main, PortfolioContainer} from "../styles/PortfolioComponents";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import {config} from "../config/Config";
import Footer from "./Footer";

const Portfolio = () => {
  const {sections} = config;
  const [activeSection, setActiveSection] = useState(sections[0].id);

  const handleScrollSection = (sectionId) => {
    setActiveSection(sectionId);

    const sectionNode = document.getElementById(sectionId);
    if (sectionNode) {
      sectionNode.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (<PortfolioContainer>
    <Header onClick={handleScrollSection} activeSection={activeSection}/>
    <Main>
      <About id={sections[0].id}/>
      <Skills id={sections[1].id}/>
      <Experience id={sections[2].id}/>
      <Projects id={sections[3].id}/>
      <Contact id={sections[4].id}/>
    </Main>
    <Footer/>
  </PortfolioContainer>);
}

export default Portfolio;