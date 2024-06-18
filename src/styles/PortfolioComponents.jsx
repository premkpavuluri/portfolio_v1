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
`

const NavBarContainer = styled.div`
    width: 100%;
    position: sticky;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: var(--secondary-background-color);
    top: 0;
    z-index: 100;
`

const NavBtn = styled.div`
    background-color: var(--secondary-background-color);
    color: var(--text-color);
    font-size: 1.1rem;
    width: 100%;
    height: 100%;
    padding: 1rem;
    
    &:hover {
        background-color: var(--primary-color);
        cursor: pointer;
    }
`;

export {
  PortfolioContainer,
  NavBarContainer,
  NavBtn
};