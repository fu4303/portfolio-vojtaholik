/** @jsx jsx */
import { jsx, Container, Styled } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "./seo"
import Header from "./header"
import { Box } from "@theme-ui/components"
import Footer from "./footer"
import "./reset.css"
import "../fonts/inter.css"
import "focus-visible"

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
    <Styled.root>
      <SEO
        {...props}
        card={props.card}
        description={props.excerpt}
        title={props.title}
      />
      <Header title={data.site.siteMetadata.title} />
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "100vh",
        }}
      >
        <Box as="main" sx={{ maxWidth: "850px", width: "100%", mx: "auto" }}>
          <Container sx={{ p: [3, 3, 4], pt: [5, 5, 4] }}>
            {props.children}
          </Container>
        </Box>
        <Footer />
      </div>
    </Styled.root>
  )
}
