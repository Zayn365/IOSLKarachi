import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumbs from '../includes/sub-includes/BreadCrumbs';
import { syllabus } from '../info/Inforamtion'; 
import { Swiper, SwiperSlide } from "swiper/react";
// import './../../css/review-slider.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper";


const Courses = props => {
  // console.log(props.course);
  return (
    <div>
    <BreadCrumbs name="Courses" url="/courses" />
    <div className='d-flex' style={{justifyContent: 'center'}}>
      <div className='col-md-8 mt-5'>
         { props.course.map((val,key) => {
          return (
            <div className='mb-5 ml-4 p-4 main-box' style={{border: 'solid 1px black', borderRadius: '10px'}} key={key}>
              <h3>{val.id}. {val.name}</h3>
              <h6>Duration: <span className='text-success'>{val.period}</span></h6>
              <h6>Price: <span className='text-danger'>{val.price}</span></h6>
              <h6>Timing: <span className='text-warning'>{val.time}</span></h6>
              <h6>Description: </h6><p className='text-muted'>{val.info}</p>
              <h6>Syllabus: </h6>
              <br />
               {syllabus.map( (newVal) => {
                return (<>
              <ul>
                <li key={key}>
                  <b className='text-dark'>{newVal.name}: </b>
                  <p className='text-secondary'>{newVal.info}.</p>
                </li>
              </ul>
              </>
                )
               }) }
              {val.outline ?
              <div>
                <h4 className='text-center'>Course Outline</h4>
              <Swiper
              effect={"cube"}
              grabCursor={true}
              cubeEffect={{
               shadow: true,
               slideShadows: true,
               shadowOffset: 20,
               shadowScale: 0.94,
                  }}

               pagination={true}
               modules={[EffectCube, Pagination]}
               className="mySwiper outline-slider"
//   style={{ width: '60%' , height: '60%'}}
>
              {val.outline.map((val,key) => {
                return <>                
                   <SwiperSlide className='outline-slide' key={'ouline #'.key}>
                       <img src={val} alt={'Pic#' + val} width='100%' />
                    </SwiperSlide>
                       </>   
              })}
              </Swiper>
              </div>
              : null}
               <br />
              <Link to="/contact">
                <button className='btn btn-md btn-outline-danger'>Contact Us</button>
              </Link>
            </div>
          )
         })}
      </div>
    </div>
    </div>
  )
}

export default Courses