/** @jsx jsx */
import { Link, graphql } from "gatsby"
import { jsx, Styled } from "theme-ui"
import Layout from "../components/layout"

import { Link as StyledLink, Text } from "@theme-ui/components"

const IndexPage = ({
  data: {
    site: { siteMetadata },
    allBlogPost,
  },
}) => {
  return (
    <Layout {...siteMetadata}>
      <Styled.h1 sx={{ mt: "6px" }}>Hi,</Styled.h1>
      <Text>
        My name is {siteMetadata.author} and I&apos;m a designer and coder at{" "}
        <StyledLink href="https://egghead.io/">egghead.io</StyledLink>. I live
        in and work remotely from{" "}
        <StyledLink href="https://en.wikipedia.org/wiki/Brno-City_District#/media/File:Brno_View_from_Spilberk_128.JPG">
          Brno
        </StyledLink>
        . This is my personal site where I share notes and articles about things
        I&apos;m interested in.
      </Text>
      <Styled.h3 sx={{ mt: 4, mb: 2 }}>Latest Posts</Styled.h3>
      <ul>
        {allBlogPost.nodes.map(post => (
          <li key={post.id} sx={{ lineHeight: 1.25, my: 1 }}>
            <StyledLink as={Link} to={post.slug}>
              {post.title}
            </StyledLink>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const homepageQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    allBlogPost(
      sort: { fields: date, order: DESC }
      filter: { published: { eq: true } }
    ) {
      nodes {
        title
        slug
        id
      }
    }
  }
`

export default IndexPage
