import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(null);

  const handleDropdownToggle = (index) => {
    setShowDropdown(index === showDropdown ? null : index);
  };

  return (
    <div className="nav-container">
      <img src={require("./images/img1.jpg")} alt="logo" className="logo" />
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav-links" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown" onMouseEnter={() => handleDropdownToggle(1)} onMouseLeave={() => handleDropdownToggle(1)}>
                <a className="nav-link dropdown-toggle" href="#" role="button" aria-expanded={showDropdown === 1 ? "true" : "false"}>
                  About
                </a>
                <ul className={`dropdown-menu ${showDropdown === 1 ? 'show' : ''}`}>
                  <li><a className="dropdown-item" href="#">Our Story</a></li>
                  <li><a className="dropdown-item" href="#">Our Team</a></li>
                  <li><a className="dropdown-item" href="#">Campus Info</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown" onMouseEnter={() => handleDropdownToggle(2)} onMouseLeave={() => handleDropdownToggle(2)}>
                <a className="nav-link dropdown-toggle" href="#" role="button" aria-expanded={showDropdown === 2 ? "true" : "false"}>
                  Programmes
                </a>
                <ul className={`dropdown-menu ${showDropdown === 2 ? 'show' : ''}`}>
                  <li><a className="dropdown-item" href="#">National Information</a></li>
                  <li><a className="dropdown-item" href="#">Diploma</a></li>
                  <li><a className="dropdown-item" href="#">Professional Diploma</a></li>
                  <li><a className="dropdown-item" href="#">Program</a></li>
                  <li><a className="dropdown-item" href="#">Executive Professional</a></li>
                  <li><a className="dropdown-item" href="#">Certificate Programme</a></li>
                </ul>
              </li> 
              <li className="nav-item dropdown" onMouseEnter={() => handleDropdownToggle(3)} onMouseLeave={() => handleDropdownToggle(3)}>
                <a className="nav-link dropdown-toggle" href="#" role="button" aria-expanded={showDropdown === 3 ? "true" : "false"}>
                Admissions
                </a>
                <ul className={`dropdown-menu ${showDropdown === 3 ? 'show' : ''}`}>
                  <li><a className="dropdown-item" href="#">National Information</a></li>
                  <li><a className="dropdown-item" href="#">Apply for a Programme</a></li>
                  <li><a className="dropdown-item" href="#">Mode Of Study</a></li>
                  <li><a className="dropdown-item" href="#">Tution</a></li>
                  <li><a className="dropdown-item" href="#">Frequently Asked Questions</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown" onMouseEnter={() => handleDropdownToggle(4)} onMouseLeave={() => handleDropdownToggle(4)}>
                <a className="nav-link dropdown-toggle" href="#" role="button" aria-expanded={showDropdown === 4 ? "true" : "false"}>
                E-Portals

                </a>
                <ul className={`dropdown-menu ${showDropdown === 4 ? 'show' : ''}`}>
                <li><a className="dropdown-item" href="#">Student</a></li>
                  <li><a className="dropdown-item" href="#">Staff</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">SQI Scholarship</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">News</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

