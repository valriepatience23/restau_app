import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bell, Search, Settings as SettingsIcon, UserCircle, LogOut } from 'lucide-react';
import { getCurrentUser, logout } from '../../services/api';
import avatarTeam from '../../assets/Admin/img/team-2.jpg';
import { toast } from 'react-toastify';

const notifications = [
  {
    type: 'message',
    title: 'New message',
    from: 'Laur',
    time: '13 minutes ago',
    avatar: avatarTeam,
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();

  const handleLogout = () => {
    logout();
    toast.success('Déconnexion réussie');
    navigate('/Login');
  };

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
              <span className="input-group-text bg-transparent pe-0"><Search size={16} /></span>
              <input type="text" className="form-control" placeholder="Rechercher..." />
            </div>
          </div>

          <ul className="navbar-nav d-flex align-items-center justify-content-end">
            <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
              <a href="#" className="nav-link text-body p-0" id="iconNavbarSidenav">
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line" />
                  <i className="sidenav-toggler-line" />
                  <i className="sidenav-toggler-line" />
                </div>
              </a>
            </li>

            <li className="nav-item dropdown pe-3 d-flex align-items-center">
              <a href="#" className="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <Bell size={20} />
              </a>
              <ul className="dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                {notifications.map((notif, index) => (
                  <li className="mb-2" key={index}>
                    <a className="dropdown-item border-radius-md" href="#">
                      <div className="d-flex py-1">
                        <div className="my-auto">
                          <img src={notif.avatar} className="avatar avatar-sm me-3" alt="avatar" />
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
              {currentUser && <button type="button" onClick={handleLogout} className="btn btn-sm btn-outline-dark ms-2 d-flex align-items-center gap-1">
                <LogOut size={16} />
                Déconnexion
              </button>}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
