/** @jsx jsx */
import React from "react"
import { jsx, Styled, Box, Button, Radio, Label } from "theme-ui"
import CodeBlock from "../../../src/components/code-block"

/* eslint-disable */

export default function OverlayExercise() {
  const [state, setState] = React.useState({})
  const [isSolutionVisible, setSolutionVisible] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [started, setStarted] = React.useState(false)

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&")
  }
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(
        () => setIsSubmitted(true)
        // navigate(form.getAttribute("action"))
      )
      .catch((error) => alert(error))
  }
  return (
    <>
      <Styled.h3>Exercise</Styled.h3>
      {/* {started && (
        <Button onClick={() => setStarted(!started)}>
          Show the result again
        </Button>
      )} */}
      {!started && (
        <>
          Center text inside the image so that it looks like this:
          <CodeBlock
            className="language-js"
            live
            hideEditor
            // sx={{ transform: "scale(0.78)" }}
          >
            {`
  <div 
    style={{
      width: 300, 
      height: 300, 
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
  }}>
    <img
      style={{position: 'absolute'}}
      src="https://picsum.photos/id/10/300?blur=2&grayscale"
    />
    {/* this div is centered inside the image */}
    <div
      style={{
        position: 'absolute',
        background: 'white'
      }}
    >
      {'Center me inside the image'}
    </div>
  </div>
  `}
          </CodeBlock>
        </>
      )}
      <div sx={{ position: "relative" }}>
        <CodeBlock
          className="language-js"
          live
          hidePreview={!started ? true : false}
          sx={{ position: "absolute" }}
        >
          {`
<div 
  style={{
    width: 300, 
    height: 300
  }}>
  <img 
    style={{}}
    src="https://picsum.photos/id/10/300?blur=2&grayscale"
  />
  {/* center this div on top of the image */}
  <div style={{
    background: 'white'
  }}>
    {'Center me inside the image'}
  </div>
</div>
        `}
        </CodeBlock>
        {!started && (
          <div
            sx={{
              position: "absolute",
              top: 0,
              left: [-3, 0],
              width: ["calc(100% + 60px)", "100%"],
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(2px)",
            }}
          >
            <Button variant="secondary" onClick={() => setStarted(true)}>
              Start Exercise
            </Button>
          </div>
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        name="css-overlay"
        method="post"
        data-netlify="true"
        action="/posts/css-exercises"
        data-netlify-honeypot="bot-field"
      >
        <input
          type="hidden"
          name="form-name"
          value="css-overlay"
          onChange={handleChange}
        />
        <Box sx={{ visibility: "hidden", display: "none" }}>
          <Label
            sx={{
              alignItems: "center",
              svg: { mr: "4px" },
            }}
          >
            <Radio
              type="hidden"
              name="Answer"
              value="wrong"
              onChange={handleChange}
            />
            Wrong
          </Label>
          <Label sx={{ alignItems: "center", svg: { mr: "4px" } }}>
            <Radio name="Answer" value="close" onChange={handleChange} />
            Close
          </Label>
          <Label sx={{ alignItems: "center", svg: { mr: "4px" } }}>
            <Radio name="Answer" value="correct" onChange={handleChange} />
            Correct
          </Label>
        </Box>
        {isSolutionVisible && (
          <>
            <br />
            <Styled.h3>Solution:</Styled.h3>
            <p>Todo: Describe why & how...</p>
            <CodeBlock className="language-js">
              {`
<div 
  style={{
    width: 300,
    height: 300,
    position: 'relative', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center'
  }}>
  <img
    style={{
      position: 'absolute'
    }}
    src="https://picsum.photos/id/10/300?blur=2&grayscale"
  />
  <div
    style={{
      position: 'absolute',
      background: 'white'
    }}>
    {'Center me inside the image'}
  </div>
</div>
`}
            </CodeBlock>
            <fieldset
              name="Answer[]"
              multiple
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
            >
              <legend>My solution was:</legend>
              <Label sx={{ alignItems: "center", svg: { mr: "4px" } }}>
                <Radio name="Answer" value="wrong" onChange={handleChange} />
                Wrong
              </Label>
              <Label sx={{ alignItems: "center", svg: { mr: "4px" } }}>
                <Radio name="Answer" value="close" onChange={handleChange} />
                Close
              </Label>
              <Label sx={{ alignItems: "center", svg: { mr: "4px" } }}>
                <Radio name="Answer" value="correct" onChange={handleChange} />
                Correct
              </Label>
            </fieldset>
            {!isSubmitted && (
              <Button
                variant="secondary"
                type="submit"
                sx={{ mt: 2, py: 1, px: 2, cursor: "pointer" }}
              >
                Submit Answer
              </Button>
            )}
            {!isSubmitted && " Your answer helps me to improve the exercise."}
            {isSubmitted && "Answer submitted, thanks!"}
          </>
        )}
      </form>
      {isSolutionVisible && <hr sx={{ my: 2 }} />}
      {started && (
        <>
          {!isSolutionVisible && `When you're done: `}
          <Button
            sx={{ py: 1, px: 2, cursor: "pointer" }}
            my={2}
            onClick={() => setSolutionVisible(!isSolutionVisible)}
          >
            {isSolutionVisible ? "Hide" : "View"} solution
          </Button>
        </>
      )}
    </>
  )
}
