import React, {useState, useEffect} from 'react'
import {graphql} from 'gatsby'
import {useTransition, a} from 'react-spring'
import shuffle from 'lodash/shuffle'
import useMeasure from '../utils/useMeasure'
import useMedia from '../utils/useMedia'
import ReactGA from 'react-ga'
//import data from './data'
import './styles.css'
import Img from 'gatsby-image'

ReactGA.initialize('UA-135029522-1')

export default function Index({data: {images, site}}) {
  // Tie media queries to the number of columns
  const columns = useMedia(
    ['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'],
    [4, 3, 3],
    2
  )
  // Measure the width of the container element
  const [bind, {width}] = useMeasure()
  // Hold items and shuffle them every 2 seconds
  const [items, set] = useState(images.edges)

  console.log(images.edges)

  //useEffect(() => void setInterval(() => set(shuffle), 2000), [])
  // Form a grid of stacked items
  let heights = new Array(columns).fill(0) // Each column gets a height starting with zero
  let gridItems = items.map((child, i) => {
    const column = heights.indexOf(Math.min(...heights)) // Basic masonry-grid placing, puts tile into the smallest column using Math.min
    const xy = [
      (width / columns) * column,
      (heights[column] +=
        child.node.childImageSharp.fluid.presentationHeight / 2) -
        child.node.childImageSharp.fluid.presentationHeight / 2,
    ] // X = container width / number of columns * column index, Y = it's just the height of the current column
    return {
      ...child,
      xy,
      width: width / columns,
      height: child.node.childImageSharp.fluid.presentationHeight / 2,
    }
  })
  // Turn the static grid values into animated transitions, any addition, removal or change will be animated
  const transitions = useTransition(
    gridItems,
    item => item.node.childImageSharp.fluid.src,
    {
      from: ({xy, width, height}) => ({xy, width, height, opacity: 0}),
      enter: ({xy, width, height}) => ({xy, width, height, opacity: 1}),
      update: ({xy, width, height}) => ({xy, width, height}),
      leave: {height: 0, opacity: 0},
      config: {mass: 5, tension: 500, friction: 100},
      trail: 25,
    }
  )
  // Render the grid
  return (
    <div {...bind} className="list" style={{height: Math.max(...heights)}}>
      {transitions.map(({item, props: {xy, ...rest}, key}) => (
        <a.div
          key={item.node.id}
          style={{
            transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`),
            ...rest,
            a: {
              color: 'hsla(231, 76%, 56%, 0.6)',
            },
            fontSize: '13px',
            lineHeight: '1.2',
            color: 'hsla(0, 0%, 0%, 0.7)',
          }}>
          <div
            style={{
              backgroundImage: `url(${item.node.childImageSharp.fluid.src})`,
              marginBottom: 5,
            }}>
            {' '}
            <a
              style={{
                width: '100%',
                height: '100%',
                display: 'block',
                cursor: 'zoom-in',
              }}
              href={item.node.childImageSharp.original.src}
              target="_blank"
              onClick={() =>
                ReactGA.event({
                  action: `clicked ${item.node.name.substring(4)}`,
                  category: 'drawer images',
                })
              }
              rel="noopener noreferrer"
            />
          </div>

          {item.node.name.match('-') ? (
            <span>
              {item.node.name
                .substring(4)
                .replace('@2x', '')
                .split('-')
                .map((name, dash) => (
                  <span key={name}>
                    {name}
                    {dash >= 0 && ' '}
                    {/* Curation is key */}
                    {name === 'for joel' && (
                      <>
                        | <a href="https://joelhooks.com">visit</a>
                      </>
                    )}{' '}
                    {name === 'illustrated.dev' && (
                      <>
                        | <a href="https://illustrated.dev">visit</a>
                      </>
                    )}{' '}
                    {name === 'howtoegghead.com' && (
                      <>
                        | <a href="https://howtoegghead.com">visit</a>
                      </>
                    )}{' '}
                    {name === 'kentcdodds.com' && (
                      <>
                        | <a href="https://kentcdodds.com">visit</a>
                      </>
                    )}
                    {name === 'moonhighway.com' && (
                      <>
                        | <a href="https://moonhighway.com">visit</a>
                      </>
                    )}
                    {name === 'gatsby starter egghead blog' && (
                      <>
                        |{' '}
                        <a href="https://github.com/eggheadio/gatsby-starter-egghead-blog">
                          repo
                        </a>
                      </>
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
            <span className="image-name">{item.node.name}</span>
          )}
          {/* yo <img src={item.node.childImageSharp.original.src} /> */}
        </a.div>
        // <a.div
        //   key={key}
        //   style={{
        //     transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`),
        //     ...rest,
        //   }}>
        //   {/* <div style={{backgroundImage: item.css}} /> */}
        // </a.div>
      ))}
    </div>
  )
}

export const newPageQuery = graphql`
  query NewIndexPageQuery {
    site {
      siteMetadata {
        title
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
              height
            }
            fluid(maxWidth: 900) {
              src
              presentationHeight
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
