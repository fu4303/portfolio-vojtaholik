import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { bpMaxSM, bpMaxMD, bpMinMD, bpMinLG } from '../utils/breakpoints'
import Layout from '../components/layout'
import Markdown from 'react-markdown'
import Masonry from 'react-masonry-component'
import { isEmpty } from 'lodash'

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
  p: {
    fontSize: '21px',
    fontWeight: 600,
    color: 'hsla(0, 0%, 0%, 0.85)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  strong: {
    fontSize: '60%',
    color: '#2AB064',
    textTransform: 'uppercase',
    //marginLeft: '8px',
  },
  code: {
    fontWeight: 300,
    padding: '2px 8px',
    borderRadius: '5px',
    fontSize: '75%',
    color: 'blue',
    background: '#f2f2f2',
    //marginLeft: '8px',
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
  [bpMinLG]: {
    '.display-on-hover': {
      opacity: 0,
    },
  },
  ':hover': {
    '.display-on-hover': {
      opacity: 0.7,
    },
  },
})

const EditOnGithub = styled.a({
  fontSize: '12px',
  position: 'absolute',
  transform: 'translateY(-5px)',
  color: 'hsla(0, 0%, 0%, 0.7)',
})

export default function Cheatsheet({ data: { cheatsheets } }) {
  return (
    <Layout background="#f1f1f1">
      <div style={{ textAlign: 'left' }}>
        <h5 style={{ margin: 0 }}>Cheat Sheet</h5>
        <h3 style={{ margin: '0 0 20px' }}>
          SQL Fundamentals{' '}
          <small css={css({ fontSize: '60%' })}>by Tyler Clark</small>
        </h3>
      </div>
      <Masonry>
        {cheatsheets.edges.map(({ node: data }) => (
          <Block>
            <Box>
              {!isEmpty(data.frontmatter.title) && (
                <Title>{data.frontmatter.title}</Title>
              )}
              <MDXRenderer componetns={mdxComponents}>
                {data.code.body}
              </MDXRenderer>
              <EditOnGithub
                className="display-on-hover"
                href={`https://github.com/vojtaholik/vojta-io/tree/master/content/${data.fields.slug.substring(
                  0,
                  data.fields.slug.length - 1
                )}.mdx`}>
                Edit on GitHub
              </EditOnGithub>
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