import React from 'react'
import links from '../../Constants/links'
import socialLinks from '../../Constants/socialLinks'

import * as S from './FooterStyled'
const Footer = () => {
  return (
    <S.FooterWrapper>
      <nav>
        <S.FooterNav>
          {
           links.map((link,index) => {
             return (
               <li>
                 <S.FooterNavLink Key={index} to={link.path}>{link.label}</S.FooterNavLink>
               </li>
             )
           })
         }
        </S.FooterNav>
        <S.FooterSocial>
          {
            socialLinks.map((link,index) => {
              return(
                  <a key={index} href={link.url}>{link.icon}</a>
              )
            })
          }
        </S.FooterSocial>
      </nav>
        <S.Copyright>Copyright &copy; Backroads Travel Compagny {new Date().getFullYear()} - All Right Reserved</S.Copyright>
    </S.FooterWrapper>
  )
}

export default Footer
