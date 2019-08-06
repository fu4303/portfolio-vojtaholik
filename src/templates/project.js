import React from "react"
import { graphql } from "gatsby"
import { Container } from "../components/styled"
import { MDXRenderer } from "gatsby-plugin-mdx"

function ProjectTemplate({ data: { mdx } }) {
  return (
    <Container>
      <h1>
        {mdx.frontmatter.title}
        <MDXRenderer>{mdx.body}</MDXRenderer>
        {/* <MDXRenderer>{mdx.body}</MDXRenderer> */}
      </h1>
    </Container>
  )
}

export default ProjectTemplate

export const projectQuery = graphql`
  query ProjectQuery($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
      }
    }
  }
`
