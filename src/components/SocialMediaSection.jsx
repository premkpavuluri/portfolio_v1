import React from "react";
import {config} from "../config/Config";
import Icon from "./Icon";
import {SocialMedia, SocialMediaIcon} from "../styles/PortfolioComponents";

const SocialMediaSection = () => {
  const socialLinks = config.socialMedia.map(({name, url}, index) => {
    return <SocialMediaIcon key={index} href={url} target={"_blank"}>
      <Icon name={name}/>
    </SocialMediaIcon>
  });

  return (<SocialMedia>{socialLinks}</SocialMedia>);
};

export default SocialMediaSection;