import styled from 'styled-components'
import { Link } from 'gatsby'
import { media, layout, setFlex, setPxToRem, setColor, setTransition, setLetterSpacing } from '../../../styles/helpers'

export const FooterWrapper = styled.footer`
  ${setFlex({flDir:'column',x:'center'})};
  margin-top: auto;
  background: ${setColor.mainBlack};
  padding: ${setPxToRem(36)};
  color: ${setColor.mainWhite};
`

export const FooterNav = styled.ul`
  ${setFlex({x:'center'})};
  flex-wrap:wrap;
  list-style:none;
`

export const FooterNavLink = styled(Link)`
  display:inline-block;
  text-decoration: none;
  text-transform: uppercase;
  color: ${setColor.mainWhite};
  padding: ${setPxToRem(8)} ${setPxToRem(16)};
  letter-spacing: ${setLetterSpacing()};
  transition: ${setTransition()};
  font-weight: bold;

  &:hover {
    color:${setColor.primaryColor};
  }
`

export const FooterSocial = styled.ul`
  ${setFlex({x:'center'})};

  & a {
    width:${setPxToRem(24)};
    color: ${setColor.mainWhite};
    margin: ${setPxToRem(16)};
    ${setTransition()};

    &:hover {
    color:${setColor.primaryColor};
  }
  }
`

export const Copyright = styled.p`
  text-transform: capitalize;
  letter-spacing: ${setLetterSpacing()};
  line-height: 2;
  text-align:center;
  margin-top:${setPxToRem(8)}
`