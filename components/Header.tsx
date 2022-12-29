import React, { FC } from 'react'
import styled from 'styled-components'
import { MdSegment } from 'react-icons/md'
import { Logo } from '../styles/fonts'

const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const MenuIcon = styled(MdSegment)`
  color: ${props => props.theme.color.primary};
  font-size: ${props => props.theme.fontSize.large};
`

const LeftContent = styled.div``
const RigthContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 1rem;
`

const Header: FC = () => {
  return (
    <HeaderContainer>
      <LeftContent>
        <Logo>LE</Logo>
      </LeftContent>
      <RigthContent>
        <MenuIcon />
      </RigthContent>
    </HeaderContainer>
  )
}

export default Header
