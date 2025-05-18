import {config} from "../config/Config";
import {SocialMediaIcon, SocialMediaIconBox} from "../styles/PortfolioComponents";
import Icon from "./Icon";
import React from "react";

const SocialMediaBox = () => {
  const socialLinks = config.socialMedia.map(({name, url}, index) => {
    return <SocialMediaIcon size={"small"} key={index} href={url} target={"_blank"}>
      <Icon name={name}/>
    </SocialMediaIcon>
  });

  return (<SocialMediaIconBox>{socialLinks}</SocialMediaIconBox>);
}

export default SocialMediaBox;
