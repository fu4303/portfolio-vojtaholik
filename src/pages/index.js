/** @jsx jsx */
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { jsx, Styled } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link as StyledLink, Text } from "@theme-ui/components"
import { motion, AnimatePresence } from "framer-motion"

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
        <AnimatePresence>
          <motion.div
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            exit={{ y: -10 }}
            transition={{ type: "spring", damping: 300 }}
          >
            <Styled.h1>Hi there,</Styled.h1>
            <Text>
              My name is {siteMetadata.author} and I'm a designer and coder at{" "}
              <StyledLink href={"https://egghead.io/"}>egghead.io</StyledLink>.
              I live and work remotely from{" "}
              <StyledLink href={"https://en.wikipedia.org/wiki/Brno"}>
                Brno, Czech Republic
              </StyledLink>
              . This is my personal site where I share notes and articles about
              things I'm interested in.
            </Text>
            <Text mt="2">
              You can follow me on{" "}
              <StyledLink href={"https://twitter.com/vjthlk"}>
                Twitter
              </StyledLink>
              .
            </Text>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            initial={{ y: -5 }}
            animate={{ y: 0 }}
            exit={{ y: -5 }}
            transition={{ delay: 0.2, type: "spring", damping: 300 }}
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
        </AnimatePresence>
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
