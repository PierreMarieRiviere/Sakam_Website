import React from "react"
import { useEffect } from "react"
import classNames from "classnames"
import { SectionTilesProps } from "../utils/SectionProps"
import Training from "../components/sections/Training"

const propTypes = {
  ...SectionTilesProps.types,
}

const defaultProps = {
  ...SectionTilesProps.defaults,
}

const Documentation = (
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

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <Training />
        </div>
      </div>
    </section>
  )
}

Documentation.propTypes = propTypes
Documentation.defaultProps = defaultProps

export default Documentation
