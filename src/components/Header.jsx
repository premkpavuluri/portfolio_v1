import React from "react";
import {sections} from "../constants/sections";
import {HeaderBox, NameLogo, NavBar, NavBtn} from "../styles/PortfolioComponents";

const Header = ({onClick, activeSection}) => {
  console.debug("Header activeSection: ", activeSection);

  const buttons = sections.map((section) => (
    <NavBtn key={section.id} onClick={() => onClick(section.id)}>
      {section.title}
    </NavBtn>
  ));

  return (<HeaderBox>
    <NameLogo>Prem Kumar</NameLogo>
    <NavBar>{buttons}</NavBar>
  </HeaderBox>);
}

export default Header;