import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Link from '../components/link'
import Img from 'gatsby-image'

export default function Screenshots({ data: { images } }) {
  return (
    <Main>
      <h1>Screenshots Index</h1>
      <h2>Images</h2>
      {images.edges.map(({ node: data }) => (
        <div>
          <Img
            key={data.id}
            title={data.name}
            alt={data.name}
            sizes={data.childImageSharp.sizes}
          />
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
  query ScreenshotsPageQuery {
    images: allFile(
      filter: {
        extension: { regex: "/(jpeg|jpg|gif|png)/" }
        sourceInstanceName: { eq: "screenshots" }
      }
    ) {
      edges {
        node {
          name
          childImageSharp {
            sizes(maxWidth: 2000) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
