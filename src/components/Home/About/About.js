import React from 'react'
import Section from '../../Globals/Section'
import Title from '../../Title'
import * as S from './AboutStyled'
import img from '../../../images/defaultBcg.jpeg'
import { Button } from '../../Button'

const About = () => {
  return (
    <Section>
      <Title title="About" subTitle="Us" />
      <S.AboutContent>
        <S.ArticleImage>
          <S.ImageFramed/>
            <img src={img} alt="Explore the difference" />
          </S.ArticleImage>
        <S.ArticleInfo>
          <S.InfoTitle>Explore the difference</S.InfoTitle>
          <p>Id adipisicing fugiat velit mollit eu consequat velit. Consequat deserunt laboris aute aliqua.</p>
          <p>Adipisicing esse esse id ut anim laborum elit laborum. Nulla aute non ex adipisicing veniam nostrud exercitation velit.</p>
          <Button primary >Read More</Button>
        </S.ArticleInfo>
      </S.AboutContent>
    </Section>
  )
}

export default About
