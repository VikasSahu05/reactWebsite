import React from 'react'
import Common from '../Layout/Common';
import web from '../images/pic.jpg';
const About = () => {
  return (
    <>
      <Common
         name="Welcome To About Page"
         img ={web}
         visit = '/contact'
         btnName =" Contact Now"
      />
    </>
  )
}

export default About;