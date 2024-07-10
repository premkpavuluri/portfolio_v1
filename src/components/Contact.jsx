import React from "react";
import {ContactSectionWrapper, TitleSection} from "../styles/PortfolioComponents";
import styled from "styled-components";
import {config, sectionLabels} from "../config/Config";
import Icon from "./Icon";

const ContactInfoWrapper = styled.div`
    background-color: var(--primary-background-color);
    color: var(--text-color);
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
`;

const Info = styled.div`
    color: var(--text-color);
    font-size: 1.2rem;
    padding-top: 2rem;
    padding-bottom: 0.5rem;
`;

const EmailSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const EmailIconWrapper = styled.div`
    display: block;
    width: 1.5rem;
    height: 1.5rem;
`;

const Email = styled.a`
    text-decoration: none;
    color: var(--secondary-color);
    font-size: 1.2rem;
    margin: 0.5rem;
    padding: 0.5rem;
`;

const SocialMedia = styled.div`
    width: 100%;
    color: var(--text-color);
    background-color: var(--secondary-background-color);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

const SocialMediaIcon = styled.a`
    text-decoration: none;
    color: var(--text-color);
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition-duration: .3s;
    margin: 0.5rem;
    
    &:hover {
        background-color: var(--primary-color);
    }
`;


const SocialMediaSection = () => {
  return (<SocialMedia>
    <SocialMediaIcon href={"https://github.com/premkpavuluri"} target={"_blank"}><Icon name={"github"}/></SocialMediaIcon>
    <SocialMediaIcon href={"https://github.com/premkpavuluri"} target={"_blank"}><Icon name={"instagram"}/></SocialMediaIcon>
    <SocialMediaIcon href={"https://github.com/premkpavuluri"} target={"_blank"}><Icon name={"linkedin"}/></SocialMediaIcon>
  </SocialMedia>);
};

const Contact = ({id}) => {
  const {emailId} = config;
  return (<ContactSectionWrapper id={id}>
    <TitleSection>{sectionLabels.CONTACT} ME</TitleSection>
    <ContactInfoWrapper>
      <Info>I'm always open for collaborations, reach out to me on</Info>
      <EmailSection>
        <EmailIconWrapper><Icon name={"email"}/></EmailIconWrapper>
        <Email href={`mailto:${emailId}`}>{emailId}</Email>
      </EmailSection>
      <Info>connect with me on</Info>
      <SocialMediaSection/>
    </ContactInfoWrapper>
  </ContactSectionWrapper>);
}

export default Contact;