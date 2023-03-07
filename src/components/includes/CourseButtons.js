import React from 'react';
import { Link } from 'react-router-dom';

const CourseButtons = props => {
  return (
    <div className="col-md-12 course-btn">
        {props.course.map(val => {
           return <Link key={val.id} className='col-md-3' to={`/${val.id}/usercourses`}><button className="btn btn-lg btn-outline-primary"  key={val.id}>{val.name}</button></Link>
        })}
    </div>

  )
}

export default CourseButtons