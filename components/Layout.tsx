import React, {FC, ReactNode} from 'react'
import Header from './Header'
import Footer from './Footer'
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
      <Footer />
    </>
  )
}

export default Layout;