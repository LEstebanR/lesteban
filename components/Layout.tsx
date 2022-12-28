import { FC, ReactNode } from 'react'
import Header from './Header'
import Page from './Page'
interface Props {
  children?: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Page>
        <main>{children}</main>
      </Page>
    </>
  )
}

export default Layout
