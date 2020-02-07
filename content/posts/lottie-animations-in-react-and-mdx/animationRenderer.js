import React from "react"
import Lottie from "react-lottie"
import { IconButton } from "@theme-ui/components"
import { Icon } from "react-icons-kit"
import { play2, pause } from "react-icons-kit/icomoon"

export default function AnimationRenderer(props) {
  const [isPaused, setPaused] = React.useState(false)
  const [isLoaded, setLoaded] = React.useState(false)
  const defaultOptions = {
    loop: props.loop || true,
    autoplay: props.autoplay || true,
    animationData: props.animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  const eventListeners = [
    {
      eventName: "data_ready",
      callback: () => (setLoaded(true), console.log("domloaded")),
    },
  ]
  return props.animation ? (
    <div style={{ display: "flex", alignItems: "flex-end", marginBottom: 40 }}>
      <Lottie
        options={defaultOptions}
        width={props.width || "100%"}
        height={props.height || "100%"}
        isPaused={isPaused}
        isClickToPauseDisabled={true}
        eventListeners={eventListeners}
      />

      <IconButton opacity={0.6} onClick={() => setPaused(!isPaused)}>
        {isPaused ? (
          <Icon size={24} icon={play2} />
        ) : (
          <Icon size={24} icon={pause} />
        )}
      </IconButton>
    </div>
  ) : (
    "Missing animation data"
  )
}
