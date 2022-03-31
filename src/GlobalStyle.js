import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.backgroundColor}
    margin: ${({ theme }) => theme.space[0]};
    padding: ${({ theme }) => theme.space[0]};
  }
`

export default GlobalStyle;
