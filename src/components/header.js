/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import { jsx, Container } from "theme-ui"
import { Box, Flex, Link as StyledLink } from "@theme-ui/components"
// import { useColorMode, useThemeUI } from "theme-ui"
import { invert } from "@theme-ui/color"
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion"

const Header = props => {
  // const context = useThemeUI()
  // const [colorMode, setColorMode] = useColorMode()
  // const { theme } = context

  const { scrollYProgress } = useViewportScroll()
  const rotateRange = useTransform(scrollYProgress, value => value * 90)
  const [rotate, setRotate] = React.useState(
    useSpring(rotateRange, { stiffness: 400, damping: 90 })
  )

  React.useEffect(() => {
    setRotate(0)
  }, [])

  return (
    <div
      sx={{
        py: [3, 3, 4],
        px: [3, 3, 3, 4],
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: ["fixed", "block", "fixed"],
        zIndex: 999,
      }}
    >
      <motion.div
        style={{ rotate: rotate }}
        // animate={{ rotate: "0.5turn" }}
        // </div>transformTemplate={rotate => `rotateX(${rotate}turn)`}
      >
        <header>
          <StyledLink
            as={Link}
            to="/"
            sx={{
              textDecoration: "none",
              fontSize: 2,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              borderRadius: "50%",
              width: 50,
              justifyContent: "center",
              height: 50,
              color: "text",
              bg: "background",
              borderColor: "text",
              border: "2px solid",
              textAlign: "center",
              pt: "3px",
            }}
          >
            V
          </StyledLink>
        </header>
      </motion.div>

      <nav>
        {/* <ColorModeToggle
          colorMode={colorMode}
          setColorMode={setColorMode}
          theme={theme}
        /> */}
      </nav>
    </div>
  )
}

const ColorModeToggle = ({ colorMode, setColorMode, theme }) => {
  return (
    <button
      onClick={() => {
        setColorMode(colorMode === "default" ? "dark" : "default")
      }}
      aria-label={`Activate ${colorMode === "default" ? "dark" : "light"} mode`}
      title={`Activate ${colorMode === "default" ? "dark" : "light"} mode`}
      sx={{
        position: "relative",
        alignItems: "center",
        bg: "transparent",
        border: 0,
        borderRadius: "5px",
        display: ["inline-flex", "flex"],
        cursor: "pointer",
        justifyContent: "center",
        opacity: 0.6,
        transition: "opacity 0.3s ease",
        width: "40px",
        height: "40px",
        transform: "scale(0.8)",
        ":focus": {
          outline: "2px solid",
          outlineColor: colorMode === "default" ? invert("text") : "text",
          outlineOffset: "1px",
        },
        ":hover, :focus": {
          opacity: "1",
        },
      }}
    >
      <div
        sx={{
          bg: colorMode === "default" ? invert("text") : "text",
          borderRadius: "50%",
          overflow: colorMode === "default" ? "hidden" : "visible",
          position: "relative",
          transform: `scale(${colorMode === "default" ? 1 : 0.55})`,
          transition: "all 0.45s ease",
          width: "24px",
          height: "24px",
          "&::before": {
            bg: "background",
            border: "2px solid ",
            borderColor: "background",
            borderRadius: "50%",
            content: '""',
            width: "24px",
            height: "24px",
            opacity: colorMode === "default" ? 1 : 0,
            position: "absolute",
            right: "-9px",
            top: "-9px",
            transform: `translate(${
              colorMode === "default" ? "0, 0" : "14px, -14px"
            })`,
            transition: "transform 0.45s ease",
          },
          "&::after": {
            borderRadius: "50%",
            boxShadow: `0 -23px 0 ${
              colorMode === "default"
                ? invert(theme.colors.text)
                : theme.colors.text
            },
          0 23px 0 ${
            colorMode === "default"
              ? invert(theme.colors.text)
              : theme.colors.text
          },
          23px 0 0 ${
            colorMode === "default"
              ? invert(theme.colors.text)
              : theme.colors.text
          },
          -23px 0 0 ${
            colorMode === "default"
              ? invert(theme.colors.text)
              : theme.colors.text
          },
          15px 15px 0 ${
            colorMode === "default"
              ? invert(theme.colors.text)
              : theme.colors.text
          },
          -15px 15px 0 ${
            colorMode === "default"
              ? invert(theme.colors.text)
              : theme.colors.text
          },
          15px -15px 0 ${
            colorMode === "default"
              ? invert(theme.colors.text)
              : theme.colors.text
          },
          -15px -15px 0 ${
            colorMode === "default"
              ? invert(theme.colors.text)
              : theme.colors.text
          }`,
            content: '""',
            width: "8px",
            height: "8px",
            left: "50%",
            margin: "-4px 0 0 -4px",
            position: "absolute",
            top: "50%",
            transform: `scale(${colorMode === "default" ? 0 : 1})`,
            transition: "all 0.35s ease",
          },
        }}
      />
      <div
        sx={{
          position: "absolute",
          right: "-1px",
          top: "-8px",
          height: "24px",
          width: "24px",
          borderRadius: "50%",
          border: "0",
          backgroundColor: "background",
          transform: `translate(${
            colorMode === "default" ? "0, 0" : "14px, -14px"
          })`,
          opacity: colorMode === "default" ? 1 : 0,
          transition: "transform 0.45s ease",
        }}
      />
    </button>
  )
}

export default Header
