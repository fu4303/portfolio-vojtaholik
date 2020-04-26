/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Highlight, { defaultProps } from "prism-react-renderer"
import "prism-theme-night-owl"
import nightOwl from "prism-react-renderer/themes/nightOwl"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"

import { Box } from "@theme-ui/components"

const BrowserWindowWrapper = (props) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        borderRadius: 5,
        bg: "#fafafa",
      }}
    >
      <Box
        sx={{
          borderRadius: "5px 5px 0 0",
          height: 30,
          width: "100%",
          background: "#f1f1f1",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Box
          sx={{
            borderRadius: "50%",
            width: 10,
            height: 10,
            background: "#FF5A52",
            mr: "2px",
            ml: 1,
          }}
        />
        <Box
          sx={{
            borderRadius: "50%",
            width: 10,
            height: 10,
            background: "#E6C029",
            mx: "2px",
          }}
        />
        <Box
          sx={{
            borderRadius: "50%",
            width: 10,
            height: 10,
            background: "#53C22B",
            mx: "2px",
          }}
        />
      </Box>
      {props.children}
    </Box>
  )
}

export default function CodeBlock(props) {
  const classNames = props.className || ""
  const matches = classNames.match(/language-(?<lang>[^\s]+)/)
  const language =
    matches && matches.groups && matches.groups.lang ? matches.groups.lang : ""
  if (props.live) {
    return (
      <div
        sx={{
          lineHeight: 1.2,
          fontSize: "95%",
          textarea: { fontFamily: "monospace" },
          ...props.sx,
        }}
      >
        <LiveProvider
          code={props.children.trim()}
          language={language}
          theme={nightOwl}
          {...props}
        >
          {props.hideEditor ? (
            <LivePreview />
          ) : (
            <BrowserWindowWrapper>
              <LivePreview />
            </BrowserWindowWrapper>
          )}
          {!props.hideEditor && <LiveEditor />}
          <LiveError />
        </LiveProvider>
      </div>
    )
  }

  return (
    <Highlight
      {...defaultProps}
      code={props.children.trim()}
      language={language}
      theme={nightOwl}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Styled.pre className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}{" "}
              {props.componentLine === i && props.component}
            </div>
          ))}
        </Styled.pre>
      )}
    </Highlight>
  )
}
