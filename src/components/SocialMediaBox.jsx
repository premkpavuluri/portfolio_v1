import {config} from "../config/Config";
import {SocialMedia, SocialMediaIcon} from "../styles/PortfolioComponents";
import Icon from "./Icon";
import React from "react";

const SocialMediaBox = () => {
  const socialLinks = config.socialMedia.map(({name, url}, index) => {
    return <SocialMediaIcon key={index} href={url} target={"_blank"}>
      <Icon name={name}/>
    </SocialMediaIcon>
  });

  return (<SocialMedia>{socialLinks}</SocialMedia>);
}

export default SocialMediaBox;
