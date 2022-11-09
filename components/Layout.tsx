import React, {FC} from 'react'

import Header from './Header'
import Footer from './Footer'
import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Layout: FC<Props> = ({ children }) => {

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;