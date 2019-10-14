import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import SEO from "../components/seo"
import { Box, Container, Text, Anchor } from "../components/styled"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Container
      minHeight="90vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Box>
        <Text fontSize={["40px", "50px"]} as="h1" lineHeight={["50px", "60px"]}>
          Vojta<Text as="sup">(voy-tuh)</Text> is a designer and developer
          living in Czechia and working remotely at{" "}
          <Anchor to="https://egghead.io">egghead.io</Anchor>.
        </Text>
        <Box
          display="flex"
          flexDirection="column"
          lineHeight="1.5"
          fontSize={["25px", "30px"]}
          alignItems="flex-start"
          mb={5}
        >
          <Anchor to="https://twitter.com/vjthlk">Twitter</Anchor>
          <Anchor to="https://github.com/vojtaholik">GitHub</Anchor>
          <Anchor to="https://dribbble.com/vjthlk">Dribbble</Anchor>
          <Anchor to="https://www.behance.net/vojtaholik">Behance</Anchor>
          <Anchor to="https://ello.co/paetos">Ello</Anchor>
        </Box>
      </Box>
    </Container>
    <Container>
      <Anchor pb={4} to="mailto:vojta@8am.design">
        vojta@8am.design
      </Anchor>
    </Container>
  </>
)

export default IndexPage
