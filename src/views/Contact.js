import React from "react"
import { useEffect } from "react"
import classNames from "classnames"
import { SectionTilesProps } from "../utils/SectionProps"
import SectionHeader from "../components/sections/partials/SectionHeader"
import Map from "../components/sections/Map"

const propTypes = {
  ...SectionTilesProps.types,
}

const defaultProps = {
  ...SectionTilesProps.defaults,
}

const Contact = (
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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

  const contact = {
    paragraph1: "Sakam Plc.",
    paragraph2:
      "Factory Phnom Penh, 1159 NR2, Angrae Leu, Steung Meanchey, Phnom Penh, Cambodia",
    paragraph3: "+855 87 654 456",
    paragraph4: "hi@sakam.org",
    paragraph5: "Join our Telegram channel",
  }

  const location = {
    address:
      "@FACTORY PHNOM PENH, National Road 2, near Chak Angrae Leu Pagoda",
    lat: 11.5238079,
    lng: 104.9321455,
  }

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div className="container-xs">
            <h6 className="text-xxs">{contact.paragraph1}</h6>
            <small className="text-xxs">{contact.paragraph2}</small>
            <br></br>
            <small className="text-xxs">{contact.paragraph3}</small>
            <br></br>
            <small className="text-xxs">{contact.paragraph4}</small>
            <h6>
              <a
                className="text-xxs"
                style={{ textDecorationLine: "underline" }}
                href="https://t.me/sakam"
                target="_blank"
              >
                {contact.paragraph5}
              </a>
            </h6>
          </div>
          <Map location={location} zoomLevel={17} />
        </div>
      </div>
    </section>
  )
}

Contact.propTypes = propTypes
Contact.defaultProps = defaultProps

export default Contact
