import React from 'react'
import * as S from './BannerStyled'
const Banner = ({title,info,children}) => {
  return (
    <S.BannerWrapper>
      <h1>{title}</h1>
      <p>{info}</p>
      {children}
    </S.BannerWrapper>
  )
}

export default Banner
