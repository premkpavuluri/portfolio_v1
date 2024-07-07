import React from "react";
import {CopyRights, FooterSection} from "../styles/PortfolioComponents";
import Credits from "./Credits";

const Footer = () => {
  return (<FooterSection>
    <Credits/>
    <CopyRights>&copy; 2024 Prem Kumar Pavuluri</CopyRights>
  </FooterSection>);
}

export default Footer;