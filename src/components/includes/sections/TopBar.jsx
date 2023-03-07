import React from 'react';
// import { Link } from 'react-router-dom';

const TopBar = props => {
  return  <div className="container-fluid" style={{backgroundColor: '#0c071c'}}>
      <div className="row py-1 px-lg-5">
          <div className="col-lg-4 text-center text-lg-left mb-2 mb-lg-0 icon-hover-main">
              <div className="align-items-center text-white">
                  <small><i className="fa fa-phone-alt mr-2"></i>{props.phone}</small>
                  {/* <small className="px-3 small-friend">|</small> */}
              </div>
          </div>
          <div className="col-lg-4 text-center text-lg-left mb-2 mb-lg-0 icon-hover-main">
              <div className="align-items-center text-white">
                  <small><i className="fa fa-envelope mr-2"></i>{props.email}</small>
                  {/* <small className="px-3 small-friend">|</small> */}
              </div>
          </div>
          <div className="col-lg-4 text-center text-lg-left mb-2 mb-lg-0 icon-hover-main">
              <div className="align-items-center text-white">
                   <small><i className="fa-brands fa-whatsapp mr-2"></i>{props.whatsapp}</small>
              </div>
          </div>
          {/* <div className="col-lg-6 text-center text-lg-right">
              <div className="d-inline-flex align-items-center icon-hover">
                 eslint-disable-next-line 
                  <a className="text-white px-2" href={props.facebook}>
                      <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="text-white px-2" href="/">
                      <i className="fa-brands fa-square-google-plus"></i>
                  </a>
                  <a className="text-white px-2" href="/">
                      <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="text-white px-2" href="/">
                      <i className="fab fa-instagram"></i>
                  </a>
                  <a className="text-white pl-2" href="/">
                      <i className="fab fa-youtube"></i>
                  </a>
              </div>
          </div> */}
      </div>
  </div>


}

export default TopBar;