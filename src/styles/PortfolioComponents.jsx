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

    &:hover {
        background-color: var(--primary-color);
        cursor: pointer;
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

const AboutCard = styled.div`
    color: var(--text-color);
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    padding: 5rem 0;
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
    background-color: var(--primary-color);
    display: block;
    height: 250px;
    width: 250px;
    border-radius: 50%;
    aspect-ratio: 1;
    margin: 0 auto;
`;

const DescriptionBox = styled.div`
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 1rem;
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
    margin-left: 0.1em;
    font-size: 1.5rem;
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
  LocationText
};