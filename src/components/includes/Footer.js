import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { address ,phone, email , courses, facebook_link, g_map, whatsapp } from '../info/Inforamtion';
import { useEffect } from 'react';

const Footer = props => {
    useEffect( () => {
        window.scrollTo(0 , 0);
    } , [])
    console.log(courses);
    const num = [0,1,2,3];
    return (
    <div>
        <div className="container-fluid position-relative overlay-top bg-dark text-white-50 py-5" style={{marginTop: '90px'}}>
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-md-6 mb-10" style={{ marginBottom: '10px' }}>
                    <Link to="/" className="navbar-brand">
                  
                        <img className="my-logo-foot" src='assets/img/logo.png' alt='logo'/>
             <div style={{marginTop: '7px' , marginLeft: '10px'}}>
             <h2 className='m-auto' style={{ color: '#eeedef'}}>IOSL</h2>
             <h5 className='m-auto' style={{  color: '#000000' }}>Institute of Sonology</h5>
             <h6 className='m-auto' style={{ color: '#0d6efd' }}>Ultra Sound Training Center</h6>
             </div>     
                    </Link>
                    <p className="col-md-8 pt-4 pb-4 m-0">
                    ALL TRAINING GUIDE LINE FOLLOWED BY American Institute of ultrasound in medicine an international society of ultrasound in obst gynae
                    </p>
                </div>
                <div className="col-md-6 mb-5">
                    <h3 className="text-white mb-4">Newsletter</h3>
                    <div className="w-100">
                        <div className="input-group">
                          <input type="text" className="form-control border-light" style={{padding: '30px'}} placeholder="Your Email Address" />
                            <div className="input-group-append">
                                <button className="btn btn-primary px-4">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 mb-5">
                    <h3 className="text-white mb-4">Get In Touch</h3>
                     <div> 
                        <p><i className="fa fa-map-marker-alt mr-2"></i>{address}</p>
                        <p><i className="fa fa-phone-alt mr-2"></i>{phone}</p>
                        <p><i className="fa-brands fa-whatsapp mr-2"></i>{whatsapp}</p>
                        <p><i className="fa fa-envelope mr-2"></i>{email}</p>
                        </div>
                    <div className="d-flex justify-content-start mt-4">
                    <a className="text-white ml-1 mr-3" style={{fontSize: '18px'}} href={g_map}><i className="fa-2x fa-brands fa-square-google-plus" ></i></a>
            <a className="text-white ml-1 mr-3" style={{fontSize: '18px' }}  href={facebook_link}><i className="fab fa-2x fa-facebook-f"></i></a>
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <h3 className="text-white mb-4">Our Pages</h3>
                    <div className="d-flex flex-column justify-content-start">
                        <Link className="text-white-50 mb-2" to="/"><i className="fa fa-angle-right mr-2"></i>Home</Link>
                        <Link className="text-white-50 mb-2" to="/courses"><i className="fa fa-angle-right mr-2"></i>Courses</Link>
                        <Link className="text-white-50 mb-2" to="/about"><i className="fa fa-angle-right mr-2"></i>About</Link>
                        <Link className="text-white-50 mb-2" to="/contact"><i className="fa fa-angle-right mr-2"></i>Contact</Link>
                        {/* <Link className="text-white-50" to="/"><i className="fa fa-angle-right mr-2"></i>SEO</Link> */}
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <h3 className="text-white mb-4">Our Courses</h3>
                    <div className="d-flex flex-column justify-content-start">
                        {num.map((val , key) => {
                          return (
                            <div key={key}>
                        <Link className="text-white-50 mb-2" to={`/${courses[val].id}/usercourses`}><i className="fa fa-angle-right mr-2"></i>{courses[val].name}</Link>
                            </div>
                          )  
                        } )}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid bg-dark text-white-50 border-top py-4" style={{borderColor: 'rgba(256, 256, 256, .1) !important', backgroundColor: '#120f2d'}}>
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                    <p className="m-0">Copyright &copy; <Link className="text-white">Institute of Ultrasonology</Link>. All Rights Reserved.
                    </p>
                </div>
                <div className="col-md-6 text-center text-md-right">
                    <p className="m-0">Designed & Developed by <a className="text-white" href="https://zaynsaeed.netlify.app/">Zayn Saeed</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <Helmet>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
    <script src="assets/lib/easing/easing.min.js"></script>
    <script src="assets/lib/waypoints/waypoints.min.js"></script>
    <script src="assets/lib/counterup/counterup.min.js"></script>
    <script src="assets/lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="js/main.js"></script>
    </Helmet>
    </div>
  )
}

export default Footer