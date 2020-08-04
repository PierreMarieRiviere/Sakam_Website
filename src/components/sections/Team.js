import React from "react"
import classNames from "classnames"
import { SectionTilesProps } from "../../utils/SectionProps"
import SectionHeader from "./partials/SectionHeader"
import Image from "../elements/Image"

const propTypes = {
  ...SectionTilesProps.types,
}

const defaultProps = {
  ...SectionTilesProps.defaults,
}

const Team = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const classes = classNames("footer-social", className)

  const outerClasses = classNames(
    "team section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  )

  const innerClasses = classNames(
    "team-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  )

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left")

  const sectionHeader = {
    title: "Techies talk to banks",
    paragraph:
      "Sakam is an independent, lightweight startup that's built up its technology over several years. Our goal is to automate loan origination processes as much as possible through artificial intelligence and human-centered design.",
  }

  const sectionFooter = {
    title: "Better financial inclusion with digital tools",
    paragraph: "Our supporters:",
  }

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  }

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="center-content">
                  <Image
                    className="center-content"
                    src={require("./../../assets/images/team-1.png")}
                    alt="Hero"
                    width={120}
                    height={120}
                  />
                </div>

                <div className="team-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="team-item-name text-color-high">
                    Pierre-Marie Riviere
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="team-item-link">
                    <a href="#0">CEO</a>
                  </span>
                </div>
                <div {...props} className={classes}>
                  <ul className="list-reset">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/pmriviere/"
                        target="blank"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>LinkedIn</title>
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/PierreMarieRiviere"
                        target="blank"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Github</title>
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/pmriviere" target="blank">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Twitter</title>
                          <path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="center-content">
                  <Image
                    className="center-content"
                    src={require("./../../assets/images/team-2.png")}
                    alt="Hero"
                    width={120}
                    height={120}
                  />
                </div>

                <div className="team-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="team-item-name text-color-high">
                    Jean-Pierre Cheng
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="team-item-link">
                    <a href="#0">CTO</a>
                  </span>
                </div>
                <div {...props} className={classes}>
                  <ul className="list-reset">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/jeanpierrecheng/"
                        target="blank"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>LinkedIn</title>
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/issuehsu" target="blank">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Github</title>
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={innerClasses}>
            <SectionHeader data={sectionFooter} className="center-content" />
            <div style={divStyle}>
              <Image
                src={require("./../../assets/images/partner-1.png")}
                alt="Features split 01"
                width={180}
                height={36}
              />
              <Image
                src={require("./../../assets/images/partner-2.png")}
                alt="Features split 01"
                width={150}
                height={120}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Team.propTypes = propTypes
Team.defaultProps = defaultProps

export default Team
