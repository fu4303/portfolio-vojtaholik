/** @jsx jsx */
import React from "react"
import { graphql } from "gatsby"
import { jsx, Styled, Image } from "theme-ui"
import Layout from "../components/layout"
import Telephone from "../images/scheduled.gif"
import dayjs from "dayjs"
import advancedFormat from "dayjs/plugin/advancedFormat"
import { isEmpty } from "lodash"

dayjs.extend(advancedFormat)

const ThanksPage = ({
  data: {
    site: { siteMetadata },
  },
  location,
}) => {
  const urlParams = new URLSearchParams(location.search)
  const date = isEmpty(urlParams.get("event_start_time"))
    ? null
    : urlParams.get("event_start_time")
  const firstName = urlParams.get("invitee_first_name")
  const event = urlParams.get("event_type_name")

  const [meeting, setMeeting] = React.useState({
    date: null,
    firstName: null,
    event: null,
  })
  React.useEffect(() => setMeeting({ date, firstName, event }), [
    date,
    firstName,
    event,
  ])
  return (
    <Layout {...siteMetadata}>
      {meeting.date ? (
        <>
          <Styled.h1 sx={{ mt: "6px" }}>Thanks, {meeting.firstName}!</Styled.h1>
          <Styled.p>
            Our {decodeURI(meeting.event)} is scheduled for{" "}
            <Styled.strong>
              {dayjs(meeting.date).format("dddd, MMMM Do")} {" at "}
              {dayjs(meeting.date).format("h:mm A")}
            </Styled.strong>
            . The meeting is via{" "}
            <Styled.a href="https://zoom.us/">Zoom</Styled.a>, and you should
            receive all the details on your email at any time now. I&apos;m
            looking forward to it! 😊
          </Styled.p>
        </>
      ) : (
        <>
          <Styled.h1 sx={{ mt: "6px" }}>All scheduled, thanks!</Styled.h1>
          <Styled.p>
            The meeting is via <Styled.a href="https://zoom.us/">Zoom</Styled.a>
            , and you should receive all the details on your email at any time
            now. I&apos;m looking forward to it. See you there!
          </Styled.p>
        </>
      )}
      <Image src={Telephone} alt="Dial phone gif" />
    </Layout>
  )
}

export const thanksQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

export default ThanksPage
