import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {Sdata}  from '../Layout/Sdata';

const ServiceDetails =()=> {
///
    for(let i=0;i<Sdata.length;i++){
        console.log(Sdata[i]);
    }
///
    const {id} = useParams();

    const [data,setData] = useState({
        title:'vikas',
    })

    useEffect(()=>{
        setData({
            title:`${Sdata[0].title}`
        })
    },[])

    

    console.log(id);
    console.log(data.title);
  return (
    <>
        <div>
            <h2 className='text-center'>Service Details</h2>
        </div>
        <div>   
            <p>{data.title}</p>
        </div>
    </>

  )
}


export default ServiceDetails;