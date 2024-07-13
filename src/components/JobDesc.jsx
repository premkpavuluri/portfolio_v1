import {JobDescription} from "../styles/PortfolioComponents";
import React from "react";

const JobDesc = ({description}) => {
  const lines = description
    .split('\n')
    .map((line, index) => <p key={index} style={{whiteSpace: 'pre-wrap'}}>{line}</p>)

  return (<JobDescription>{lines}</JobDescription>);
}

export default JobDesc;