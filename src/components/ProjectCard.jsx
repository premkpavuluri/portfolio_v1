import React from "react";
import {ProjectContainer, ProjectWallpaper} from "../styles/PortfolioComponents";
import ProjectInfo from "./ProjectInfo";

const importAllImages = () => {
  const r = require.context('../assets/images', false, /\.(png|jpe?g|svg)$/)
  const images = {};
  r.keys().map((item) => images[item.replace('./', '')] = r(item));

  return images;
}

const ProjectCard = ({title, description, img, links}) => {
  const allImages = importAllImages();
  const wallpaper = allImages[img];

  return (
    <ProjectContainer>
      <ProjectWallpaper src={wallpaper} target="_blank" alt={`${img}_image`}/>
      <ProjectInfo title={title} description={description} links={links}/>
    </ProjectContainer>)
}

export default ProjectCard;