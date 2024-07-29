import React, {useEffect, useState} from "react";
import {HeaderBox, NameLogo, NavBar, NavBtn} from "../styles/PortfolioComponents";
import {config} from "../config/Config";
import useScreenWidth from "../hooks/useScreenWidth";
import styled from "styled-components";

const SideBarWrapper = styled.div`
    background-color: var(--secondary-background-color);
    display: flex;
    justify-content: flex-start;
`;

const SideBarIcon = styled.div`
    display: block;
    font-size: 2rem;
    margin: 0.5rem;
    padding-left: 1rem;
`;

const SideBarComponent = ({sections, handleOnclick, myName}) => {
  console.log("log in mobile view");

  // const sideBarBtns = sections.map((section) => (
  //   <SideBarBtn key={section.id} onClick={() => handleOnclick(section.id)}>
  //     {section.title}
  //   </SideBarBtn>
  // ));

  return (<SideBarWrapper>
    <SideBarIcon>=</SideBarIcon>
    <NameLogo onClick={() => handleOnclick(sections[0].id)}>{myName}</NameLogo>
  </SideBarWrapper>)
};

const Header = ({onClick, activeSection}) => {
  const [isMobileView, setIsMobileView] = useState(false);
  console.debug("Header activeSection: ", activeSection);
  const screenWidth = useScreenWidth();
  const {sections, myName} = config;

  useEffect(() => {
    console.log("screen width: ", screenWidth)
    setIsMobileView(false)
    if (screenWidth <= 480) {
      setIsMobileView(true);
    }
  }, [screenWidth]);

  const buttons = sections.map((section) => (
    <NavBtn key={section.id} onClick={() => onClick(section.id)}>
      {section.title}
    </NavBtn>
  ));

  return (<HeaderBox>
    {isMobileView ?
      <SideBarComponent
        myName={myName}
        sections={sections}
        handleOnclick={onClick}>
      </SideBarComponent> :
      <>
        <NameLogo onClick={() => onClick(sections[0].id)}>
          {myName}
        </NameLogo>
        <NavBar>{buttons}</NavBar>
      </>
    }
  </HeaderBox>);
}

export default Header;