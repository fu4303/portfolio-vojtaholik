/** @jsx jsx */
import { jsx, Container, Link as StyledLink } from "theme-ui"
import { FiRss, FiMail, FiGithub, FiTwitter } from "react-icons/fi"
import { FaDribbble } from "react-icons/fa"

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
        }}
      >
        <StyledLink
          variant="socialLink"
          href="https://github.com/vojtaholik/vojta-io"
        >
          <FiGithub size={16} /> This site on Github
        </StyledLink>
        <StyledLink variant="socialLink" href="/rss.xml">
          <FiRss size={16} /> RSS
        </StyledLink>
        <StyledLink variant="socialLink" href="https://twitter.com/vjthlk">
          <FiTwitter size={16} /> Twitter
        </StyledLink>
        <StyledLink variant="socialLink" href="https://dribbble.com/vjthlk">
          <FaDribbble size={16} /> Dribbble
        </StyledLink>
        <StyledLink variant="socialLink" href="mailto:vojta@8am.design">
          <FiMail size={16} /> Email me
        </StyledLink>
      </footer>
    </Container>
  )
}
