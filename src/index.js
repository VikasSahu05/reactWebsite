import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter } from 'react-router-dom';
import App from './Components/App';

ReactDOM.render(
 <>
 <BrowserRouter>
    <App/>
 </BrowserRouter>
 </>,
  document.getElementById('root')
);
