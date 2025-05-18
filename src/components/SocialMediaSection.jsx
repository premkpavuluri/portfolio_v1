import React from "react";
import {config} from "../config/Config";
import Icon from "./Icon";
import {SocialMediaIcon, SocialMediaIconBox} from "../styles/PortfolioComponents";

const SocialMediaSection = () => {
  const socialLinks = config.socialMedia.map(({name, url}, index) => {
    return <SocialMediaIcon size={"medium"} key={index} href={url} target={"_blank"}>
      <Icon name={name}/>
    </SocialMediaIcon>
  });

  return (<SocialMediaIconBox type={"contact"}>{socialLinks}</SocialMediaIconBox>);
};

export default SocialMediaSection;
