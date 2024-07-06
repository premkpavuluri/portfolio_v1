import {LocationBox, LocationIcon, LocationText} from "../styles/PortfolioComponents";
import location from "assets/icons/location.png";
import React from "react";

const Location = ({city}) => {
  return (<LocationBox>
    <LocationIcon src={location} alt={"Location icon"}/>
    <LocationText>{city}</LocationText>
  </LocationBox>);
}

export default Location;