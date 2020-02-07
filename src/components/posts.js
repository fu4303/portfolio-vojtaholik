/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { Link as StyledLink } from "@theme-ui/components"
import Layout from "./layout"

export default ({ posts, ...props }) => {
  console.log(posts)
  return (
    <Styled.root>
      <Layout title="Posts" {...props}>
        <Styled.h1>All Posts</Styled.h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <StyledLink as={Link} to={post.slug}>
                {post.title}
              </StyledLink>
            </li>
          ))}
        </ul>
      </Layout>
    </Styled.root>
  )
}
