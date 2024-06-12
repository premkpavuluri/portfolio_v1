import React from "react";

const Projects = ({id}) => {
  return (<div className={"section"} id={id}>
    <h1>Projects</h1>
    <h2>Project 1</h2>
    <p>
      This is a project I worked on recently. It's a web application that allows users to create and manage tasks.
    </p>
    <h2>Project 2</h2>
    <p>
      This is another project I worked on. It's a web application that allows users to search for recipes and save
      their favorites.
    </p>
  </div>);
}

export default Projects;