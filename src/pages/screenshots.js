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
  return (
    <Main>
      <h1
        css={css`
          font-size: 15px;
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: 0.7;
          margin-top: 20px;
        `}>
        <Link to='/'>HOME</Link> / Screenshots
      </h1>
      <p>
        Collection of stuff I like and grabbed a screenshot of to remember and
        learn from.
      </p>
      <h2>Images</h2>
      <div
        css={css`
          .image-name {
            position: absolute;
            margin-top: -25px;
            color: white;
            margin-left: 10px;
            font-size: 13px;
            opacity: 0.2;
            padding: 3px 6px;
          }
          .grid-item {
            width: 100%;
            ${bpMinMD} {
              max-width: 33.33333%;
              padding: 10px;
            }
            max-width: 50%;
            padding: 5px;
            :hover {
              .image-name {
                opacity: 0.8;
                background: rgba(0, 0, 0, 0.8);
              }
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
              <a href={data.childImageSharp.fluid.originalImg}>
                <Img alt={data.name} sizes={data.childImageSharp.fluid} />
              </a>
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
  max-width: 1180px;
  ${bpMinLG} {
    padding: 30px;
  }
  padding: 20px;
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
          relativePath
          relativeDirectory
          sourceInstanceName
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_tracedSVG
              src
              originalImg
            }
            fixed(width: 800, height: 800) {
              ...GatsbyImageSharpFixed
              src
            }
          }
        }
      }
    }
  }
`
