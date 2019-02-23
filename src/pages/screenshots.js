import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Link from '../components/link'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { bpMaxSM } from '../utils/breakpoints'

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
      <div
        css={css`
          display: grid;
          grid-gap: 30px;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          grid-auto-rows: auto;
          text-align: center;
          ${bpMaxSM} {
            grid-auto-rows: auto;
          }
          .grid-item:nth-child(2n) {
            //opacity: 0.5;
            ${bpMaxSM} {
              grid-column: auto;
              grid-row-end: span 1;
            }
            grid-column: span 2;
            grid-row-end: span 2;
          }
          div:hover {
            .image-name {
              opacity: 1;
            }
          }
          .image-name {
            //position: absolute;
            font-size: 15px;
            opacity: 0.3;
          }
        `}>
        {images.edges.map(({ node: data }) => (
          <div className='grid-item'>
            <Img
              key={data.id}
              title={data.name}
              alt={data.name}
              sizes={data.childImageSharp.sizes}
            />

            {data.name.match('-') ? (
              <span className='image-name'>
                {data.name.split('-').map((name, author) => (
                  <span>
                    {name}
                    {author <= 0 && '. for: '}
                  </span>
                ))}
              </span>
            ) : (
              <span className='image-name'>{data.name}</span>
            )}
          </div>
        ))}
      </div>
    </Main>
  )
}

const Main = styled.main`
  margin: 0 auto;
  max-width: 1280px;
  padding: 50px 50px;
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
            sizes(maxWidth: 800) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
