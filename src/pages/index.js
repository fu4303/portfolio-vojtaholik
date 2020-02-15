/** @jsx jsx */
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { jsx, Styled } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link as StyledLink, Text } from "@theme-ui/components"
import { motion } from "framer-motion"

const IndexPage = ({
  data: {
    site: { siteMetadata },
    allBlogPost,
  },
}) => {
  return (
    <Styled.root>
      <SEO title="Welcome" />
      <Layout {...siteMetadata} title="Welcome">
        <motion.div
          initial={{ y: -10 }}
          animate={{
            y: 0,
            transition: {
              ease: "easeOut",
              duration: 0.3,
              type: "spring",
            },
          }}
        >
          <Styled.h1>Hi,</Styled.h1>

          <Text>
            My name is {siteMetadata.author} and I&apos;m a designer and coder
            at <StyledLink href="https://egghead.io/">egghead.io</StyledLink>. I
            live and work remotely from{" "}
            <StyledLink href="https://en.wikipedia.org/wiki/Brno-City_District#/media/File:Brno_View_from_Spilberk_128.JPG">
              Brno
            </StyledLink>
            . This is my personal site where I share notes and articles about
            things I&apos;m interested in.
          </Text>
        </motion.div>
        {/* <Text mt="2">
            You can follow me on{" "}
            <StyledLink href={"https://twitter.com/vjthlk"}>Twitter</StyledLink>
            .
          </Text> */}
        <motion.div
          initial={{ y: -10 }}
          animate={{
            y: 0,
            transition: {
              delay: 0.1,
              ease: "easeOut",
              duration: 0.3,
              type: "spring",
            },
          }}
        >
          <Styled.h3 sx={{ mt: 4, mb: 2 }}>Latest Posts</Styled.h3>
          <ul>
            {allBlogPost.nodes.map(post => (
              <li key={post.id}>
                <StyledLink as={Link} to={post.slug}>
                  {post.title}
                </StyledLink>
              </li>
            ))}
          </ul>
        </motion.div>
      </Layout>
    </Styled.root>
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
    allBlogPost(sort: { fields: date, order: ASC }) {
      nodes {
        title
        slug
        id
      }
    }
  }
`

export default IndexPage
