import React, { useState } from 'react'

const Contact = () => {

  const [inputData,setInputData] = useState({
    name:"",
    phone:"",
    email:"",
    message:""
  })

  const inputEvent = (e)=>{
      console.log(e.target.value);
      const {name ,value} = e.target;

      setInputData((preValue)=>{
          return{
            ...preValue,
            [name]:value
          }
      })
  }

  const store = localStorage.getItem('store');
  const formSubmit = (e)=>{
      e.preventDefault();
      alert(`Name : ${inputData.name} 
            Phone : ${inputData.phone} 
            Email : ${inputData.email}
            Message : ${inputData.email}`)
      var objData = [];
      if(store == null){
       objData = [];
      }else{
        objData = JSON.parse(store);
      }

      const obj = {
        name:inputData.name,
        phone:inputData.phone,
        email:inputData.email,
        message:inputData.message
      };

      objData.push(obj);

      localStorage.setItem('store',JSON.stringify(store));

      setInputData({
        name:"",
        phone:"",
        email:"",
        message:""
      })
  }

  return (
    <>
      <div className='my-5 container-fluid'>
        <h1 className='text-center'>Contact Us</h1>
    </div>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-6 col-12 mx-auto'>
        <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text"  value={inputData.name}  onInput={inputEvent} className="form-control" name="name" id="name" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input type="text" value={inputData.phone} onInput={inputEvent} className="form-control" name="phone" id="phone"/>
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input type="email" value={inputData.email} onInput={inputEvent} className="form-control" name="email" id="email"/>
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea type="email" value={inputData.message} onInput={inputEvent}  className="form-control" name="message" id="message"></textarea>
            </div>
            <button type="submit" className="btn btn-outline-primary">Submit</button>
        </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact;