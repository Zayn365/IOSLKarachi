import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { Home, Courses , Contact , About } from '../../pages';
import Home from '../../pages/Home'
import Courses from '../../pages/Courses'
import Contact from '../../pages/Contact'
import About from '../../pages/About'
import UserCourses from '../../pages/UserCourses'
import { courses } from '../../info/Inforamtion';
import { useEffect } from 'react';
// import Home from '../../pages'

const MyRoutes = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  // console.log(courses)
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home course={courses}/>} />
        <Route exact path="/courses" element={<Courses course={courses} />} />
        <Route exact path='/:courseId/usercourses' element={<UserCourses course={courses} />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default MyRoutes;