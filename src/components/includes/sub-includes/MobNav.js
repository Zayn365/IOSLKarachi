import React from 'react'
import { NavLink , Outlet} from 'react-router-dom'
import { facebook_link , g_map } from '../../info/Inforamtion'
const MobNav = props => {
  return <>
  
      {/* MOB NAV */}
    
      <div className='mob-nav-main'>
         <div className='col-10 mob-nav-col-main'>
            <div className='cancel-btn' onClick={() => props.changeMe()}><i className='fa fa-close'></i></div>
            <div className='mob-nav-menu'>
          <ul className='mob-nav-ul'>      
            <NavLink to="/" onClick={() => props.changeMe()}>
           {({ isActive }) => (
              <li className={`${isActive ? 'whites' : 'greys' }`}>Home</li>
           )}
          </NavLink>
          <NavLink to="/courses" onClick={() => props.changeMe()}>
          {({ isActive }) => (
              <li className={`${isActive ? 'whites' : 'greys' }`}>Courses</li>
           )}
          </NavLink>
          <NavLink to="/about" onClick={() => props.changeMe()}>
          {({ isActive }) => (
              <li className={`${isActive ? 'whites' : 'greys'} `}>About</li>
           )}
          </NavLink>
          <NavLink to="/contact" onClick={() => props.changeMe()}>
          {({ isActive }) => (
              <li className={`${isActive ? 'whites' : 'greys' }`}>Contact</li>
           )}
          </NavLink>
          <div className="d-flex ml-0  mob-nav-socials">
            {/* eslint-disable-next-line */}
            <a className="text-white ml-1 mr-3" style={{fontSize: '18px'}} href={g_map}><i className="fa-2x fa-brands fa-square-google-plus"  style={{color: '#ffa903'}}></i></a>
            <a className="text-white ml-1 mr-3" style={{fontSize: '18px' }}  href={facebook_link}><i className="fab fa-2x fa-facebook-f" style={{color: '#ffa903'}}></i></a>
            {/* <Link className="text-white ml-1 mr-3" style={{fontSize: '18px'  }} to="/"><i className="fab fa-2x fa-linkedin-in"style={{color: '#ffa903'}}></i></Link> */}
         </div>
       </ul>
       <Outlet />
            </div>
         </div>
     </div>
         </>
  }
export default MobNav