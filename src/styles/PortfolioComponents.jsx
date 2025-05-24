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
    //font-size: 16px;
    font-family: sans-serif;
    scroll-behavior: smooth;
`

const NavBar = styled.nav`
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const NavBtn = styled.div`
    font-size: 1rem;
    width: 100%;
    height: 100%;
    padding: 0.8rem;
    text-align: center;
    transition: 0.9s;

    &:hover {
        background-color: var(--primary-color);
        cursor: pointer;
        transition: 0.9s;
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
    transition: 0.90s;
`;

const NameLogo = styled.div`
    width: 50%;
    font-size: 1.3rem;
    color: var(--primary-color);
    border-radius: 10px;
    justify-content: center;
    align-content: center;
    padding: 0 3rem;

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 480px) {
        width: 100%;
        padding: 0.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
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
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1024px) {
        width: 90%;
        padding-top: 4rem;
    }
`;

const ContactSectionWrapper = styled(SectionWrapper)`
    padding-top: 3rem;
`;

const AboutCard = styled.div`
    color: var(--text-color);
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    padding-top: 5rem;

    @media (max-width: 1024px) {
        width: 90%;
    }
`;

const BgCard = styled.div`
    background-color: var(--primary-background-color);
    color: var(--text-color);
    width: 100%;
    border-radius: 10px;
    margin-top: 4rem;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1024px) {
        flex-direction: column;
        row-gap: 1em;
        align-items: flex-start;
    }
`;

const DPBox = styled.div`
    height: 250px;
    width: 250px;
    border-radius: 50%;
    aspect-ratio: 1;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media (max-width: 480px) {
        border-radius: 1%;
        width: 200px;
        height: 200px;
    }
`;

const ProfilePic = styled.img`
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 50%;
    aspect-ratio: 1;
    border: 0.2em solid var(--primary-color);

    @media (max-width: 480px) {
        border-radius: 5%;
        border: 0.20em solid var(--primary-color);
    }
`;

const DescriptionBox = styled.div`
    width: 68%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 1.4rem;

    @media (max-width: 1024px) {
        width: 100%;
        padding: 2rem 0;
    }
`;

const LocationBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const LocationIcon = styled.span`
    width: 1.2rem;
    height: 1.2rem;

    @media (max-width: 1024px) {
        width: 1.2rem;
        height: 1.2rem;
    }
`;

const LocationText = styled.p`
    margin-left: 0.5em;
    font-size: 1.2rem;
    color: var(--text-color);

    @media (max-width: 1024px) {
        width: max-content;
    }
`;

const Description = styled.div`
    display: flex;
    font-size: 1.2rem;
    justify-content: flex-start;
    align-items: flex-start;
    line-height: 1.7rem;
    word-spacing: 0.09rem;
    color: var(--text-color);
`;

const AboutIcon = styled.span`
    width: 1.5em;
    height: 1.5rem;
    margin-right: 0.5em;

    @media (max-width: 1024px) {
        width: max-content;
        height: 1.2rem;
        aspect-ratio: 1;
    }
`;

const TitleSection = styled.div`
    font-size: 1.9rem;
    font-weight: 500;
    margin-bottom: 3rem;
    color: var(--heading-color);
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

    @media (max-width: 1024px) {
        width: 20%;
        height: 20%;
    }

    @media (max-width: 480px) {
        width: 40%;
        height: 40%;
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

    @media (max-width: 480px) {
        width: 10%;
        text-align: justify;
    }
`;

const AboutExpBox = styled.div`
    display: flex;
    width: 85%;
    flex-direction: column;
    row-gap: 1rem;
    padding: 1.5rem 1rem;
    border-left: 3px solid var(--primary-color);
`;

const JobTitleSection = styled.h2`
    color: var(--text-color);
    font-size: 1.5rem;
    font-weight: 700;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    column-gap: 0.5rem;

    @media (max-width: 480px) {
        font-size: 1.3rem;
        column-gap: 0.3rem;
    }
`;

const JobDescription = styled.div`
    font-size: 1.2rem;
    font-weight: 400;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    line-height: 1.8rem;
    color: var(--secondary-color);
`;

const IconWrapper = styled.div`
    width: 35px;
    height: 35px;

    @media (max-width: 480px) {
        width: 50px;
        aspect-ratio: 1;
    }
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
    object-fit: fill;

    &:hover {
        box-shadow: 0 0 12px 0 var(--secondary-color);
        transition: 0.5s;
        transform: scale(1.01);
    }

    @media (max-width: 1024px) {
        width: 55%;
    }

    @media (max-width: 480px) {
        width: 96%;
        height: 200px;
        aspect-ratio: 1;
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
    object-fit: fill;

    @media (max-width: 1024px) {
        column-gap: 0.2rem;
    }

    @media (max-width: 480px) {
        flex-direction: column;
    }
`;

const ProjectInfoBox = styled.div`
    width: 50%;
    height: 290px;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 1024px) {
        width: 45%;
    }

    @media (max-width: 480px) {
        height: auto;
        width: 96%;
        padding: 1rem;
    }
`;

const ProjectTitle = styled.div`
    display: block;
    font-weight: 600;
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 0.6rem;
    color: var(--text-color);

    @media (max-width: 1024px) {
        font-size: 1.5rem;
    }
`;

const ProjectDescription = styled.div`
    display: block;
    font-size: 1.2rem;
    height: 200px;
    overflow: auto;
    color: var(--secondary-color);
    text-decoration: none;
    scrollbar-width: thin;
    scrollbar-color: var(--heading-color) transparent;

    @media (max-width: 1024px) {
        font-size: 1.1rem;
    }
`;

const ViewBtn = styled.a`
    text-decoration: none;
    color: var(--text-color);
    background-color: var(--primary-color);
    display: block;
    width: 100%;
    text-align: center;
    padding: 0.5rem;
    transition: 0.5s;
    border-radius: 0.3rem;

    &:hover {
        background-color: var(--primary-color-dark);
        cursor: pointer;
        transition: 0.5s;
    }
`;

const ViewLinks = styled.div`
    width: 60%;
    display: flex;
    column-gap: 1rem;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    @media (max-width: 1024px) {
        column-gap: 0.5rem;
        width: 70%;
    }
`;

const FooterSection = styled.footer`
    background-color: var(--secondary-background-color);
    width: 100%;
    padding: 0.5rem;
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const CopyRights = styled.p`
    color: var(--text-color);
    font-size: 1rem;
    margin: 0.5rem;
`;

const SymbolStyles = styled.span`
    position: static;
    width: 20px;
    height: 20px;

    &:hover {
        cursor: pointer;
        text-shadow: 0 0 10px white;
    }
`;

const ContactInfoWrapper = styled.div`
    background-color: var(--primary-background-color);
    color: var(--text-color);
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0.5rem;
    margin-bottom: 2rem;

    @media (max-width: 480px) {
        width: 100%;
        padding: 0.5rem;
    }
`;

const Info = styled.div`
    color: var(--text-color);
    font-size: 1.2rem;
    padding-top: 2rem;
    padding-bottom: 0.5rem;

    @media (max-width: 480px) {
        font-size: 1rem;
        padding: 0.8rem;
    }
`;

const EmailSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const EmailIconWrapper = styled.div`
    display: block;
    width: 1.5rem;
    height: 1.5rem;

    @media (max-width: 480px) {
        width: 1.3rem;
        height: 1.3rem;
    }
`;

const Email = styled.a`
    text-decoration: none;
    color: var(--secondary-color);
    font-size: 1.2rem;
    margin: 0.5rem;
    padding: 0.5rem;

    @media (max-width: 480px) {
        padding: 0.3rem;
    }
`;

const SocialMediaIconBox = styled.div`
    width: 100%;
    color: var(--text-color);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: ${({type}) => type === "contact" ? "1rem 2rem" : "1.5rem 0 0 0"};
`;

const SocialMediaIcon = styled.a`
    text-decoration: none;
    color: var(--text-color);
    width: ${({size}) =>
            size === "small" ? "1.5rem" :
                    size === "large" ? "3.5rem" :
                            "2rem"};
    height: ${({size}) =>
            size === "small" ? "1.5rem" :
                    size === "large" ? "3.5rem" :
                            "2rem"};
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition-duration: .5s;
    margin: 0.5rem;

    &:hover {
        background-color: var(--primary-color);
        transition-duration: .5s;
        transform: scale(1.09);
    }
`;

const NameBox = styled.div`
    color: var(--text-highlight-color);
    font-weight: 400;
    font-size: 1.3rem;
    //padding-top: 0.5rem;
`;

const GetInTouchButton = styled.button`
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.8rem;
    transition: background-color 0.3s;

    &:hover {
        background-color: var(--primary-color-dark);
    }
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
  ViewLinks,
  FooterSection,
  CopyRights,
  SymbolStyles,
  ContactSectionWrapper,
  ContactInfoWrapper,
  Info,
  Email,
  EmailSection,
  EmailIconWrapper,
  SocialMediaIcon,
  SocialMediaIconBox,
  NameBox,
  GetInTouchButton
};
