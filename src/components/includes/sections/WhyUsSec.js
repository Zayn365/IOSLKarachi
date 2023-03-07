import React from 'react'

const WhyUsSec = () => {
  return (
    <div>
        <div className="container-fluid bg-image" style={{margin: '90px 0'}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-7 my-5 pt-5 pb-lg-5">
                    <div className="section-title position-relative mb-4">
                        <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Why Choose Us?</h6>
                        <h1 className="display-4">Why You Should Start Learning with Us?</h1>
                    </div>
                    <p className="mb-4 pb-2">IOSL's commitment to
                providing high-quality ultrasound training is evident in their
                approach. Their emphasis on hands-on training, coupled with
                their expert faculty, ensures that students are well-equipped to
                meet the demands of the field. Their growth and reputation
                within the industry demonstrate the effectiveness of their
                approach and the success of their graduates.</p>
                    <div className="d-flex mb-3">
                        <div className="btn-icon bg-primary mr-4">
                            <i className="fa fa-2x fa-graduation-cap text-white"></i>
                        </div>
                        <div className="mt-n1">
                            <h4>Skilled Instructors</h4>
                            <p>At IOSL, we have highly skilled and experienced instructors who encourage and bring out the best in each student. Our courses include practical demonstrations, hands-on training, and special care given to all students. We've graduated over 50 alumni and continue to spread our wings across the country.</p>
                        </div>
                    </div>
                    <div className="d-flex mb-3">
                        <div className="btn-icon bg-secondary mr-4">
                            <i className="fa fa-2x fa-certificate text-white"></i>
                        </div>
                        <div className="mt-n1">
                            <h4>International Certificate</h4>
                            <p>We offer globally recognized certifications for our courses, providing students with a competitive edge in the job market. Our programs meet the highest international standards, and our faculty ensures a thorough understanding of the latest techniques and best practices. Our certification enables students to demonstrate their skills and knowledge to potential employers, opening up opportunities for career advancement.</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="btn-icon bg-warning mr-4">
                            <i className="fa fa-2x fa-book-reader text-white"></i>
                        </div>
                        <div className="mt-n1">
                            <h4>Online/OnCampus Classes</h4>
                            <p className="m-0">We offer online classes for our courses, providing students with the flexibility to learn at their own pace and convenience. Our online classes are designed to provide the same high-quality education and training as our in-person classes, with interactive lectures, practical demonstrations, and hands-on training. With our online classes, students can learn from anywhere in the world, and access our courses on their own schedule.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5" style={{minHeight: '500px'}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100" src="assets/img/feature.jpg" alt="Why Us" style={{objectFit: 'contain'}} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default WhyUsSec