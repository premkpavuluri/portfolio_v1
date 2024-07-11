import React from "react";
import {
  ContactInfoWrapper,
  ContactSectionWrapper,
  Email,
  EmailIconWrapper,
  EmailSection,
  Info,
  TitleSection
} from "../styles/PortfolioComponents";
import {config, sectionLabels} from "../config/Config";
import Icon from "./Icon";
import SocialMediaSection from "./SocialMediaSection";

const labels = {
  contactLine1: "I'm always open for collaborations, reach out to me on",
  contactLine2: "want to know more?"
}

const Contact = ({id}) => {
  const {emailId} = config;

  return (<ContactSectionWrapper id={id}>
    <TitleSection>{sectionLabels.CONTACT} ME</TitleSection>
    <ContactInfoWrapper>
      <Info>{labels.contactLine1}</Info>

      <EmailSection>
        <EmailIconWrapper><Icon name={"email"}/></EmailIconWrapper>
        <Email href={`mailto:${emailId}`}>{emailId}</Email>
      </EmailSection>

      <Info>{labels.contactLine2}</Info>

      <SocialMediaSection/>
    </ContactInfoWrapper>
  </ContactSectionWrapper>);
}

export default Contact;