import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'

function MarkdownPage({ children }) {
  return (
    <>
      <SEO title="About" />
      <Layout>{children}</Layout>
    </>
  )
}

export default MarkdownPage
