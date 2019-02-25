import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Link from '../components/link'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Masonry from 'react-masonry-component'
import SEO from '../components/seo'
import {
  bpMaxSM,
  bpMinSM,
  bpMaxMD,
  bpMinMD,
  bpMaxLG,
  bpMinLG,
} from '../utils/breakpoints'

import gif6d from '../../content/drawer/gifs/6DIntro.gif'

export default function Index({ data: { images, site } }) {
  return (
    <>
      <SEO title={site.siteMetadata.title} />
      <Main>
        <div
          css={css`
            align-items: center;
            justify-content: space-between;

            ${bpMinLG} {
              //padding: 15px 20px 0 20px;
              //padding: 40px 20px;
              display: flex;
              flex-direction: row;
            }
            ${bpMinMD} {
              //padding: 20px 20px 0 20px;
              //padding: 30px 20px 20px 20px;
            }
            //padding: 20px 10px 0 10px;
          `}>
          <h1
            css={{
              lineHeight: 1,
              [bpMinMD]: {
                fontSize: '2em',
                marginBottom: '15px',
              },
              fontSize: '1.4em',
              marginBottom: '7px',
            }}>
            {/* Drawer */}
          </h1>

          <p
            css={{
              [bpMinMD]: {
                fontSize: '17px',
              },
              [bpMinLG]: {
                marginBottom: '10px',
              },
              marginBottom: '5px',
              fontSize: '14px',
              color: 'hsla(0, 0%, 0%, 0.7)',
              //textAlign: 'right',
            }}>
            {/* Stuff I've worked on, in screenshots. */}
            {/* Screenshots of projects I've worked on. */}
            {/* Vojta's (work) life in screenshots. */}
            {/*Screenshots of stuff I've worked on.*/}
            {/* Screenshots of stuff I've either designed, developed, animated,... */}
            {/* Sometimes I put images
            of stuff I've worked on inside a special folder and they magically
            appear here. I call it a Drawer. */}
          </p>
        </div>
        <div
          css={css`
          .image-name {
            position: absolute;
            
            margin-left: 0px;
            a {
              color: hsla(231, 76%, 56%, 0.6);
            }
            ${bpMinMD} {
            margin-top: 8px;
            font-size: 13px;
          }
          margin-top: 5px;
          font-size: 12px;
            line-height: 1.2;
            color: hsla(0,0%, 0%, 0.5);
            //padding: 4px 6px 3px 6px;
            
          }
          /* funk is turned off
           .grid-item:nth-of-type(2n) {
            ${bpMinMD} {
              max-width: 66%;
              width: 100%;
              padding: 10px;
            }
            width: 50%;
          } */
             .gatsby-image-wrapper {box-shadow: 0 30px 80px -20px hsla(0,0%,0%,0.2); cursor: zoom-in;} 
          .grid-item {
            width: 100%;
            
            ${bpMinMD} {
              max-width: 33.33333%;
              padding: 25px;
              
            }
            max-width: 50%;
            padding: 20px 8px;
            
          }
          .grid-item-inner {
            
            :hover {
              .image-name {
                a {
              color: hsla(231, 76%, 56%, 0.9);
            }
                //background: rgba(0, 0, 0, 0.8);
                color: hsla(0, 0%, 0%, 0.8);
              }
            }
          }
          /* .masonry-item {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(20vw, 1fr));
          } */
        `}>
          <Masonry className={'masonry-item'}>
            {images.edges.map(({ node: data }) => (
              <div className='grid-item' key={data.id}>
                <div className='grid-item-inner'>
                  <a
                    href={data.childImageSharp.fluid.originalImg}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <Img
                      alt={`${data.name}`}
                      sizes={data.childImageSharp.fluid}
                    />
                  </a>
                  {data.name.match('-') ? (
                    <span className='image-name'>
                      {data.name
                        .substring(4)
                        .split('-')
                        .map((name, dash) => (
                          <span key={name}>
                            {name}
                            {dash >= 0 && ' '}
                            {/* Curation is key */}
                            {name === 'howtoegghead.com' && (
                              <span>
                                | <a href='https://howtoegghead.com'>visit</a>
                              </span>
                            )}{' '}
                            {name === 'kentcdodds.com' && (
                              <span>
                                | <a href='https://kentcdodds.com'>visit</a>
                              </span>
                            )}
                            {name === 'moonhighway.com' && (
                              <span>
                                | <a href='https://moonhighway.com'>visit</a>
                              </span>
                            )}
                            {name === 'gatsby starter egghead blog' && (
                              <span>
                                |{' '}
                                <a href='https://github.com/eggheadio/gatsby-starter-egghead-blog'>
                                  repo
                                </a>
                              </span>
                            )}
                          </span>
                        ))}
                    </span>
                  ) : (
                    <span className='image-name'>{data.name}</span>
                  )}
                </div>
              </div>
            ))}
            <div className='grid-item'>
              <img alt='6d gif' src={gif6d} />
            </div>
          </Masonry>
          {/* <div>
          {text.edges.map(({ node: data }) => (
            <div
              key={data.id}
              className='grid-item'
              css={css`
                width: 100%;

                background: yellow;
                padding: 40px;
                background: #fafafa;
              `}>
              <Link to={`/${data.fields.slug}`}>{data.frontmatter.title}</Link>
            </div>
          ))}
        </div> */}
        </div>
        {/* <em>Man we would be all totally lost wi}thout screenshots.</em>
        Vojta
        <br />
        <p>it's all about showing process.</p> */}
        <h2
          css={css`
            font-size: 15px;

            ${bpMinLG} {
              padding-top: 50px;
            }
            padding-top: 20px;
            text-align: center;
            a {
              color: hsla(0, 0%, 0%, 0.8);
              text-decoration: none;
            }
          `}>
          <span role='img' aria-label='wave emoji'>
            👋
          </span>{' '}
          <a href='mailto:vojta@8am.design'>vojta@8am.design</a>
        </h2>
      </Main>
    </>
  )
}

const Main = styled.main`
  margin: 0 auto;
  //max-width: 1440px;
  //background: #181818;
  //color: white;
  background: #f1f1f1;
  ${bpMinLG} {
    padding: 20px;
  }
  padding: 5px;
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
    site {
      siteMetadata {
        title
      }
    }
    text: allMdx(filter: { fields: { collection: { eq: "drawer" } } }) {
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
        }
      }
    }
    gifs: allFile(
      filter: {
        extension: { regex: "/gif/" }
        sourceInstanceName: { eq: "drawer" }
      }
      sort: { order: DESC, fields: relativePath }
    ) {
      edges {
        node {
          name
          absolutePath
          relativePath
          relativeDirectory
          sourceInstanceName
        }
      }
    }
    images: allFile(
      filter: {
        extension: { regex: "/(jpeg|jpg|png)/" }
        sourceInstanceName: { eq: "drawer" }
      }
      sort: { order: DESC, fields: relativePath }
    ) {
      edges {
        node {
          id
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
