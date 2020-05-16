import styled, {css} from 'styled-components'
import { Link } from 'gatsby'
import { darken } from 'polished'

import { setLetterSpacing, setColor, setBorder, setTransition, setPxToRem } from '../styles/helpers'

const ButtonStyles = css`
  text-transform: uppercase;
  text-decoration: none;
  ${setLetterSpacing()};
  padding: ${setPxToRem(14)} ${setPxToRem(26)};
  display: inline-block;
  ${setTransition()};
  cursor: pointer;
  background:none;

  
  ${({ primary }) => primary && `
    color: ${setColor.mainWhite};
    border: ${setBorder({color:setColor.primaryColor})};
    background:${setColor.primaryColor};
  `}

  ${({ primaryOutline }) => primaryOutline && `
    color: ${setColor.primaryColor};
    border: ${setBorder({color:setColor.primaryColor})};
  `}

  ${({ outline }) => outline && `
    color: ${setColor.mainWhite};
    border: ${setBorder({size:2,color:setColor.mainWhite})};
  `}

  &:hover {
    ${({ primary,primaryOutline }) => (primary || primaryOutline) && `
      color: ${setColor.mainWhite};
      border: ${setBorder({color:darken(0.2, setColor.primaryColor)})};
      background:${darken(0.2, setColor.primaryColor)};
    `}

    ${({ outline }) => outline && `
      background: ${setColor.mainWhite};
      color: ${setColor.primaryColor};
    `}
  }
`

export const Button = styled.button`
  ${ButtonStyles};
`
export const ButtonLink = styled.a`
  ${ButtonStyles};
`

export const GatsbyLink = styled(Link)`
  ${ButtonStyles};
`

