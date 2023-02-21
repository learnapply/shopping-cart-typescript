import * as styled from "styled-components";

const GlobalStyle = styled.createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "Roboto", sans-serif;
  }

  body {
    height: 100vh;
    background-color: #ebebeb;
  }

  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;
export default GlobalStyle;
