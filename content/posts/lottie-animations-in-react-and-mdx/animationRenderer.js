import React from "react"
import Lottie from "react-lottie"
import { IconButton } from "@theme-ui/components"
import { Icon } from "react-icons-kit"
import { play2, pause, spinner8 } from "react-icons-kit/icomoon"
import { motion } from "framer-motion"
import fetch from "isomorphic-unfetch"

export default function AnimationRenderer(props) {
  const [isPaused, setPaused] = React.useState(false)
  const [isLoaded, setLoaded] = React.useState(false)

  async function getAnimationData() {
    fetch(props.animation)
      .then(res => res)
      .then(data => setLoaded(true))
      .catch(error => console.log("error: ", error))
  }

  getAnimationData()

  const defaultOptions = {
    loop: props.loop || true,
    autoplay: props.autoplay || true,
    animationData: props.animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  // const eventListeners = [
  //   {
  //     eventName: "data_ready",
  //     callback: () => setLoaded(true),
  //   },
  // ]

  return props.animation && isLoaded ? (
    <div style={{ display: "flex", alignItems: "flex-end", marginBottom: 40 }}>
      <Lottie
        // eventListeners={eventListeners}
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
  ) : isLoaded ? (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 400,
      }}
    >
      Missing animation data
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 400,
      }}
    >
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{
          loop: Infinity,
        }}
      >
        <Icon size={32} icon={spinner8} />
      </motion.div>
    </div>
  )
}
