import { createGlobalStyle } from "styled-components";
import pokeballBg from "../assets/pokeball-bg.png";
//TODO: background
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Pokemon Solid', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${({ theme }) => theme.colors.background};
    //background: linear-gradient(
    //  135deg, 
    //  ${({ theme }) => theme.colors.gradientStart} 0%,
    //  ${({ theme }) => theme.colors.gradientEnd} 100%
    //);
    //min-height: 100vh;
    //background-image: url(${pokeballBg});
    //background-repeat: repeat;
    //background-size: 500px;
    //background-blend-mode: soft-light;
  }
`;
