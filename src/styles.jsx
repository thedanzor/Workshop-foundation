import styled from 'styled-components'
import { createTheme } from '@material-ui/core/styles'
import { createGlobalStyle } from 'styled-components'

export default styled.div`
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  div {
    display: block;
  }

  div {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  ul,
  li {
    list-style: none;
    padding: 0;
  }
`

export const materialUiTheme = () => {
  const theme = createTheme({
    overrides: {}
  })

  return theme
}

// Global styling
export const GlobalStyle = createGlobalStyle`
  body, html {
    padding: 0 !important;
    margin: 0 !important;
  }

  @media screen and (min-width: 1900px) {
    body, html {
      font-size: 0.8vw;
    }
  }
`
