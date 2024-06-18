import React from "react";
import {sections} from "../constants/sections";
import {NavBarContainer, NavBtn} from "../styles/PortfolioComponents";

const NavBar = ({onClick, activeSection}) => {
  const buttons = sections.map((section) => (
    <NavBtn key={section.id} onClick={() => onClick(section.id)}>
      {section.title}
    </NavBtn>
  ));

  return (<NavBarContainer>{buttons}</NavBarContainer>);
}

export default NavBar;