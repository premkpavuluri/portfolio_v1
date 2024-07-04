import React from "react";
import {HeaderBox, NameLogo, NavBar, NavBtn} from "../styles/PortfolioComponents";
import {config} from "../config/Config";

const Header = ({onClick, activeSection}) => {
  const {sections, myName} = config;
  console.debug("Header activeSection: ", activeSection);

  const buttons = sections.map((section) => (
    <NavBtn key={section.id} onClick={() => onClick(section.id)}>
      {section.title}
    </NavBtn>
  ));

  return (<HeaderBox>
    <NameLogo onClick={() => onClick(sections[0].id)}>
      {myName}
    </NameLogo>
    <NavBar>{buttons}</NavBar>
  </HeaderBox>);
}

export default Header;