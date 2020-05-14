import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { setColor, setFont, setPxToRem, setLetterSpacing } from '../styles/helpers'

const GlobalStyles = createGlobalStyle`
${reset}
@import url("https://fonts.googleapis.com/css?family=Lato|Poppins");
body {
  ${setFont.main};
  color: ${setColor.mainBlack};
  line-height: 1.4;
  font-size: ${setPxToRem(16)};
}
h1, h2, h3, h4, h5, h6 {
  ${setFont.heading};
  margin-bottom:${setPxToRem(20)};
  ${setLetterSpacing()};
}
a {
  text-decoration:none;
}
`

export default GlobalStyles