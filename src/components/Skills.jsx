import React from "react";

const Skills = ({id}) => {
  return (<div className={"section"} id={id}>
    <h1>Skills</h1>
    <ul>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </div>);
}

export default Skills;