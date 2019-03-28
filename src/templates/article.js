import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Layout from '../components/layout'
import { bpMinLG } from '../utils/breakpoints'
import Link from '../components/link'

class ArticleTemplate extends React.Component {
  render() {
    const article = this.props.data.mdx
    return (
      <Layout>
        <div
          css={css`
            font-size: 15px;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 40px;
            opacity: 0.7;
            margin-top: 20px;
          `}>
          <Link to="/">HOME</Link> / ARTICLES /{' '}
          {article.frontmatter.title && article.frontmatter.title}
        </div>
        <hr />
        <MDXRenderer>{article.code.body}</MDXRenderer>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query ArticleQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
      }
      fields {
        collection
      }
      code {
        body
      }
    }
  }
`

export default ArticleTemplate
