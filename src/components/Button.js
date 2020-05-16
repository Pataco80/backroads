import styled, {css} from 'styled-components'
import { Link } from 'gatsby'
import { darken } from 'polished'

import { setLetterSpacing, setColor, setBorder, setTransition } from '../styles/helpers'

const ButtonStyles = css`
text-transform: uppercase;
  text-decoration: none;
  ${setLetterSpacing()};
  padding: 0.9rem 1.6rem;
  display: inline-block;
  ${setTransition()};
  cursor: pointer;
  
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
    background:none;
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

