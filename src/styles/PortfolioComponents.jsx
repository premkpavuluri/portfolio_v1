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
    font-family: sans-serif;
`

const NavBarContainer = styled.div`
    width: 100%;
    position: sticky;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    background-color: var(--secondary-background-color);
    top: 0;
    z-index: 100;
`

export {PortfolioContainer, NavBarContainer};