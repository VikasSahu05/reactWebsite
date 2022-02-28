import React from 'react'
import CardCommon from '../Layout/CardCommon';
import {Sdata}  from '../Layout/Sdata';

const Services = () => {
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Our Services</h1>
      </div>
      <div className='container-fluid mb-5'>
          <div className='row'>
              <div className='col-10 mx-auto'>
                <div className='row gy-4'>
                    {/* <div className='col-md-4 col-10 mx-auto'> */}
                     { 
                      Sdata.map((val,index)=>{
                        return <CardCommon key={index}
                           imgsrc={val.imgsrc}
                          title={val.title}
                          href ={val.id}
                        />
                      })
                     }
                    {/* </div> */}
                </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Services;