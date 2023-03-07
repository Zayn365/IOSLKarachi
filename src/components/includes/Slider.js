import React from 'react';
import { Link } from 'react-router-dom';
// import Carousel from 'react-elastic-carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation } from "swiper";
import { Parallax, Pagination, Navigation } from "swiper";
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css/autoplay';


SwiperCore.use([Autoplay]);

const Slider = props => {
  return (
    <div className='slider'>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          backgroundColor: '#0f0e1066'
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        loop={true}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide className='d-flex'>
         <div className='col-md-7'>
         <div className="title" data-swiper-parallax="-300">
          <h2>Diploma In <br></br>Ultrasonography</h2>
         </div>
         <div className="subtitle" data-swiper-parallax="-200">
          <p>Duration: {props.course[0].period}</p>
         </div>
         <div className="text" data-swiper-parallax="-100"> 
           <span className='lead'>
           {props.course[0].info}
           </span>
           <Link to='/1/usercourses' style={{ textDecoration: 'none' }}><button className='btn btn-outline-warning'>Join Us</button></Link>
          </div>
         </div>
        
        </SwiperSlide>
        <SwiperSlide>
         <div className='col-md-7'>
         <div className="title" data-swiper-parallax="-300">
          <h2>Certificate In Ultrasonography</h2>
         </div>
         <div className="subtitle" data-swiper-parallax="-200">
         <p>Duration: {props.course[1].period}</p>
         </div>
         <div className="text" data-swiper-parallax="-100"> 
           <span className='lead'>
           {props.course[1].info}
           </span>
           <Link to='/2/usercourses' style={{ textDecoration: 'none' }}><button className='btn btn-outline-warning'>Join Us</button></Link>
          </div>
         </div>
         
         {/* <div className='col-md-4'>
         <img className='mt-5' src='assets/img/logo.png' alt='IOSL' width='200px' />
         </div>  */}
        </SwiperSlide>
      </Swiper>

       {/* <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay,Navigation]}
      loop
    >
      <SwiperSlide>
        <div className='row'>
    <div className='col-lg-6'>
      <div className='slide-text-1'>
          <h1>Diploma In <br></br>Ultrasonography</h1>
          <p>Duration: 1 year</p>
          <span>
            lore ipsumlore ipsumlore ipsumlore ipsumlore ipsumlore ipsum
            lore ipsumlore ipsumlore ipsumlore ipsumlore ipsum
            lore ipsumlore ipsumlore ipsumlore ipsumlore ipsumlore ipsum
            lore ipsumlore ipsumlore ipsumlore ipsum
            lore ipsumlore ipsumlore ipsum
            lore ipsumlore ipsumlore ipsumlore ipsumlore ipsum
          </span>
          <button className='btn btn-outline-warning'>Join Us</button>
          </div>
          </div>
          <div className='col-lg-6'>
          <div className="order-0 order-lg-2 main">
                            <div className="about-img">
                                <img src="assets/img/stock2.jpg" alt="img" />
                                <img src="assets/img/stock3.jpg" alt="img" className="img-two" />
                            </div>
                        </div>

          </div>
        </div>
        </SwiperSlide>
      <SwiperSlide>
      <div className='row'>
    <div className='col-lg-6'>
      <div className='slide-text-1'>
          <h1>Certificate In Ultrasonography</h1>
          <p>Duration: 6 months</p>
          <span>
            lore ipsumlore ipsumlore ipsumlore ipsumlore ipsumlore ipsum
            lore ipsumlore ipsumlore ipsumlore ipsumlore ipsum
            lore ipsumlore ipsumlore ipsumlore ipsumlore ipsumlore ipsum
            lore ipsumlore ipsumlore ipsumlore ipsum
            lore ipsumlore ipsumlore ipsum
            lore ipsumlore ipsumlore ipsumlore ipsumlore ipsum
          </span>
          <button className='btn btn-outline-warning'>Join Us</button>
          </div>
          </div>
          <div className='col-lg-6'>
          <div className="order-0 order-lg-2 main">
                            <div className="about-img">
                                <img src="assets/img/stock2.jpg" alt="img" />
                                <img src="assets/img/stock3.jpg" alt="img" className="img-two" />
                            </div>
                        </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper> */}
    </div>
  )  
}

export default Slider