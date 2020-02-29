/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div
      sx={{
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Styled.h1>NOT FOUND</Styled.h1>
      <Styled.p>
        You just hit a route that doesn&#39;t exist... the sadness.
      </Styled.p>
    </div>
  </Layout>
)

export default NotFoundPage
