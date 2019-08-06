import React from "react"
import { ThemeProvider } from "emotion-theming"
import { Global, css } from "@emotion/core"
import theme from "./src/lib/theme"
import Layout from "./src/components/layout"
import StyleReset from "./src/lib/style-reset"

export const wrapRootElement = ({ element, props }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyleReset />
      <Layout {...props}>{element}</Layout>
    </ThemeProvider>
  )
}
