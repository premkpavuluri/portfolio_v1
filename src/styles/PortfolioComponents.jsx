import styled from "styled-components";

const PortfolioContainer = styled.div`
    background-color: var(--background-color);
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-family: sans-serif;
    scroll-behavior: smooth;
`

const NavBar = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const NavBtn = styled.div`
    font-size: 1.1rem;
    width: 100%;
    height: 100%;
    padding: 1rem;
    text-align: center;
    transition: 0.5s;

    &:hover {
        background-color: var(--primary-color);
        cursor: pointer;
        transition: 0.5s;
    }
`;

const HeaderBox = styled.header`
    color: var(--text-color);
    background-color: var(--secondary-background-color);
    width: 100%;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    top: 0;
    z-index: 100;
`;

const NameLogo = styled.div`
    width: 50%;
    font-size: 1.5rem;
    color: var(--primary-color);
    border-radius: 10px;
    justify-content: center;
    align-content: center;
    padding: 0 3rem;

    &:hover {
        cursor: pointer;
    }
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const SectionWrapper = styled.div`
    color: var(--text-color);
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const AboutCard = styled.div`
    color: var(--text-color);
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    padding-top: 5rem;
`;

const BgCard = styled.div`
    background-color: var(--primary-background-color);
    color: var(--text-color);
    width: 100%;
    margin-top: 4rem;
    padding: 4rem 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`;

const DPBox = styled.div`
    display: block;
    height: 250px;
    width: 250px;
    border-radius: 50%;
    aspect-ratio: 1;
    margin: 0 auto;
`;

const ProfilePic = styled.img`
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 50%;
    aspect-ratio: 1;
    border: 0.2em solid var(--primary-color);
`;

const DescriptionBox = styled.div`
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 1.5rem;
`;

const LocationBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const LocationIcon = styled.img`
    width: 1.7em;
    height: 1.7rem;
`;

const LocationText = styled.p`
    margin-left: 0.5em;
    font-size: 1.5rem;
`;

const Description = styled.div`
    display: flex;
    font-size: 1.5rem;
    justify-content: flex-start;
    align-items: flex-start;
`;

const AboutIcon = styled.img`
    width: 1.7em;
    height: 1.9rem;
    margin-right: 0.5em;
`;

const TitleSection = styled.div`
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
    color: var(--text-color);
`;

const SkillsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 1rem;
    flex-wrap: wrap;
`;

const Skill = styled.div`
    background-color: var(--primary-background-color);
    color: var(--text-color);
    width: 15%;
    height: 15%;
    display: block;
    text-align: center;
    padding: 0.5rem;
    border-radius: 10px;
    transition: 0.5s;

    &:hover {
        box-shadow: 0 0 0.2rem 1 var(--primary-color);
        transform: scale(1.09);
        transition: 0.5s;
        cursor: pointer;
    }
`;

const SkillName = styled.div`
    font-size: 1rem;
    padding-bottom: 0.8rem;
`;

const SkillIcon = styled.div`
    width: 70%;
    height: 70%;
    object-fit: fill;
    aspect-ratio: 1;
    padding: 0.8rem;
    margin: 0 auto;
`;

const ExperienceItem = styled.div`
    background-color: var(--primary-background-color);
    width: 100%;
    display: flex;
    align-items: center;
    padding: 1rem;
    border-radius: 0.2rem;
    margin: 0.5rem;
    column-gap: 1.5rem;
`;

const TimeLineBox = styled.div`
    width: 15%;
    display: block;
    text-align: center;
`;

const AboutExpBox = styled.div`
    display: flex;
    width: 85%;
    flex-direction: column;
    row-gap: 1rem;
    padding: 1rem;
    border-left: 3px solid var(--primary-color);
`;

const JobTitleSection = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    column-gap: 0.5rem;
`;

const JobDescription = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
`;

const IconWrapper = styled.div`
    width: 35px;
    height: 35px;
`;

const ProjectWallpaper = styled.img`
    display: block;
    width: 50%;
    height: 300px;
    margin: 0.6rem;
    transition: 0.5s;
    border-radius: 0.2rem;
    aspect-ratio: 1;
    border: 1px solid var(--secondary-color);

    &:hover {
        box-shadow: 0 0 12px 0 var(--secondary-color);
        transition: 0.5s;
        transform: scale(1.01);
    }
`;

const ProjectContainer = styled.div`
    background-color: var(--primary-background-color);
    width: 100%;
    height: 100%;
    padding: 1rem;
    margin: 0.5rem;
    display: flex;
    column-gap: 1.5rem;
    align-items: flex-start;
    border-radius: 0.2rem;
`;

const ProjectInfoBox = styled.div`
    width: 50%;
    height: 290px;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ProjectTitle = styled.div`
    display: block;
    font-weight: 500;
    font-size: 1.6rem;
    text-align: center;
    margin-bottom: 0.6rem;
`;

const ProjectDescription = styled.div`
    display: block;
    font-size: 1.2rem;
    height: 200px;
`;

const ViewBtn = styled.a`
    text-decoration: none;
    color: var(--text-color);
    display: block;
    width: 100%;
    text-align: center;
    padding: 0.5rem;
    transition: 0.5s;
    border: 1px solid var(--secondary-color);

    &:hover {
        background-color: var(--primary-color);
        cursor: pointer;
        transition: 0.5s;
    }
`;

const ViewLinks = styled.div`
    display: flex;
    align-content: space-between;
    column-gap: 1rem;
`;

export {
  PortfolioContainer,
  HeaderBox,
  NavBar,
  NavBtn,
  NameLogo,
  Main,
  AboutCard,
  BgCard,
  DPBox,
  DescriptionBox,
  LocationBox,
  LocationIcon,
  LocationText,
  Description,
  AboutIcon,
  ProfilePic,
  TitleSection,
  SkillsContainer,
  Skill,
  SkillName,
  SkillIcon,
  ExperienceItem,
  TimeLineBox,
  AboutExpBox,
  JobTitleSection,
  JobDescription,
  IconWrapper,
  SectionWrapper,
  ProjectWallpaper,
  ProjectContainer,
  ProjectInfoBox,
  ProjectTitle,
  ProjectDescription,
  ViewBtn,
  ViewLinks
};