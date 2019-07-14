import React from 'react'
import {graphql} from 'gatsby'
import styled from '@emotion/styled'
import Link from '../components/link'
import Img from 'gatsby-image'
import {css} from '@emotion/core'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Masonry from 'react-masonry-component'
import SEO from '../components/seo'
import ReactGA from 'react-ga'
import {colors, spacing, breakpoints, fonts} from '../utils/styles'

import gif6d from '../../content/drawer/gifs/6DIntro.gif'

ReactGA.initialize('UA-135029522-1')

const masonryOptions = {
  transitionDuration: 0,
}

export default function Index({data: {images, site}}) {
  return (
    <>
      <SEO title={site.siteMetadata.title} />
      <Main>
        <div
          css={css`
            .image-name {
              position: absolute;
              margin-left: 0px;
              a {
                color: hsla(231, 76%, 56%, 0.6);
              }
              @media (min-width: ${breakpoints.tablet}px) {
                margin-top: 8px;
                font-size: 13px;
              }

              margin-top: 5px;
              font-size: 12px;
              line-height: 1.2;
              color: hsla(0, 0%, 0%, 0.5);
            }
            .gatsby-image-wrapper {
              box-shadow: 0 30px 80px -20px hsla(0, 0%, 0%, 0.2);
              cursor: zoom-in;
            }
            .grid-item {
              width: 100%;
              @media (min-width: ${breakpoints.tablet}px) {
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
                  color: hsla(0, 0%, 0%, 0.8);
                }
              }
            }
          `}>
          <Masonry className={'masonry-item'}>
            {images.edges.map(({node: data}) => (
              <div className="grid-item" key={data.id}>
                <div className="grid-item-inner">
                  <a
                    href={data.childImageSharp.original.src}
                    target="_blank"
                    onClick={() =>
                      ReactGA.event({
                        action: `clicked ${data.name.substring(4)}`,
                        category: 'drawer images',
                      })
                    }
                    rel="noopener noreferrer">
                    <Img
                      alt={`${data.name}`}
                      sizes={data.childImageSharp.fluid}
                    />
                  </a>
                  {data.name.match('-') ? (
                    <span className="image-name">
                      {data.name
                        .substring(4)
                        .replace('@2x', '')
                        .split('-')
                        .map((name, dash) => (
                          <span key={name}>
                            {name}
                            {dash >= 0 && ' '}
                            {/* Curation is key */}
                            {name === 'for joel' && (
                              <span>
                                | <a href="https://joelhooks.com">visit</a>
                              </span>
                            )}{' '}
                            {name === 'illustrated.dev' && (
                              <span>
                                | <a href="https://illustrated.dev">visit</a>
                              </span>
                            )}{' '}
                            {name === 'howtoegghead.com' && (
                              <span>
                                | <a href="https://howtoegghead.com">visit</a>
                              </span>
                            )}{' '}
                            {name === 'kentcdodds.com' && (
                              <span>
                                | <a href="https://kentcdodds.com">visit</a>
                              </span>
                            )}
                            {name === 'moonhighway.com' && (
                              <span>
                                | <a href="https://moonhighway.com">visit</a>
                              </span>
                            )}
                            {name === 'gatsby starter egghead blog' && (
                              <span>
                                |{' '}
                                <a href="https://github.com/eggheadio/gatsby-starter-egghead-blog">
                                  repo
                                </a>
                              </span>
                            )}
                            {/* {name === 'disruptive' && (
                              <span>
                                |{' '}
                                <a href="https://6dacademy.com/disruptive/">
                                  visit
                                </a>
                              </span>
                            )} */}
                            {name === 'track' && (
                              <span>
                                |{' '}
                                <a href="https://soundcloud.com/komox/kmx-day-of-the-riff">
                                  listen
                                </a>
                              </span>
                            )}
                          </span>
                        ))}
                    </span>
                  ) : (
                    <span className="image-name">{data.name}</span>
                  )}
                </div>
              </div>
            ))}
            <div className="grid-item image-name">
              <a href="https://www.6dacademy.com/">
                <img alt="6d gif" src={gif6d} css={css({marginBottom: 8})} />
              </a>
              <span>
                <a href="https://www.6dacademy.com/">visit 6dacademy.com</a>
              </span>
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
          <br />
        </div>
        {/* <em>Man we would be all totally lost without screenshots.</em>
        Vojta
        <br />
        <p>it's all about showing process.</p> */}
      </Main>
    </>
  )
}

const Main = styled.main`
  margin: 0 auto;
  background: #f1f1f1;
  @media (min-width: ${breakpoints.desktop}px) {
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
    text: allMdx(filter: {fields: {collection: {eq: "drawer"}}}) {
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
      filter: {extension: {regex: "/gif/"}, sourceInstanceName: {eq: "drawer"}}
      sort: {order: DESC, fields: relativePath}
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
        extension: {regex: "/(jpeg|jpg|png)/"}
        sourceInstanceName: {eq: "drawer"}
      }
      sort: {order: DESC, fields: relativePath}
    ) {
      edges {
        node {
          id
          name
          relativePath
          relativeDirectory
          sourceInstanceName
          childImageSharp {
            original {
              src
            }
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
