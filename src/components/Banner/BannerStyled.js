import styled from 'styled-components'
import { setLetterSpacing, setColor, media, setPxToRem } from '../../styles/helpers'
export const BannerWrapper = styled.section`
  text-align: center;
  ${setLetterSpacing()};
  color: ${setColor.mainWhite};

  h1 {
    font-size:${setPxToRem(52)};
    text-transform:uppercase;
    margin-bottom:${setPxToRem(32)};
    padding: 0 ${setPxToRem(16)};
    ${setLetterSpacing(6)};

    ${media.greaterThan('tablet')`
      font-size: ${setPxToRem(72)};
    `}
  }

  p {
    width: 85%;
    margin: 0 auto ${setPxToRem(32)};

    ${media.greaterThan('tablet')`
      width: 70%;
    `}

  }
`