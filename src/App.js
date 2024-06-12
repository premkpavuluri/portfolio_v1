import './App.css';
import React, {useState} from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const Portfolio = (props) => {
  const [activeSection, setActiveSection] = useState('about');

  const handleScrollSection = (sectionId) => {
    setActiveSection(sectionId);

    const sectionNode = document.getElementById(sectionId);
    if (sectionNode) {
      sectionNode.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (<div>
    <NavBar onClick={handleScrollSection} activeSection={activeSection}/>
    <>
      <About id="about"/>
      <Skills id="skills"/>
      <Experience id="experience"/>
      <Education id="education"/>
      <Projects id="projects"/>
      <Contact id="contact"/>
    </>
  </div>);
}

const App = () => (<Portfolio/>);

export default App;
