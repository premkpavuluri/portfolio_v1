import React, {useEffect, useState} from "react";
import {HeaderBox, NameLogo, NavBar, NavBtn} from "../styles/PortfolioComponents";
import {config} from "../config/Config";
import useScreenWidth from "../hooks/useScreenWidth";
import styled from "styled-components";
import Icon from "./Icon";

const SideBarWrapper = styled.div`
    background-color: var(--secondary-background-color);
    display: flex;
    justify-content: flex-start;
`;

const SideBarIconWrapper = styled.div`
    display: block;
    aspect-ratio: 1;
    width: 50px;
    margin: 0.2rem 0 0 1.2rem;
`;

const SideBarBtn = styled.div`
    font-size: 1.1rem;
    width: 100%;
    height: 3rem;
    padding: 1rem;
    transition: 0.90s;
    text-align: center;
    font-weight: 400;
    margin: 0.2rem 0;

    &:hover {
        transition: 0.90s;
        font-size: 1.2rem;
        font-weight: bold;
    }
`;

const SideBarContent = styled.div`
    background-color: var(--secondary-background-color);
    position: fixed;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    z-index: 100;
`;

const SideBarComponent = ({sections, handleOnclick, myName}) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const sideBarBtns = sections.map((section) => (
    <SideBarBtn key={section.id} onClick={() => handleOnclick(section.id)}>
      {section.title}
    </SideBarBtn>
  ));

  const handleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  }

  return (<SideBarWrapper onMouseLeave={handleSideBar}>
    <SideBarIconWrapper onClick={handleSideBar}>
      <Icon name="menu"/>
    </SideBarIconWrapper>
    <NameLogo onClick={() => handleOnclick(sections[0].id)}>{myName}</NameLogo>
    {isSideBarOpen &&
      <SideBarContent onMouseLeave={handleSideBar}>{sideBarBtns}</SideBarContent>
    }
  </SideBarWrapper>)
};

const Header = ({onClick, activeSection}) => {
  const [isMobileView, setIsMobileView] = useState(false);
  console.debug("Header activeSection: ", activeSection);
  const screenWidth = useScreenWidth();
  const {sections, myName} = config;

  useEffect(() => {
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