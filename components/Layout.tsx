import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import Header from './Header'
import Page from './Page'
interface Props {
  children?: ReactNode
}

const Container = styled.div`
  background-color: red;
  background-color: ${props => props.theme.color.background};
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`

const Layout: FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Page>
        <main>{children}</main>
      </Page>
    </Container>
  )
}

export default Layout
