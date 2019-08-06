import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import SEO from "../components/seo"
import { ThemeProvider } from "styled-components"
import theme from "../lib/theme"
import Layout from "../components/layout"
import { Box, Container, Text, Anchor } from "../components/styled"

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="Home" />
      <Container
        minHeight="90vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Box>
          <Text
            fontSize={["40px", "50px"]}
            as="h1"
            lineHeight={["50px", "60px"]}
          >
            Vojta<Text as="sup">(voy-tuh)</Text> is a designer and developer
            living in Czechia and working remotely for{" "}
            <Anchor to="https://egghead.io">egghead.io</Anchor>.
          </Text>
          <Box
            display="flex"
            flexDirection="column"
            paddingTop={3}
            lineHeight="1.5"
            fontSize={["25px", "30px"]}
            alignItems="flex-start"
          >
            <Anchor to="https://twitter.com/vjthlk">Twitter</Anchor>
            <Anchor to="https://github.com/vojtaholik">Github</Anchor>
            <Anchor to="https://dribbble.com/vjthlk">Dribbble</Anchor>
            <Anchor to="https://www.behance.net/vojtaholik">Behance</Anchor>
            <Anchor to="https://ello.co/paetos">Ello</Anchor>
          </Box>
        </Box>
      </Container>
      <Container>
        <Anchor to="mailto:vojta@8am.design">vojta@8am.design</Anchor>
      </Container>
    </Layout>
  </ThemeProvider>
)

export default IndexPage
