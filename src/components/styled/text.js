import styled from "styled-components"
import { typography, color, flexbox, space } from "styled-system"

const Text = styled("p")(color, flexbox, space, typography, {
  sup: {
    fontSize: 20,
    fontStyle: "italic",
  },
})

export default Text
