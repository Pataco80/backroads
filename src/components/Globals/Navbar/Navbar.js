import React, {useState} from 'react'
import links from '../../Constants/links'
import socialLinks from '../../Constants/socialLinks'
import logo from '../../../images/logo.svg'
import { MenuAlt3 } from '@styled-icons/heroicons-outline/MenuAlt3' 
import * as S from './NavbarStyled'
const Navbar = () => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
    console.log(isOpen)
  }

  return (
    <S.NavbarWrapper>
      <S.NavbarContent>
        <S.NavbarHeader>
          <img src={logo} alt="Backroads Logo" />
          <S.NavbarToggle onClick={toggleNav}>
            <MenuAlt3/>
          </S.NavbarToggle>
        </S.NavbarHeader>
        <S.NavbarNav className={isOpen ? `show-nav`:``}>
         {
           links.map((link,index) => {
             return (
               <li>
                 <S.NavbarLinks Key={index} to={link.path}>{link.label}</S.NavbarLinks>
               </li>
             )
           })
         }
        </S.NavbarNav>
        <S.NavbarSocial>
          {
            socialLinks.map((link,index) => {
              return(
                  <a key={index} href={link.url}>{link.icon}</a>
              )
            })
          }
        </S.NavbarSocial>
      </S.NavbarContent>
    </S.NavbarWrapper>
  )
}

export default Navbar
