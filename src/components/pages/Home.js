import React from 'react'
import Slider from '../includes/Slider'
import CourseButtons from '../includes/CourseButtons'
import AboutSec from '../includes/sections/AboutSec'
import WhyUsSec from '../includes/sections/WhyUsSec'
import ContactSec from '../includes/sections/ContactSec'
import TeacherSlide from '../includes/sections/TeacherSlide'
import ReviewSlider from '../includes/sub-includes/ReviewSlider'

const Home = props => {
  return (
    <div>
    <div>
     <Slider course={props.course} />
    </div>
    <div>
      <CourseButtons course={props.course} />
    </div>
    <div>
      <AboutSec />
    </div>
    <div>
      <WhyUsSec />
    </div>
    <div>
     <div className="container-fluid py-5 teacher-main">
        <div className="container py-5">
            <div className="section-title text-center position-relative mb-5">
                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Instructors</h6>
                <h1 className="display-4">Meet Our Instructors</h1>
            </div>
             <TeacherSlide />
       </div>
      </div>
     </div>
    <div>
      <ReviewSlider />
    </div>
    <div>
      <ContactSec />
    </div>
    </div>
  )
}

export default Home