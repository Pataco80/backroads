import React from 'react'
import Navbar from '../Navbar/Navbar.js'
import Footer from '../Footer/Footer'

import styled from 'styled-components'
import GlobalStyles from '../../../styles/globalStyles'
import {setFlex} from '../../../styles/helpers'

const Layout = ({children, className}) => {
  return (
    <div className={className}>
    <GlobalStyles/>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default styled(Layout)`
  min-height:100vh;
  ${setFlex({flDir:'column',y:'auto'})};
`
