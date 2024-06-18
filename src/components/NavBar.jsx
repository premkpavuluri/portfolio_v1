import React from "react";
import {sections} from "../constants/sections";
import {NavBarContainer} from "../styles/PortfolioComponents";

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

  return (<NavBarContainer>{buttons}</NavBarContainer>);
}

export default NavBar;