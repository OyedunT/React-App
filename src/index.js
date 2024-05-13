import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './Nav.js';
import Header from './Header.js';
import Programmes from './Programmes.js';
import Courses from './Courses.js';
import Profession from './Profession.js';
import Alumni from './Alumni.js';
import Tour from './Tour.js';
import Testimonial from './Testimonial.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Header />
    <Programmes />
    <Courses />
    <Profession />
    <Alumni />
    <Tour />
    <Testimonial />
    <App />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
