import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;

    ::after,
    ::before {
      box-sizing: border-box;
    }
  }


  body {
    font-family: "Onest", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
  }

  html, body {
    height: 100%;
  }
`

export default GlobalStyle
