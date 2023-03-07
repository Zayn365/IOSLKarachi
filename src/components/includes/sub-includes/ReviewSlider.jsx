import React from 'react'
import ReviewSliderSec from '../sections/ReviewSliderSec'

const ReviewSlider = () => {
  return <>
  <div className="container-fluid bg-image py-5" style={{ margin: '90px 0' }}>
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-lg-5 mb-5 mb-lg-0">
                    <div className="section-title position-relative mb-4">
                        <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Testimonial</h6>
                        <h1 className="display-4">What Say Our Students</h1>
                    </div>
                    <p className="m-0">We have had over <b style={{fontSize: '18px', color: '#28156e'}}>500+</b> happy students in IOSL Pakistan, who have successfully completed our ultrasound training programs and advanced their skills in the field of sonology. Our team of experienced instructors and experts in the field of ultrasound technology are dedicated to providing quality education and practical training to help our students become proficient in various ultrasound applications such as obstetric and gynecologic, abdominal, vascular, and musculoskeletal sonography. We take pride in the success of our students and strive to maintain our reputation as one of the leading ultrasound institutes in Pakistan.</p>
                </div>
                <div className="col-lg-7">
                    <ReviewSliderSec />
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Testimonial Start --> */}

  </>
}

export default ReviewSlider