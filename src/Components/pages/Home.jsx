import React from 'react'
import web from '../images/pic.jpg';
import Common from '../Layout/Common';

const Home = () => {
  return (
    <>
     <Common
        name="Grow your bussiness with"
         img ={web}
         visit = '/service'
         btnName =" Get Started"
     />
    </>
  )
}

export default Home;