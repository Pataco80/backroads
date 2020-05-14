// import { css } from 'styled-components'
//import { rgba } from 'polished'

// Colors Palette
export const setColor = {
  primaryColor: '#3fd0d4',
  mainWhite: '#fff',
  offWhite: '#f7f7f7',
  mainBlack: '#222',
  mainGrey: '#ececec',
  darkGrey: '#cfcfcf',
  grey: 'grey',
}

/*
// If project as theme, paste the variables and export in GlobalStyles
export const setTheme = {
  dark : {
  },
  light : {
    
  }
}*/


// Fonts Palette
export const setFont = {
  main: `font-family: 'Quicksand', sans-serif`,
  heading: `font-family: 'Poppins', sans-serif`
}

// If not use styled-queries, discoment this function media
/*
// Media Queries map sizes
const sizes = {
  large: 1200,
  desktop: 1024,
  tablet: 768,
  phone: 576,
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}rem) {
      ${css(...args)}
    }
  `
  return acc
}, {})
*/

// Unitie's Calc Functions
export const setPxToRem = (px = 16) => {
  return `${px / 16}rem`
}

// Layout's Functions
export const layout = (px = 1170) => {
  return `
    display:block;
    max-width:${setPxToRem(px)};
    margin: 0 auto;
    padding: 0 ${setPxToRem(8)};`
}



export const setFlex = ({ x = 'center', y = 'center', flDir = 'row'} = {}) => {
  return `display: flex;
  justify-content: ${x};
  align-items: ${y};
  flex-direction: ${flDir};
  `
}

// Images and Background's Functions
export const setLinearBcg = ({
  colStart = 'rgba(0, 0, 0, 0)',
  colEnd = 'rgba(0, 0, 0, 0)',
} = {}) => {
  return `background: linear-gradient(${colStart}, ${colEnd});
    opacity: 1 !important;
`
}

export const setImgBcg = ({
  size = 'cover',
  position = 'center',
  repeat = 'no-repeat',
} = {}) => {
  return `background-size: ${size} !important;
  background-position: ${position} !important;background-repeat: ${repeat} !important;
`
}

// Effect's Functions or props Object's
export const setLetterSpacing = (number = 4) => {
  return `letter-spacing: ${setPxToRem(number)}`
}

export const setBorder = ({
  size = 2,
  style = 'solid',
  color = 'var(--borders)',
} = {}) => {
  return `${setPxToRem(size)} ${style} ${color}`
}

export const setTransition = ({
  style = 'all',
  duration = 0.3,
  effect = 'linear',
} = {}) => {
  return `transition: ${style} ${duration}s ${effect}`
}

export const setShadow = {
  light: 'box-shadow: 2px 5px 3px 0px rgba(0,0,0,0.5)',
  dark: 'box-shadow: 4px 10px 5px 0px rgba(0,0,0,0.5)',
}
