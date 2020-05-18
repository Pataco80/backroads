import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

import styled from 'styled-components'
import { media, setPxToRem } from '../styles/helpers'

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

const Hero = ({children,className}) => {
  const heroImage = useStaticQuery(getBcgImage)
  return (
    <header className={className}>
      <BackgroundImage bcgImage className="bcgImage" fluid={heroImage.heroBcg.childImageSharp.fluid}>
        {children}
      </BackgroundImage>
    </header>
  )
}

export default styled(Hero)`
  .bcgImage {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - ${setPxToRem(40)});
    background: linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7));
    opacity: 1 !important;

    ${media.greaterThan('tablet')`
      min-height: calc(100vh - ${setPxToRem(54)});
    `}
  }
`
