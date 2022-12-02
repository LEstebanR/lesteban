import React, {FC, ReactNode} from 'react'
import { Navbar, Link, Button  } from "@nextui-org/react";

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
    <Navbar isBordered variant={"floating"}>
      <Navbar.Brand>
        Logo
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight hideIn="xs">
        {options.map((option) => { return(
          <Navbar.Link color="primary" href={option.link} key={option.id}>
            0{option.id}. {option.label}
          </Navbar.Link>
        )

        })}
        <Button bordered size="md">CV</Button>
      </Navbar.Content>
      <Navbar.Toggle aria-label="toggle navigation" showIn="xs"/>
      <Navbar.Collapse>
        {options.map((option, index) => {
          return (
            <Navbar.CollapseItem key={index}>
              <Link
                key={option.id}
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href={option.link}
              >
                {option.label}
              </Link>
            </Navbar.CollapseItem>

          )
        })}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;