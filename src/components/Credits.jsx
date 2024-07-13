import React from "react";
import {SymbolStyles} from "../styles/PortfolioComponents";

const LoveIcon = ({name}) => {
  return (<SymbolStyles title={name}> ❤️</SymbolStyles>);
}

const Credits = () => {
  return (<p>Designed and Build by <LoveIcon name={"Prem"}/></p>)
}

export default Credits;