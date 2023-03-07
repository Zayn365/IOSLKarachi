import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// import './../../css/review-slider.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper";


const ReviewSliderSec = () => {
  return (
    <>
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
      className="mySwiper review-slider"
    //   style={{ width: '60%' , height: '60%'}}
    >
      <SwiperSlide className='review-slide' >
        <img src="assets/img/rev-4.png" alt='img-02' width='100%' />
      </SwiperSlide>
      <SwiperSlide className='review-slide'>
        <img src="assets/img/rev-1.png" alt='img-01' width='100%' />
      </SwiperSlide>
      <SwiperSlide className='review-slide'>
        <img src="assets/img/rev-3.png" alt='img-03' width='100%' />
      </SwiperSlide>
    </Swiper>
  </>
  )
}

export default ReviewSliderSec