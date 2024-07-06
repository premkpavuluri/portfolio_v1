import React from "react";
import {SectionWrapper, TitleSection} from "../styles/PortfolioComponents";
import {sectionLabels} from "../config/Config";

const Projects = ({id}) => {
  return (<SectionWrapper id={id}>
    <TitleSection>{sectionLabels.PROJECTS}</TitleSection>
    <h2>Project 1</h2>
    <p>
      This is a project I worked on recently. It's a web application that allows users to create and manage tasks.
    </p>
    <h2>Project 2</h2>
    <p>
      This is another project I worked on. It's a web application that allows users to search for recipes and save
      their favorites.
    </p>
  </SectionWrapper>);
}

export default Projects;