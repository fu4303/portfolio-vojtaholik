import React from "react"
import Lottie from "react-lottie"
import { IconButton } from "@theme-ui/components"
import { Icon } from "react-icons-kit"
import { play2, pause } from "react-icons-kit/icomoon"

export default function AnimationRenderer(props) {
  const [isPaused, setPaused] = React.useState(false)

  const defaultOptions = {
    loop: props.loop || true,
    autoplay: props.autoplay || true,
    animationData: props.animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return props.animation ? (
    <div style={{ display: "flex", alignItems: "flex-end", marginBottom: 40 }}>
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
  ) : (
    <div
      style={{
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
