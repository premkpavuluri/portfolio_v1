import React from "react";
import {HeaderBox, NameLogo, NavBar, NavBtn} from "../styles/PortfolioComponents";
import config from "../config/Config";

const Header = ({onClick, activeSection}) => {
  const {sections, YourName} = config;
  console.debug("Header activeSection: ", activeSection);

  const buttons = sections.map((section) => (
    <NavBtn key={section.id} onClick={() => onClick(section.id)}>
      {section.title}
    </NavBtn>
  ));

  return (<HeaderBox>
    <NameLogo onClick={() => onClick(sections[0].id)}>
      {YourName}
    </NameLogo>
    <NavBar>{buttons}</NavBar>
  </HeaderBox>);
}

export default Header;