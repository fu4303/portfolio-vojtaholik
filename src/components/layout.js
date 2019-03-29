import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Global, css } from '@emotion/core'
import reset from '../utils/reset'
import { MDXProvider } from '@mdx-js/tag'
import mdxComponents from './mdx'
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
            ['@media screen']: {
              maxWidth: '960px',
              padding: '0 1.0875rem 0 1.0875rem',
            },
            width: '100%',
            paddingTop: 0,
          }}>
          {/* 
          {children}
          */}
          <MDXProvider components={mdxComponents}>{children}</MDXProvider>
        </div>
      </div>
    </>
  )
}

export default Layout
