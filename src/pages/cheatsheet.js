import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { bpMaxSM, bpMaxMD, bpMinMD, bpMinLG } from '../utils/breakpoints'
import Layout from '../components/layout'
import Markdown from 'react-markdown'
import Masonry from 'react-masonry-component'

import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { MDXProvider } from '@mdx-js/tag'
import mdxComponents from '../components/mdx'

import AddDataToTable from '../../content/articles/cheatsheet/add-data-to-table.mdx'
import GetColumnData from '../../content/articles/cheatsheet/querying-data-from-table/get-column-data.mdx'
import GetSpecificColumnData from '../../content/articles/cheatsheet/querying-data-from-table/get-specific-column-data.mdx'

const MasonryGrid = styled(Masonry)({})

const Block = styled.div({
  // display: 'grid',
  // gridGap: '10px',
  // [bpMinMD]: {},
  // gridTemplateColumns: 'repeat(auto-fill, 100%)',
  // [bpMinLG]: {
  //   gridTemplateColumns: 'repeat(auto-fill, 453px)',
  // },
  [bpMinMD]: {
    width: '50%',
  },
  width: '100%',
  ['@media print']: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '10px',
    width: '100%',
    //maxWidth: '700px',
  },
})

const Title = styled(Markdown)({
  p: { fontSize: '21px', fontWeight: 500, color: 'hsla(0, 0%, 0%, 0.85)' },
  code: {
    padding: '3px 5px',
    borderRadius: '5px',
    fontSize: '80%',
    color: 'blue',
    background: '#f2f2f2',
    marginLeft: '5px',
  },
})

const Box = styled.div({
  margin: '5px',
  ['@media print']: { transform: 'scale(0.9)', padding: '20px' },
  padding: '25px',
  background: '#fff',
  border: '1px solid #F6F6F6',
  borderRadius: '8px',
  p: {
    fontSize: '16px',
    lineHeight: '1.5',
  },
  pre: {
    background: '#fafafa !important',
  },
  h3: {
    fontSize: '18px',
  },
})

export default function Cheatsheet({ data: { cheatsheets } }) {
  return (
    <Layout>
      <h4>Cheat Sheet</h4>
      <h2>
        SQL Fundamentals{' '}
        <small css={css({ fontSize: '60%' })}>by Tyler Clark</small>
      </h2>

      <br />
      {/* <Masonry>
        <Block>
          <Box>
            <AddDataToTable />
          </Box>
        </Block>
        <Block>
          <Box>
            <GetColumnData />
          </Box>
        </Block>
        <Block>
          <Box>
            <GetSpecificColumnData />
          </Box>
        </Block>
      </Masonry> */}
      <Masonry>
        {cheatsheets.edges.map(({ node: data }) => (
          <Block>
            <Box>
              <Title>{data.frontmatter.title}</Title>
              <MDXRenderer componetns={mdxComponents}>
                {data.code.body}
              </MDXRenderer>
            </Box>
          </Block>
        ))}
      </Masonry>
    </Layout>
  )
}

export const cheatsheetQuery = graphql`
  query {
    cheatsheets: allMdx(
      filter: { fields: { collection: { eq: "cheatsheets" } } }
      sort: { fields: fields___slug, order: ASC }
    ) {
      edges {
        node {
          id
          fields {
            slug
            collection
          }
          frontmatter {
            title
          }
          code {
            body
          }
        }
      }
    }
  }
`
