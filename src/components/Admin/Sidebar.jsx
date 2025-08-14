import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo-ct-dark.png'; // Assure-toi que le chemin est correct
import './Sidenav.css'; // Pour les styles personnalisés si besoin

const navItems = [
  { label: 'Dashboard', icon: 'dashboard', path: '/dashboard', active: true },
  { label: 'Tables', icon: 'table_view', path: '/tables' },
  { label: 'Billing', icon: 'receipt_long', path: '/billing' },
  { label: 'Virtual Reality', icon: 'view_in_ar', path: '/virtual-reality' },
  { label: 'RTL', icon: 'format_textdirection_r_to_l', path: '/rtl' },
  { label: 'Notifications', icon: 'notifications', path: '/notifications' },
];

const accountItems = [
  { label: 'Profile', icon: 'person', path: '/profile' },
  { label: 'Sign In', icon: 'login', path: '/sign-in' },
  { label: 'Sign Up', icon: 'assignment', path: '/sign-up' },
];

const Sidenav = () => {
  return (
    <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-radius-lg fixed-start ms-2 bg-white my-2" id="sidenav-main">
      <div className="sidenav-header">
        <i className="fas fa-times p-3 cursor-pointer text-dark opacity-5 position-absolute end-0 top-0 d-xl-none" id="iconSidenav" />
        <a className="navbar-brand px-4 py-3 m-0" href="https://demos.creative-tim.com/material-dashboard/pages/dashboard" target="_blank" rel="noopener noreferrer">
          <img src={logo} className="navbar-brand-img" width="26" height="26" alt="main_logo" />
          <span className="ms-1 text-sm text-dark">Creative Tim</span>
        </a>
      </div>

      <hr className="horizontal dark mt-0 mb-2" />

      <div className="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
        <ul className="navbar-nav">
          {navItems.map(({ label, icon, path, active }) => (
            <li className="nav-item" key={label}>
              <NavLink
                to={path}
                className={`nav-link ${active ? 'active bg-gradient-dark text-white' : 'text-dark'}`}
              >
                <i className="material-symbols-rounded opacity-5">{icon}</i>
                <span className="nav-link-text ms-1">{label}</span>
              </NavLink>
            </li>
          ))}

          <li className="nav-item mt-3">
            <h6 className="ps-4 ms-2 text-uppercase text-xs text-dark font-weight-bolder opacity-5">Account pages</h6>
          </li>

          {accountItems.map(({ label, icon, path }) => (
            <li className="nav-item" key={label}>
              <NavLink to={path} className="nav-link text-dark">
                <i className="material-symbols-rounded opacity-5">{icon}</i>
                <span className="nav-link-text ms-1">{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidenav-footer position-absolute w-100 bottom-0">
        <div className="mx-3">
          <a
            className="btn btn-outline-dark mt-4 w-100"
            href="https://www.creative-tim.com/learning-lab/bootstrap/overview/material-dashboard?ref=sidebarfree"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
          <a
            className="btn bg-gradient-dark w-100"
            href="https://www.creative-tim.com/product/material-dashboard-pro?ref=sidebarfree"
            target="_blank"
            rel="noopener noreferrer"
          >
            Upgrade to pro
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidenav;
