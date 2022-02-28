import React from 'react'
import { Route, Routes,Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Navbar from './Layout/Navbar';
import Footer from './pages/Footer';
import ServiceDetails from './pages/ServiceDetails';

const App = () => {
  return (
    <div>
    <Navbar/>
        <Routes>
            <Route path="/" exact element={<Home/>}></Route>
            <Route path="/about" exact element={<About/>}></Route>
            <Route path="/service" exact element={<Services/>}></Route>
            <Route path="/contact" exact element={<Contact/>}></Route>
            <Route path="/details/:id" exact element={<ServiceDetails/>}></Route>
            {/* <Route path="*" element={<Home/>}></Route> */} 
            {/* or */}
            <Route path="*" element={<Navigate to="/"/>}></Route>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App;