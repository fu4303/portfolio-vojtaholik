/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Highlight, { defaultProps } from "prism-react-renderer"
import "prism-theme-night-owl"

const CodeBlock = ({ children, ...props }) => {
  const language = props.className
    ? props.className.replace(/language-/, "")
    : ""

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={undefined}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Styled.pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span
                  key={key}
                  {...getTokenProps({ token, key })}
                  sx={{ display: "inline-block" }}
                />
              ))}
            </div>
          ))}
        </Styled.pre>
      )}
    </Highlight>
  )
}

export default CodeBlock
