import codeBlock from "../components/code-block"

const Components = {
  pre: (props) => props.children,
  code: (props) => codeBlock(props),
}

export default Components
