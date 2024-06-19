import React from "react";
import {sections} from "../constants/sections";
import {NavBar, NavBtn} from "../styles/PortfolioComponents";

const Header = ({onClick, activeSection}) => {
  console.log("Header activeSection: ", activeSection);

  const buttons = sections.map((section) => (
    <NavBtn key={section.id} onClick={() => onClick(section.id)}>
      {section.title}
    </NavBtn>
  ));

  return (<NavBar>{buttons}</NavBar>);
}

export default Header;