import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Teachers , male , female } from '../../info/Inforamtion'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const TeacherSlide = () => {
  return (
    <div className="teacher-slider">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {Teachers.map((val , key) => {
          // const checkme = {val.gender === 'male' ? {male} : {female} };
          return  <SwiperSlide key={key}>
          <div className="teacher-box">
            {
            val.gender === 'male' 
            ? 
            <img src={val.img ? val.img : male} alt={val.name}/> 
            :
            <img src={val.img ? val.img : female} alt={val.name}/>
             }
            <h4>{val.name}<br /><span className="teacher-deg">{val.degree}</span></h4>
            <h6>{val.designation}</h6>
            <p className="teacher-para">{val.exp}</p>
          </div>
          </SwiperSlide>
        })}
      </Swiper>
    </div>
  );
}

export default TeacherSlide;