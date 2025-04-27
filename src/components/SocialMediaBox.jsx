import {config} from "../config/Config";
import {SocialMedia, SocialMediaIcon} from "../styles/PortfolioComponents";
import Icon from "./Icon";
import React from "react";
import styled from "styled-components";

const SocialMediaIcon1 = styled.a`
    text-decoration: none;
    color: var(--text-color);
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition-duration: .5s;
    margin: 0.5rem;

    &:hover {
        background-color: var(--primary-color);
        transition-duration: .5s;
        transform: scale(1.09);
    }
`;

const SocialMedia1 = styled.div`
    width: 50%;
    color: var(--text-color);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding-top: 5rem;
`;

const SocialMediaBox = () => {
  const socialLinks = config.socialMedia.map(({name, url}, index) => {
    return <SocialMediaIcon1 key={index} href={url} target={"_blank"}>
      <Icon name={name}/>
    </SocialMediaIcon1>
  });

  return (<SocialMedia1>{socialLinks}</SocialMedia1>);
}

export default SocialMediaBox;
