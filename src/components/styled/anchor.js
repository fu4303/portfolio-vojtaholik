import styled from "styled-components"
import Link from "../link"
import {
  color,
  flexbox,
  space,
  layout,
  typography,
  border,
} from "styled-system"

const Anchor = styled(Link)(color, flexbox, space, layout, typography, border)

Anchor.defaultProps = {
  textDecoration: "none",
  color: "primary",
}

export default Anchor
