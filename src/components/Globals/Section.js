import styled,{css} from 'styled-components'
import { setPxToRem, setColor } from '../../styles/helpers'


const SectionWrapper = css`
  padding: ${setPxToRem(64)} 0;
  background-color: ${setColor.mainWhite};

  ${({ primary }) => primary && `
    background:${setColor.primaryColor};
  `}

  ${({ black }) => black && `
    background:${setColor.mainBlack};
  `}

  ${({ grey }) => grey && `
    background:${setColor.mainGrey};
  `}
`

const Section = styled.section`
  ${SectionWrapper}
`

export default Section