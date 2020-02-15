/** @jsx jsx */
import React from "react"
import { jsx, Container } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "./seo"
import Header from "./header"
import { Box } from "@theme-ui/components"
import Footer from "./footer"
import "./reset.css"
import "focus-visible"
import "../fonts/inter.css"

export default function Layout(props) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return (
    <>
      <SEO {...props} card={props.card} description={props.excerpt} />
      <Header title={data.site.siteMetadata.title} />
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: ["90vh", "90vh", "90vh", "100vh"],
        }}
      >
        <Box as="main" sx={{ maxWidth: "850px", width: "100%", mx: "auto" }}>
          <Container sx={{ p: [3, 3, 4], pt: [5, 5, 4] }}>
            {props.children}
          </Container>
        </Box>
        <Footer />
      </div>
    </>
  )
}
