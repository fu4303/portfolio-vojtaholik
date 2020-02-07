/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Layout from "./layout"
import { motion } from "framer-motion"

export default ({
  children,
  data: {
    blogPost: { title, date, excerpt, keywords, tags, card },
  },
  ...props
}) => {
  return (
    <Styled.root>
      <Layout
        title={title}
        excerpt={excerpt}
        {...props}
        card={card.childImageSharp.fixed.src}
      >
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          exit={{ y: -10 }}
          transition={{ type: "spring", damping: 300 }}
        >
          <Styled.h1>{title}</Styled.h1>
        </motion.div>
        <div>{date}</div>
        <article sx={{ mt: 4 }}>{children}</article>
      </Layout>
    </Styled.root>
  )
}
