import {LocationBox, LocationIcon, LocationText} from "../styles/PortfolioComponents";
import React from "react";
import Icon from "./Icon";

const Location = ({city}) => {
  return (<LocationBox>
    <LocationIcon><Icon name={"location"}/></LocationIcon>
    <LocationText>{city}</LocationText>
  </LocationBox>);
}

export default Location;