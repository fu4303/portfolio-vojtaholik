import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Link from '../components/link'
import Img from 'gatsby-image'

// pouzit grid, zvazit jine jmeno - je to prace jinych??...

export default function Screenshots({ data: { images } }) {
  var regex = /hello/
  var str = 'hello world'
  var result = regex.test(str)
  return (
    <Main>
      <h1>Screenshots Index</h1>
      <p>
        Collection of stuff I like and grabbed a screenshot of to remember and
        learn from.
      </p>
      <h2>Images</h2>
      {images.edges.map(({ node: data }) => (
        <div>
          <Img
            key={data.id}
            title={data.name}
            alt={data.name}
            sizes={data.childImageSharp.sizes}
          />

          {data.name.match('-') ? (
            <div>
              {data.name.split('-').map((name, author) => (
                <span>
                  {name} {author <= 0 && '| author: '}
                </span>
              ))}
            </div>
          ) : (
            <div>{data.name}</div>
          )}
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
    site {
      siteMetadata {
        title
      }
    }
    images: allFile(
      filter: {
        extension: { regex: "/(jpeg|jpg|gif|png)/" }
        sourceInstanceName: { eq: "screenshots" }
      }
      sort: { order: ASC, fields: name }
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
