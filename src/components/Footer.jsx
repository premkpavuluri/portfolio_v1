import React from "react";
import {CopyRights, FooterSection} from "../styles/PortfolioComponents";
import Credits from "./Credits";
import {config} from "../config/Config";

const Footer = () => {
  const {copyRightYear} = config;

  return (<FooterSection>
    <Credits/>
    <CopyRights>&copy; {copyRightYear} Prem Kumar</CopyRights>
  </FooterSection>);
}

export default Footer;