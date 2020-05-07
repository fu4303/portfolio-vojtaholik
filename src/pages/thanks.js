/** @jsx jsx */
import { graphql } from "gatsby"
import { jsx, Styled, Image } from "theme-ui"
import Layout from "../components/layout"
import HighFive from "../images/high-five.gif"

const ThanksPage = ({
  data: {
    site: { siteMetadata },
  },
}) => {
  return (
    <Layout {...siteMetadata}>
      <Styled.h1 sx={{ mt: "6px" }}>Thanks, see ya there!</Styled.h1>
      <Image src={HighFive} alt="Doggo giving you high five!" />
    </Layout>
  )
}

export const thanksQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

export default ThanksPage
