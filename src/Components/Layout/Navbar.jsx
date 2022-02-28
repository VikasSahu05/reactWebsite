import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='container-fluid'>
        <div className="row d-flex justify-content-center align-items-center">
            <div className='col-sm-10'>              
          <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <NavLink activeClassName='menu-active' className="navbar-brand text-muted" to="/"><h2>Vikas Saranga</h2></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto mb-2">
              <li className="nav-item">
                <NavLink activeClassName='menu-active' className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName='menu-active' className="nav-link" to="/service">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName='menu-active' className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName='menu-active' className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;