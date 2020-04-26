/* eslint-disable */
import CodeBlock from "../components/code-block"

const Components = {
  pre: (props) => props.children,
  code: (props) => CodeBlock(props),
}

export default Components
