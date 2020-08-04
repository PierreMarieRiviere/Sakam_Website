import React from "react"
import { useEffect } from "react"
// import sections
import Team from "../components/sections/Team"

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <Team />
}

export default About
