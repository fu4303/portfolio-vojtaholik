const React = require("react")
const { ThemeProvider } = require("styled-components")
const theme = require("./src/lib/theme").default
const Layout = require("./src/components/layout").default

exports.wrapPageElement = ({ element, props }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout {...props}>{element}</Layout>
    </ThemeProvider>
  )
}
