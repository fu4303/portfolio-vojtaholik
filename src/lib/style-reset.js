import React from "react"
import { Global, css } from "@emotion/core"
import theme from "./theme"
import "./fonts/fonts.css"

function StyleReset() {
  return (
    <Global
      styles={css`
        html {
          font-size: 16px;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-display: swap;
        }
        ::selection {
          color: #fff;
          background: ${theme.colors.primary};
        }
        body {
          font-size: ${theme.textSize.size["body"]};
          line-height: ${theme.textSize.height["body"]};
          margin: 0;
          font-family: ${theme.fontFamily["primary"]};
          color: ${theme.colors.white};
          background: ${theme.colors.black900};
          font-weight: 300;
        }
        p {
          font-weight: 300;
          font-size: ${theme.textSize.size["body"]};
          line-height: ${theme.textSize.height["body"]};
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${theme.fontFamily["secondary"]};
          font-weight: 400;
          font-size: ${theme.textSize.size["heading"]};
          line-height: ${theme.textSize.height["heading"]};
        }
        a {
          color: ${theme.colors["primary"]};
          cursor: pointer;
          text-decoration: none;
        }
        input {
          border: none;
        }
        button {
          border: none;
        }
        pre {
          margin: 0;
          padding: 1rem;
          font-size: ${theme.textSize.size["caption"]};
          line-height: ${theme.textSize.height["body"]};
          font-family: ${theme.fontFamily["code"]};
        }
      `}
    />
  )
}

export default StyleReset
