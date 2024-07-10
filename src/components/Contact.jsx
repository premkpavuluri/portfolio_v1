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
    padding: 1rem;
`;

const Info = styled.div`
    color: var(--text-color);
    font-size: 1.2rem;
    padding: 0.5rem;
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
    </ContactInfoWrapper>
  </ContactSectionWrapper>);
}

export default Contact;