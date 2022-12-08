import React, {FC, ReactNode} from 'react'

type OptionNavbar = {
  id: number,
  label: string,
  link: string,
}

const options: OptionNavbar[] = [
  {
    id: 1,
    label: 'About',
    link: "#"
  },
  {
    id: 2,
    label: 'Experience',
    link: "#"
  },
  {
    id: 3,
    label: 'Contact',
    link: "#"
  }
]

const Header: FC = () => {
  return (
    <p>Header</p>
  )
}

export default Header;