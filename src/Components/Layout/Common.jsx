import React from 'react'
import { NavLink } from 'react-router-dom';
import web from '../images/pic.jpg';
const Common = (props) => {
  return (
    <>
         <section id="header" className=''>
        <div className="container-fluid">
          <div className='row'>
            <div className='col-lg-10 my-5 mx-auto'>
                <div className='row'>
                    <div className='col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 d-flex flex-column justify-content-center'>
                      <h1>{props.name} <p>with
                      <strong className='text-info'>  Vikas Saranga</strong>
                      </p></h1>
                      <p className='my-3'>
                        We are the Developers
                      </p>
                      <div className='mt-3'>
                        <NavLink to={props.visit} className='btn btn-outline-info getStarted' 
                        style={{borderRadius:"50px"}}>{props.btnName}</NavLink>
                      </div>
                  </div>
                  <div className='col-md-6 pt-5 pt-lg-0 order-1 order-lg-2'>
                      <img src={web} alt="image" className='img-fluid animated'/>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Common