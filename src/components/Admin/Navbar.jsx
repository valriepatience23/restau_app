import React from 'react';
import { Link } from 'react-router-dom';
import avatarTeam from '../assets/img/team-2.jpg';
import logoSpotify from '../assets/img/small-logos/logo-spotify.svg';

const notifications = [
  {
    type: 'message',
    title: 'New message',
    from: 'Laur',
    time: '13 minutes ago',
    avatar: avatarTeam,
  },
  {
    type: 'album',
    title: 'New album',
    from: 'Travis Scott',
    time: '1 day',
    avatar: logoSpotify,
    gradient: 'bg-gradient-dark',
  },
  {
    type: 'payment',
    title: 'Payment successfully completed',
    time: '2 days',
    svg: true, 
    gradient: 'bg-gradient-secondary',
  },
];

const Navbar = () => {
  return (
    <nav className="navbar navbar-main navbar-expand-lg px-0 mx-3 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true">
      <div className="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li className="breadcrumb-item text-sm">
              <Link className="opacity-5 text-dark" to="#">Pages</Link>
            </li>
            <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Dashboard</li>
          </ol>
        </nav>

        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div className="ms-md-auto pe-md-3 d-flex align-items-center">
            <div className="input-group input-group-outline">
              <label className="form-label">Type here...</label>
              <input type="text" className="form-control" />
            </div>
          </div>

          <ul className="navbar-nav d-flex align-items-center justify-content-end">
            <li className="nav-item d-flex align-items-center">
              <a className="btn btn-outline-primary btn-sm mb-0 me-3" target="_blank" rel="noopener noreferrer" href="https://www.creative-tim.com/builder?ref=navbar-material-dashboard">
                Online Builder
              </a>
            </li>

            <li className="mt-1">
              <a className="github-button" href="https://github.com/creativetimofficial/material-dashboard" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star creativetimofficial/material-dashboard on GitHub">
                Star
              </a>
            </li>

            <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
              <a href="#" className="nav-link text-body p-0" id="iconNavbarSidenav">
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line" />
                  <i className="sidenav-toggler-line" />
                  <i className="sidenav-toggler-line" />
                </div>
              </a>
            </li>

            <li className="nav-item px-3 d-flex align-items-center">
              <a href="#" className="nav-link text-body p-0">
                <i className="material-symbols-rounded fixed-plugin-button-nav">settings</i>
              </a>
            </li>

            <li className="nav-item dropdown pe-3 d-flex align-items-center">
              <a href="#" className="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="material-symbols-rounded">notifications</i>
              </a>
              <ul className="dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                {notifications.map((notif, index) => (
                  <li className="mb-2" key={index}>
                    <a className="dropdown-item border-radius-md" href="#">
                      <div className="d-flex py-1">
                        <div className="my-auto">
                          {notif.svg ? (
                            <div className={`avatar avatar-sm ${notif.gradient} me-3 my-auto`}>
                              {/* SVG inline */}
                              <svg width="12px" height="12px" viewBox="0 0 43 36" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.6" fill="#FFFFFF" d="M43,10.7V3.6C43,1.6,41.4,0,39.4,0H3.6C1.6,0,0,1.6,0,3.6v7.1H43z" />
                                <path fill="#FFFFFF" d="M0,16.1v16.1C0,34.2,1.6,35.8,3.6,35.8h35.8C41.4,35.8,43,34.2,43,32.2V16.1H0z M19.7,26.9H7.2v-3.6h12.5V26.9z M35.8,26.9h-7.2v-3.6h7.2V26.9z" />
                              </svg>
                            </div>
                          ) : (
                            <img src={notif.avatar} className="avatar avatar-sm me-3" alt="avatar" />
                          )}
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="text-sm font-weight-normal mb-1">
                            {notif.title} {notif.from && <span className="font-weight-bold">from {notif.from}</span>}
                          </h6>
                          <p className="text-xs text-secondary mb-0">
                            <i className="fa fa-clock me-1" />
                            {notif.time}
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <li className="nav-item d-flex align-items-center">
              <Link to="/sign-in" className="nav-link text-body font-weight-bold px-0">
                <i className="material-symbols-rounded">account_circle</i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
