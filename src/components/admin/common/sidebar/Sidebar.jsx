import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/backofficer/">
              <span className="icon"><i className="fa fa-tachometer"/></span>
              <span className="title">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/backofficer/traveler">
              <span className="icon"><i className="fa-solid fa-user-group"/></span>
              <span className="title">Traveler Managemenet</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/client">
              <span className="icon"><i className="fa fa-female" aria-hidden="true"/></span>
              <span className="title">Client</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/vehicle">
              <span className="icon"><i className="fa fa-car" aria-hidden="true"/></span>
              <span className="title">Vehicle</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/package">
              <span className="icon"><i className="fa fa-archive" aria-hidden="true"/></span>
              <span className="title">Package</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/ride">
              <span className="icon"><i className="fa fa-location-arrow" aria-hidden="true"/></span>
              <span className="title">Ride</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/career">
              <span className="icon"><i className="fa fa-user-tie" aria-hidden="true"/></span>
              <span className="title">Career</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}


export default Sidebar;
