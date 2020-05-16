import React from "react"
import Layout from '../components/Globals/Layout/Layout'
import Hero from '../components/Hero'
import Banner from '../components/Banner/Banner'
import {GatsbyLink} from '../components/Button'
export default () => (
  <Layout>
    <Hero>
      <Banner title="Continue Exploring" info="In consectetur sunt qui est ex pariatur nostrud aute quis consequat nostrud.">
        <GatsbyLink to="/tours/" outline>View All Tours</GatsbyLink>
      </Banner>
    </Hero>
    <h1>Hello world!</h1> 
  </Layout>
)