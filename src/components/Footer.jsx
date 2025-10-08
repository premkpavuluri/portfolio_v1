import React from "react";
import {CopyRights, FooterSection} from "../styles/PortfolioComponents";
import Credits from "./Credits";

const Footer = () => {
  const year = new Date().getFullYear();

  return (<FooterSection>
    <Credits/>
    <CopyRights>&copy; {year} Prem Kumar</CopyRights>
  </FooterSection>);
}

export default Footer;