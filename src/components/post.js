/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Layout from "./layout"
import { motion } from "framer-motion"

export default function Post({
  children,
  data: {
    blogPost: { title, date, excerpt, keywords, tags, card },
  },
  ...props
}) {
  return (
    <Styled.root>
      <Layout
        title={title}
        excerpt={excerpt}
        {...props}
        card={card.childImageSharp.fixed.src}
      >
        <Styled.h1>{title}</Styled.h1>
        <div>{date}</div>
        <article sx={{ mt: 4 }}>{children}</article>
      </Layout>
    </Styled.root>
  )
}
