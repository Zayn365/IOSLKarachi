import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';


const Navbar = props => {
  
  return (<div>
   {/* // Desktop NAV */}
    <div className='container nav-bar-head'>
       <ul className='nav nav-bar'>
          <NavLink to="/" >
           {({ isActive }) => (
              <li className={`${isActive ? 'blues' : 'greys' }`}>Home</li>
           )}
          </NavLink>
          <NavLink to="/courses" >
          {({ isActive }) => (
              <li className={`${isActive ? 'blues' : 'greys' }`}>Courses</li>
           )}
          </NavLink>
          <NavLink to="/about" >
          {({ isActive }) => (
              <li className={`${isActive ? 'blues' : 'greys'} `}>About</li>
           )}
          </NavLink>
          <NavLink to="/contact" >
          {({ isActive }) => (
              <li className={`${isActive ? 'blues' : 'greys' }`}>Contact</li>
           )}
          </NavLink>
          <div className='side-social-btn'>
          <a href="https://www.facebook.com/ioslkarachi/" style={{paddingRight: '20px' , paddingLeft: '18px'}}>
          <i className="fa-brands fa-square-facebook"></i>
          </a>
          <span style={{ border: 'solid 1px lightgrey' , height: '28px', marginTop: '-2px' }}></span>
          <a style={{paddingRight: '2px' , paddingLeft: '20px'}} href='https://www.google.com/maps?ll=24.860325,67.064372&z=13&t=m&hl=en&gl=US&mapclient=embed&cid=8776677407877729375'>
          <i className="fa-brands fa-square-google-plus"></i>
          </a>
          </div>
       </ul>
       <Outlet />
    </div>
    <div className='container mob-nav-top'>
       <ul className='nav pb-2'>
         <button 
         className='btn btn-outline-primary rounded' 
         onClick={() => props.changeMe()}>
            <i className='fa fa-bars'></i>
         </button>
       </ul>
   </div>
   </div> 
  )
}

export default Navbar