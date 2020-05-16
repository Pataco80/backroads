import React from 'react'
import styled from 'styled-components'
import { media, setColor, setPxToRem, setLetterSpacing } from '../styles/helpers'

const Title = ({title,subTitle,className}) => {
  return (
    <h4 className={className}>
      <span>{title}</span>
      <span>{subTitle}</span>
    </h4>
  )
}

export default styled(Title)`
  text-transform:uppercase;
  font-size:${setPxToRem(36)};
  margin-bottom:${setPxToRem(32)};
  color:${setColor.primaryColor};
  text-align:center;
  ${setLetterSpacing(7)};

  span{
    display:block;

    ${media.greaterThan('smTablet')`
      display:inline-block;
      margin: 0 ${setPxToRem(5)};
    `}

    &:last-child {
      color:${setColor.mainBlack};
    }
  }
`
