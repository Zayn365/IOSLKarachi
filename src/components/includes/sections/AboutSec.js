import React from "react";

const AboutSec = () => {
  return (
    <div>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div
              className="col-lg-5 mb-5 mb-lg-0"
              style={{ minHeight: "500px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100"
                  src="assets/img/about.webp"
                  style={{ objectFit: "contain" }}
                  alt="AboutImg"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="section-title position-relative mb-4">
                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
                  About Us
                </h6>
                <h1 className="display-4">
                  First Choice For Ultrasonography Education Anywhere
                </h1>
              </div>
              <p>
                IOSL, or the Institute of Sonology, is an organization that
                provides top-notch ultrasound training both in-campus and
                online. Their mission is to equip students with real-time skills
                to excel in the field of ultrasound, making them a leading
                source for ultrasound education. The institute is affiliated
                with the <b style={{fontSize: '18px' ,color: '#28156e'}}>Sindh Board of Technical Education</b> and is the only
                center in Karachi that offers such comprehensive training. At
                IOSL, students are not only provided with theoretical knowledge
                but also practical demonstrations, hands-on training on
                patients, and special care given to each student. 
                <br />
                The highlydedicated and experienced faculty at the institute encourages
                and instigates each student to bring out their best, making
                their training sessions highly effective. Since its inception in
                2014, IOSL has grown exponentially, with more than <b style={{fontSize: '18px' ,color: '#28156e'}}>500</b> alumni
                graduating from the institute. They have gained a reputation for
                their exceptional training programs, spreading their wings
                across the country and gaining recognition as a leading
                ultrasound training center.
              </p>
              <div className="row pt-3 mx-0 about-sec-main">
                <div className="col-3 px-0 about-sec-small">
                  <div className="bg-success text-center p-4">
                    <h1 className="text-white" data-toggle="counter-up">
                      10+
                    </h1>
                    <h6 className="text-uppercase text-white">
                      Available<span className="d-block">Subjects</span>
                    </h6>
                  </div>
                </div>
                <div className="col-3 px-0 about-sec-small">
                  <div className="bg-primary text-center p-4">
                    <h1 className="text-white" data-toggle="counter-up">
                      10+
                    </h1>
                    <h6 className="text-uppercase text-white">
                      Online<span className="d-block">Courses</span>
                    </h6>
                  </div>
                </div>
                <div className="col-3 px-0 about-sec-small">
                  <div className="bg-danger text-center p-4">
                    <h1 className="text-white" data-toggle="counter-up">
                      10+
                    </h1>
                    <h6 className="text-uppercase text-white">
                      OnCampus<span className="d-block">Courses</span>
                    </h6>
                  </div>
                </div>
                <div className="col-3 px-0 about-sec-small">
                  <div className="bg-secondary text-center p-4">
                    <h1 className="text-white" data-toggle="counter-up">
                      10+
                    </h1>
                    <h6 className="text-uppercase text-white">
                      Skilled<span className="d-block">Instructors</span>
                    </h6>
                  </div>
                </div>
                <div className="col-3 px-0 about-sec-small">
                  <div className="bg-warning text-center p-4">
                    <h1 className="text-white" data-toggle="counter-up">
                      500+
                    </h1>
                    <h6 className="text-uppercase text-white">
                      Happy<span className="d-block">Students</span>
                    </h6>
                  </div>
                </div>
                <div className="col-3 px-0 about-sec-small">
                  <div className="bg-dark text-center p-4">
                    <h1 className="text-white" data-toggle="counter-up">
                      10+
                    </h1>
                    <h6 className="text-uppercase text-white">
                      International<span className="d-block">Certification</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSec;
