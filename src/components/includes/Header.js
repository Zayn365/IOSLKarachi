import React from 'react'
import { Link } from 'react-router-dom'
// import MobNav from './sub-includes/MobNav';
import Navbar from './sub-includes/Navbar';
import {phone , whatsapp , email, facebook_link} from './../info/Inforamtion';
import TopBar from './sections/TopBar';
// import { left } from '@popperjs/core';

const Header = props => {
  return <>
  {/* Top Bar */}
    <TopBar phone={phone} whatsapp={whatsapp} email={email} facebook={facebook_link} />
  {/* Top Bar End */}
  <div className='container-fluid my-header'>
        <div className='row'>
          <div className='col-md-1'>
          <Link to="/" style={{textDecoration: 'none'}}><img src='assets/img/logo.png' className='my-logo' alt="logo" /></Link>
          </div>
          <div className='col-md-3 my-logo-name'>
             <h2 className='m-auto'>IOSL</h2>
             <h5 className='m-auto'>Institute of Sonology</h5>
             <h6 className='m-auto'>Ultra Sound Training Center</h6>
          </div>
          {/* Nav BAR */}
           <div className='col-md-6'>
               <Navbar changeMe={ props.changeMe } />
               {/* <MobNav /> */}
           </div>
        </div>
      </div>
      </>
}

export default Header