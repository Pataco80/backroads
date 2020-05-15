import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'
import * as S from './HeroStyled'

const getBcgImage = graphql`
  {
      heroBcg:file(relativePath: {eq: "defaultBcg.jpeg"}) {
        childImageSharp {
          fluid {
            srcSet
          }
        }
      }
    }
`

const Hero = ({children}) => {
  const heroImage = useStaticQuery(getBcgImage)
  return (
    <S.HeroWrapper>
      <BackgroundImage bcgImage className="bcgImage" fluid={heroImage.heroBcg.childImageSharp.fluid}>
        {children}
      </BackgroundImage>
    </S.HeroWrapper>
  )
}

export default Hero
