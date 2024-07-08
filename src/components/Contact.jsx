import React from "react";
import {SectionWrapper, TitleSection} from "../styles/PortfolioComponents";
import styled from "styled-components";
import {sectionLabels} from "../config/Config";

const ContactInfoWrapper = styled.div`
    background-color: var(--primary-background-color);
    color: var(--text-color);
    width: 80%;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Info = styled.div`
    color: var(--text-color);
    font-size: 1.5rem;
    margin: 0.1rem;
`;

const Contact = ({id}) => {

  return (<SectionWrapper id={id}>
    <TitleSection>{sectionLabels.CONTACT} ME</TitleSection>
    <ContactInfoWrapper>
      <Info>I'm always interested in new opportunities and collaborations.</Info>
      <Info>Feel free to reach out to me:</Info>
      <p>Email:<a href="mailto:premkumarpavuluri@gmail.com">Email</a></p>
    </ContactInfoWrapper>
  </SectionWrapper>);
}

export default Contact;