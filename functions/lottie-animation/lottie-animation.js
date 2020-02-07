/* eslint-disable */
const fetch = require("node-fetch")
exports.handler = async function(event, context) {
  try {
    const response = await fetch("https://vojta.io/lottie-animation.json", {
      headers: { Accept: "application/json" },
    })
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText }
    }
    const data = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify({ lottieAnimation: data }),
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ lottieAnimation: err.message }), // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
