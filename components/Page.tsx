import { ReactNode, FC } from "react"

import { Container, Col } from "@nextui-org/react"
import SocialNetworks from "./SocialNetworks"

interface Props {
  children?: ReactNode
}

const Page: FC<Props> = ({children}) => {
  return (
    <Container
      direction="row"
      css={{
        display: "flex",
        flexDirection: "row",
        border: "1px solid white",
        height: "500px"
      }}
    >
      <Col>
      
      </Col>
      <SocialNetworks/>
      <Container>
        <main>{children}</main>
        <p>a</p>
      </Container>
    </Container>
  )
}

export default Page