import React from 'react';
import {NavLink} from 'react-router-dom'

const Navbar = () => (
    <nav className="navbar navbar-dark  bg-primary ">
    <div className="navbar-brand">
     NOTES <span role="img">📝</span>
    </div>
  <ul className="navbar-nav d-flex flex-row ">
  <li className="nav-item px-5">
    <NavLink
      className="nav-link "
      to="/"
      exact
    >
      Main
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink
      className="nav-link"
      to="/about"
    >
      Information
    </NavLink>
  </li>
  <li className="nav-item">
  <NavLink
  className="nav-link px-5"
  to="/authorization">
  Authorization
  </NavLink>
  </li>
</ul>
</nav>
)

export default Navbar;