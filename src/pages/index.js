import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Link from '../components/link'

export default function Index({ data: { projects, articles, screenshots } }) {
  return (
    <Main>
      <h1>Index page</h1>
      <h2>Projects</h2>
      {projects.edges.map(({ node: data }) => (
        <div>
          <h3>
            <Link to={data.fields.slug}>{data.frontmatter.title}</Link>
          </h3>
        </div>
      ))}
      <h2>Articles</h2>
      {articles.edges.map(({ node: data }) => (
        <div>
          <h3>
            <Link to={data.fields.slug}>{data.frontmatter.title}</Link>
          </h3>
        </div>
      ))}
      <h2>Screenshots</h2>
      {screenshots.edges.map(({ node: data }) => (
        <div>
          <h3>
            <Link to={data.fields.slug}>{data.frontmatter.title}</Link>
          </h3>
        </div>
      ))}
    </Main>
  )
}

const Main = styled.main`
  margin: 0 auto;
  max-width: 500px;
  padding: 50px 10px;
  h2 {
    margin-top: 2em;
  }
  h3 {
    font-size: 24px;
    line-height: 1;
  }
`

export const pageQuery = graphql`
  query IndexPageQuery {
    projects: allMdx(
      sort: { order: ASC, fields: fields___slug }
      filter: { fields: { collection: { eq: "projects" } } }
    ) {
      edges {
        node {
          id
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          fields {
            collection
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    articles: allMdx(
      sort: { order: ASC, fields: fields___slug }
      filter: { fields: { collection: { eq: "articles" } } }
    ) {
      edges {
        node {
          id
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          fields {
            collection
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    screenshots: allMdx(
      sort: { order: ASC, fields: fields___slug }
      filter: { fields: { collection: { eq: "screenshots" } } }
    ) {
      edges {
        node {
          id
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          fields {
            collection
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
