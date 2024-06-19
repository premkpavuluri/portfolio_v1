import React from "react";
import {sections} from "../constants/sections";
import {HeaderBox, NavBar, NavBtn} from "../styles/PortfolioComponents";

const Header = ({onClick, activeSection}) => {
  console.log("Header activeSection: ", activeSection);

  const buttons = sections.map((section) => (
    <NavBtn key={section.id} onClick={() => onClick(section.id)}>
      {section.title}
    </NavBtn>
  ));

  return (<HeaderBox><NavBar>{buttons}</NavBar></HeaderBox>);
}

export default Header;