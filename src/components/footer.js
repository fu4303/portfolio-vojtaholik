/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import { Link as StyledLink } from "@theme-ui/components"
import { FiRss, FiMail, FiGithub, FiTwitter } from "react-icons/fi"

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
          flexWrap: "wrap",
          flexDirection: ["column", "row"],
          alignItems: ["flex-start", "center"],
          a: {
            mr: 4,
            pt: [1, 0],
          },
        }}
      >
        <StyledLink
          variant="footerLink"
          href="https://github.com/vojtaholik/vojta-io"
        >
          <FiGithub size={16} /> This site on Github
        </StyledLink>
        <StyledLink variant="footerLink" href="/rss.xml">
          <FiRss size={16} /> RSS
        </StyledLink>
        <StyledLink variant="footerLink" href="https://twitter.com/vjthlk">
          <FiTwitter size={16} /> Twitter
        </StyledLink>
        <StyledLink variant="footerLink" href="mailto:vojta@8am.design">
          <FiMail size={16} /> Email me
        </StyledLink>
      </footer>
    </Container>
  )
}
