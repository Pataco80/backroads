import React from 'react'
import Layout from '../components/Globals/Layout/Layout'
import Banner from '../components/Banner/Banner'
import {GatsbyLink} from '../components/Button'

import styled from 'styled-components'
import {setFlex,setColor} from '../styles/helpers'

const error = ({className}) => {
  return (
    <Layout>
      <header className={className}>
        <Banner title="Oops It's Dead End">
          <GatsbyLink outline to="/">Back to Home Page</GatsbyLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default styled(error)`
  ${setFlex({flDir:'column'})}
  background: ${setColor.primaryColor};
  min-height: calc(100vh - 54px);
`
 