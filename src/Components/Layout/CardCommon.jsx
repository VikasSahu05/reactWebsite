import React from 'react';
import {Link} from 'react-router-dom';


const CardCommon = (props) => {

  return (
    <>
    <div className='col-md-4 col-10 mx-auto'>
        <div className='card'>
        <img src={props.imgsrc}  alt="" />
           <div className='card-body'>
            <p className='card-text'>
                {props.title}
             </p>
           <Link to={`/details/${props.href}`} className='btn btn-outline-primary'>know more</Link>
            </div>
        </div>
        </div>
    </>
  )
}

export default CardCommon;