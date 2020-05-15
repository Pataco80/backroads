import styled from 'styled-components'
import { Link } from 'gatsby'
import { media, layout, setFlex, setPxToRem, setColor, setTransition, setLetterSpacing } from '../../../styles/helpers'


export const NavbarWrapper = styled.nav`
  ${media.greaterThan('tablet')`
    padding:0 ${setPxToRem(24)};
  `}
`
 
export const NavbarContent = styled.div`
  ${layout()};
  ${media.greaterThan('tablet')`
    ${setFlex({x:'space-between',y:'stretch'})};
  `}
`

export const NavbarHeader = styled.div`
  ${setFlex({x:'space-between'})};

`
export const NavbarToggle = styled.button`
  background: transparent;
  border: none;
  outline: none;
  width:${setPxToRem(40)};
  color: ${setColor.primaryColor};
  font-size: ${setPxToRem(24)};

  &:hover {
    cursor: pointer;
  }

  ${media.greaterThan('tablet')`
    display:none;
  `}
`
export const NavbarNav = styled.ul`
  list-style-type: none;
  ${setTransition()};
  overflow: hidden;
  height:0;

  &.show-nav {
    height:${setPxToRem(216)};

    & a {
      opacity:1;
      transform: translate(0);
    }
  }

  ${media.greaterThan('tablet')`
    ${setFlex()};
    height:auto;
  `}
`

export const NavbarLinks = styled(Link)`
  display: block;
  opacity:0;
  transform: translate(100px);
  padding: ${setPxToRem(16)} ${setPxToRem(20)};
  text-decoration: none;
  text-transform: capitalize;
  color: ${setColor.mainBlack};
  ${setTransition({duration:0.5})};
  font-weight: bold;
  ${setLetterSpacing()};

  &:hover {
    color:${setColor.primaryColor};
  }

  ${media.greaterThan('tablet')`
  transform: translate(0);
  opacity:1
  `}
`

export const NavbarSocial = styled.ul`
  display:none;
  ${media.greaterThan('tablet')`
    ${setFlex()};
  `}

  & a {
    color: ${setColor.primaryColor};
    margin: 0 ${setPxToRem(8)};
    width: 1.3rem;
    ${setTransition()};

    &:hover {
      color: ${setColor.mainBlack};
      transform: translateY(-5px);
    }
  }
`