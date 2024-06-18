import React from "react";
import {sections} from "../constants/sections";

const NavBar = ({onClick, activeSection}) => {
  const buttons = sections.map((section) => (
    <button
      key={section.id}
      className={"nav-button"}
      onClick={() => onClick(section.id)}
    >
      {section.title}
    </button>
  ));

  return (<div className={"nav-bar"}>{buttons}</div>);
}

export default NavBar;