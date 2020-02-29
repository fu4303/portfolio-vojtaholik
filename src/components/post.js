/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Layout from "./layout"
import { Text } from "@theme-ui/components"

export default function Post({
  children,
  data: {
    blogPost: { title, date, excerpt, keywords, tags, card, published },
  },
  ...props
}) {
  return (
    <Layout
      title={title}
      excerpt={excerpt}
      {...props}
      card={card && card.childImageSharp.fixed.src}
    >
      <Styled.h1 sx={{ mt: "6px" }}>{title}</Styled.h1>
      {!published && (
        <Text as="small" mr="3">
          <span role="img" aria-label="Under Construction">
            🚧
          </span>{" "}
          WIP
        </Text>
      )}
      <Text as="time" opacity="0.8">
        {date}
      </Text>
      <article sx={{ mt: 4 }}>{children}</article>
    </Layout>
  )
}
