/** @jsx jsx */
import React from "react"
import Lottie from "react-lottie"
import { jsx } from "theme-ui"
import { IconButton } from "@theme-ui/components"
import { Icon } from "react-icons-kit"
import { play2, pause, spinner8 } from "react-icons-kit/icomoon"
import fetch from "isomorphic-fetch"
import { motion } from "framer-motion"

export default function AnimationRenderer(props) {
  const [isPaused, setPaused] = React.useState(false)
  const [animation, setAnimation] = React.useState()

  React.useMemo(() => {
    fetch("/.netlify/functions/node-fetch", {
      headers: { accept: "Accept: application/json" },
    })
      .then(x => x.json())
      .then(({ msg }) => setAnimation(msg))
  }, [setAnimation])

  const defaultOptions = {
    loop: props.loop || true,
    autoplay: props.autoplay || true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return props.animation && animation ? (
    <div sx={{ display: "flex", alignItems: "flex-end", marginBottom: 40 }}>
      <Lottie
        options={defaultOptions}
        width={props.width || "100%"}
        height={props.height || "100%"}
        isPaused={isPaused}
        isClickToPauseDisabled={true}
      />
      <IconButton opacity={0.6} onClick={() => setPaused(!isPaused)}>
        {isPaused ? (
          <Icon size={24} icon={play2} />
        ) : (
          <Icon size={24} icon={pause} />
        )}
      </IconButton>
    </div>
  ) : props.animation ? (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: [473, 518],
      }}
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, 360] }}
        transition={{
          loop: Infinity,
        }}
      >
        <Icon size={32} icon={spinner8} />
      </motion.div>
    </div>
  ) : (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: props.height || "100%",
      }}
    >
      Missing animation data
    </div>
  )
}

{
  /* <div
style={{
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: props.height || "100%",
}}
>
<motion.div
  initial={{ rotate: 0 }}
  animate={{ rotate: [0, 360] }}
  transition={{
    loop: Infinity,
  }}
>
  <Icon size={32} icon={spinner8} />
</motion.div>
</div> */
}
