import styled from "styled-components"
import { color, flexbox, space, layout, typography } from "styled-system"
import theme from "../../lib/theme"

const Container = styled("div")(color, flexbox, space, layout, typography, {
  padding: "0 1.5rem",
  maxWidth: theme.sizes.maxWidth[0],
  margin: "0 auto",
})

export default Container
