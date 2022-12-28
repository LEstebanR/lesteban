import { ReactNode, FC } from 'react'

interface Props {
  children?: ReactNode
}

const Page: FC<Props> = ({ children }) => {
  return (
    <div>{children}</div>
  )
}

export default Page
