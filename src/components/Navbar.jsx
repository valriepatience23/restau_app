import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav id="navmenu" className="navmenu">
      <ul>
        <li>
          <Link to="/" className={isActive('/') ? 'active text-warning fw-bold' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={isActive('/about') ? 'active text-warning fw-bold' : ''}>
            About
          </Link>
        </li>
        <li>
          <Link to="/menu" className={isActive('/menu') ? 'active text-warning fw-bold' : ''}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="/speciality" className={isActive('/speciality') ? 'active text-warning fw-bold' : ''}>
            Speciality
          </Link>
        </li>
        <li>
          <Link to="/events" className={isActive('/events') ? 'active text-warning fw-bold' : ''}>
            Events
          </Link>
        </li>
        <li>
          <Link to="/chefs" className={isActive('/chefs') ? 'active text-warning fw-bold' : ''}>
            Chefs
          </Link>
        </li>
        <li>
          <Link to="/gallery" className={isActive('/gallery') ? 'active text-warning fw-bold' : ''}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/contact" className={isActive('/contact') ? 'active text-warning fw-bold' : ''}>
            Contact
          </Link>
        </li>
      </ul>

      <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
    </nav>
  );
};

export default Navbar;
