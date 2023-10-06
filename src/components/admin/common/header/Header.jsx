import React from 'react';
import './Header.css'; // Use a capital letter for the file name
import logo from '../../../../assets/logo/logo.svg';
import { Link } from 'react-router-dom';

import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <div className="top-navbar">
      <div className="hamburger">
        <div className="one" />
        <div className="two" />
        <div className="three" />
      </div>
      <div className="col-12 top-menu">
        <div className="col-7 d-flex justify-content-end">
          <img src={logo} alt="" />
        </div>
        <div className="col-5 d-flex justify-content-end">
          <ul className="mb-0">
            <li className="mt-1">
              <p className="d-inline me-2">
                <i className="fa fa-sign-out logout-icon" aria-hidden="true" />
              </p>
              <p className="d-inline ms-2 me-2 fw-bold profile-text">Madhusha</p>
            </li>
            <li>
              <Link to="/client">
                <i className="fas fa-user" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
