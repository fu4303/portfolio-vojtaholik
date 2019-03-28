import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Global, css } from '@emotion/core'
import reset from '../utils/reset'
import SEO from './seo'
import './layout-styles.css'
import { colors, spacing, breakpoints, fonts } from '../utils/styles'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Global styles={reset} />
      <SEO title={data.site.siteMetadata.title} />
      <div
        css={css`
          display: flex;
          @media (min-width: ${breakpoints.mobile}px) {
            flex-direction: column;
          }
        `}>
        <div
          css={{
            margin: '2rem auto',
            ['@media (min-width: ${breakpoints.mobile}px)']: {
              margin: '0 auto',
            },

            maxWidth: '960px',
            width: '100%',
            padding: '0 1.0875rem 0 1.0875rem',
            paddingTop: 0,
          }}>
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout
