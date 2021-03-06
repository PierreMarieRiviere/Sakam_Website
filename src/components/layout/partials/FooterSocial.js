import React from "react"
import classNames from "classnames"

const FooterSocial = ({ className, ...props }) => {
  const classes = classNames("footer-social", className)

  return (
    <div {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <a href="https://facebook.com/sakamcambodia" target="blank">
            <svg
              width="28"
              height="28"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Facebook</title>
              <path d="M10,0.5c-5.247,0-9.5,4.253-9.5,9.5c0,5.247,4.253,9.5,9.5,9.5c5.247,0,9.5-4.253,9.5-9.5C19.5,4.753,15.247,0.5,10,0.5 M10,18.637c-4.77,0-8.636-3.867-8.636-8.637S5.23,1.364,10,1.364S18.637,5.23,18.637,10S14.77,18.637,10,18.637 M10.858,7.949c0-0.349,0.036-0.536,0.573-0.536h0.719v-1.3H11c-1.38,0-1.866,0.65-1.866,1.743v0.845h-0.86V10h0.86v3.887h1.723V10h1.149l0.152-1.299h-1.302L10.858,7.949z" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://t.me/sakam" target="blank">
            <svg
              width="28"
              height="28"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Telegram</title>
              <path d="M10.696,12.191c-0.123-0.068-0.22-0.161-0.265-0.275c-0.006-0.019,0-2.357,0-2.357h1.729V8.273h-1.728V6.545l-1.1,0.006c-0.047,0.356-0.132,0.649-0.257,0.88s-0.29,0.428-0.495,0.592C8.375,8.188,8.128,8.314,7.84,8.402l0,1.166l0.865-0.009V11.8c0,0.314,0.035,0.556,0.105,0.722c0.071,0.166,0.197,0.322,0.379,0.471c0.182,0.147,0.402,0.261,0.66,0.341c0.257,0.079,0.536,0.121,0.872,0.121c0.294,0,0.535-0.029,0.79-0.086c0.254-0.056,0.619-0.153,0.933-0.292l0.005-1.062c-0.368,0.229-0.823,0.313-1.194,0.313C11.044,12.328,10.858,12.282,10.696,12.191 M10,0.5c-5.247,0-9.5,4.253-9.5,9.5c0,5.247,4.253,9.5,9.5,9.5c5.247,0,9.5-4.253,9.5-9.5C19.5,4.753,15.247,0.5,10,0.5 M10,18.637c-4.77,0-8.636-3.867-8.636-8.637S5.23,1.364,10,1.364S18.637,5.23,18.637,10S14.77,18.637,10,18.637" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default FooterSocial
