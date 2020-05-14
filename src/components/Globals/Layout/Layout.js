import React from 'react'
import Navbar from '../Navbar/Navbar.js'
import Footer from '../Footer/Footer'
import GlobalStyles from '../../../styles/globalStyles'
const Layout = ({children}) => {
  return (
    <>
    <GlobalStyles/>
      <Navbar/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout
