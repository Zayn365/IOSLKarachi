import React from 'react'
import AboutSec from '../includes/sections/AboutSec'
import WhyUsSec from '../includes/sections/WhyUsSec'
import BreadCrumbs from '../includes/sub-includes/BreadCrumbs'

const About = () => {
  return (
    <div>
      <BreadCrumbs name="About" url="/about" />
      <div>
      <AboutSec />
      </div>
      <div>
      <WhyUsSec />
      </div>
    </div>
  )
}

export default About