/** @jsx jsx */
import { jsx } from "theme-ui"
import { motion } from "framer-motion"

export default function EpicReactLogo() {
  return (
    <div
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="55"
        viewBox="0 0 48 55"
        sx={{
          g: {
            stroke: "primary",
          },
        }}
      >
        <g
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          transform="translate(-2 2.344)"
        >
          <motion.path
            animate={{
              strokeDashoffset: ["100px", "0"],
            }}
            transition={{
              delay: 0.1,
              type: "spring",
              ease: "easeOut",
              duration: 0.75,
            }}
            strokeDasharray="100px"
            strokeDashoffset="100px"
            d="M36.9064711,31.6378433 C45.0445328,30.4833125 50.6226099,28.1189234 50.6226099,25.389742 C50.6226099,21.5237488 39.4297287,18.389742 25.6226099,18.389742 C11.8154912,18.389742 0.622609915,21.5237488 0.622609915,25.389742 C0.622609915,27.4731439 3.87322706,29.3439636 9.03183699,30.6262662"
            transform="rotate(-30 25.623 25.014)"
          />
          <motion.path
            animate={{
              strokeDashoffset: ["100px", "0"],
            }}
            transition={{
              delay: 0.05,
              type: "spring",
              ease: "easeInOut",
              duration: 0.65,
            }}
            strokeDasharray="100px"
            strokeDashoffset="100px"
            d="M32.7479682,31.1569794 C30.3508539,36.0050557 27.828478,39.0040359 28.069765,39.0540938 C39.9797439,38.519035 48.9972328,35.8647166 48.9972328,32.3790919 C48.9972328,28.8056581 39.4342982,25.8576164 27.083168,25.4318937"
            transform="rotate(30 38.04 32.243)"
          />
          <motion.path
            animate={{ strokeDashoffset: ["100px", "0"] }}
            transition={{
              delay: 0.45,
              type: "spring",
              ease: "easeOut",
              duration: 0.95,
            }}
            strokeDasharray="100px"
            strokeDashoffset="100px"
            d="M11.4202887,11 C6.2387983,12.2825607 2.97159697,14.1576036 2.97159697,16.2463133 C2.97159697,18.9963581 8.63528392,21.3760119 16.8748188,22.5206797"
            transform="rotate(30 9.923 16.76)"
          />
          <motion.path
            animate={{
              strokeDashoffset: ["100px", "0"],
            }}
            transition={{
              type: "spring",
              ease: "easeInOut",
              duration: 0.75,
            }}
            strokeDasharray="100px"
            strokeDashoffset="100px"
            d="M8.99990599,19.149959 C3.49998443,20.4340035 0,22.3669515 0,24.5287898 C0,28.394783 11.1928813,31.5287898 25,31.5287898 C38.8071187,31.5287898 50,28.394783 50,24.5287898 C50,22.3986246 46.6018207,20.4906918 41.2405391,19.206813"
            transform="rotate(90 25 25.34)"
          />
        </g>
      </svg>
      <div sx={{ span: { color: "text" } }}>
        <motion.div
          style={{
            marginLeft: 10,
            fontSize: 25,
            fontWeight: 700,
            letterSpacing: "-0.008em",
            display: "flex",
            alignItems: "center",
          }}
          animate={{ x: [-10, 0] }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1], x: [-10, 0] }}
            transition={{
              delay: 0.05,
              type: "spring",
              ease: "easeOut",
              duration: 0.55,
            }}
          >
            Epic
          </motion.span>
          <motion.span
            style={{ marginLeft: 6 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1], x: [-10, 0] }}
            transition={{
              delay: 0.1,
              type: "spring",
              ease: "easeOut",
              duration: 0.65,
            }}
          >
            React
          </motion.span>
        </motion.div>
        <motion.div
          style={{
            marginLeft: 10,
            fontSize: 15.5,
            opacity: 0.85,
            marginTop: -10,
            letterSpacing: 0,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.85], x: [-10, 0] }}
          transition={{
            delay: 0.1,
            type: "spring",
            ease: "easeOut",
            duration: 0.65,
          }}
        >
          by Kent C. Dodds
        </motion.div>
      </div>
    </div>
  )
}
