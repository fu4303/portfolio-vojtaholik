/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Layout from "./layout"

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
      card={card && card.childImageSharp.fixed.src}
      {...props}
    >
      <Styled.h1>{title}</Styled.h1>
      <div>{date}</div>
      <article sx={{ mt: 4 }}>{children}</article>
    </Layout>
  )
}
