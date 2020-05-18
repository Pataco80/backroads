import styled from 'styled-components'
import { media, layout, setPxToRem, setBorder, setShadow, setColor, setFlex } from '../../../styles/helpers'

export const AboutContent = styled.div`
  ${layout()};
  width: 80vw;
  margin: 0 auto;

  ${media.greaterThan('tablet')`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${setPxToRem(48)};
    align-items: center;
    margin-top: ${setPxToRem(48)};
  `}

  ${media.greaterThan('tablet')`
    width: 95vw;
  `}
  
  img {
    z-index: 2;
    width: 100%;
    display: block;
    ${setShadow.light};

    ${media.greaterThan('tablet')`
      max-height: ${setPxToRem(500)};
    `}
  }  
`

export const ArticleImage = styled.article`
  position:relative;
  z-index:1;
  margin: ${setPxToRem(48)} 0;

  ${media.greaterThan('tablet')`
    margin: 0;
  `}
`

export const ImageFramed = styled.span`
  z-index:1;

  ${media.greaterThan('lgTablet')`
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border: 3px solid blue;
      border: ${setBorder({size:3,color:setColor.primaryColor})};
      box-sizing: border-box;
      top: ${setPxToRem(-16)};
      left: ${setPxToRem(-16)};
      z-index: -1;
    }
  `}
`

export const ArticleInfo = styled.article`
  ${setFlex({flDir:'column'})};
  margin-top: ${setPxToRem(48)};
  text-align:center;
  ${media.greaterThan('tablet')`
    margin: 0;
  `}

  p {
    ${media.greaterThan('tablet')`
      width: 80%;
      margin-bottom: ${setPxToRem(16)};
    `}
  }

  button {
    margin-top:${setPxToRem(12)};
    ${media.greaterThan('tablet')`
      align-self: flex-end;
      margin-right:10%;
    `}
  }  
`

export const InfoTitle = styled.h4`
  font-size: ${setPxToRem(34)};
  text-transform: uppercase;
`