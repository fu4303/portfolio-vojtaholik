/** @jsx jsx */
import React from "react"
import { jsx, Container } from "theme-ui"
import { Link as StyledLink } from "@theme-ui/components"
import { Icon } from "react-icons-kit"
import { rss, github, mail } from "react-icons-kit/feather"

export default function Footer() {
  return (
    <Container sx={{ p: [2, 3, 4] }}>
      <footer
        sx={{
          maxWidth: "850px",
          mx: "auto",
          pt: 1,
          py: [2, 3, 4],
          px: [2, 3, 4],
          display: "flex",
          flexDirection: ["column", "row"],
          alignItems: ["flex-start", "center"],
          a: {
            mr: 4,
            pt: [1, 0],
          },
          // display: "grid",
          // gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        }}
      >
        <StyledLink href="https://github.com/vojtaholik/vojta-io">
          <Icon size={16} icon={github} /> This site on Github
        </StyledLink>
        <StyledLink href="/rss.xml">
          <Icon size={16} icon={rss} /> RSS
        </StyledLink>
        <StyledLink href="mailto:vojta@8am.design">
          <Icon size={16} icon={mail} /> Email me
        </StyledLink>
      </footer>
    </Container>
  )
}
