import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Link from '../components/link'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import {
  bpMaxSM,
  bpMinSM,
  bpMaxMD,
  bpMinMD,
  bpMaxLG,
  bpMinLG,
} from '../utils/breakpoints'
import Masonry from 'react-masonry-component'

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
          /* display: grid;
          grid-gap: 33px;
          grid-template-columns: repeat(auto-fill, minmax(20vw, 1fr));
          ${bpMaxSM} {
            grid-template-columns: repeat(auto-fill, minmax(30vw, 1fr));
          }
          grid-auto-flow: dense;
          text-align: center;
          ${bpMaxSM} {
            grid-auto-rows: auto;
          }
            //grid-column-end: span 2;
            //grid-row-end: span 2;
          } */
          .image-name {
            //position: absolute;
            font-size: 13px;
            opacity: 0.3;
          }
          .grid-item {
            margin: 15px;
            width: 100%;
            ${bpMinMD} {
              width: 30%;
            }

          }
          .masonry-item {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(20vw, 1fr));
          }
        `}>
        <Masonry className={'masonry-item'}>
          {images.edges.map(({ node: data }) => (
            <div className='grid-item' key={data.id}>
              <Img alt={data.name} sizes={data.childImageSharp.fluid} />

              {data.name.match('-') ? (
                <span className='image-name'>
                  {data.name.split('-').map((name, author) => (
                    <span key={data.index}>
                      {name}
                      {author <= 0 && '. '}
                    </span>
                  ))}
                </span>
              ) : (
                <span className='image-name'>{data.name}</span>
              )}
            </div>
          ))}
        </Masonry>
      </div>
    </Main>
  )
}

const Main = styled.main`
  margin: 0 auto;
  max-width: 1340px;
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
        extension: { regex: "/(jpeg|jpg|png)/" }
        sourceInstanceName: { eq: "screenshots" }
      }
      sort: { order: ASC, fields: name }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
