import React from "react";
import {SectionWrapper} from "../styles/PortfolioComponents";

const Contact = ({id}) => {
  return (<SectionWrapper id={id}>
    <h1>Contact</h1>
    <p>Email:<a href="mailto:premkumarpavuluri@gmail.com">Email</a></p>
  </SectionWrapper>);
}

export default Contact;