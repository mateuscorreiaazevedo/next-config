import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({theme})=>theme.colors.background};
    color: ${({theme})=>theme.colors.text};
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }
`
