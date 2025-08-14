import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Tags, 
  ChefHat, 
  ShoppingCart, 
  BarChart3,
  Settings,
  User,
  LogOut
} from 'lucide-react';
import { logout, getCurrentUser } from '../../services/api';
import { toast } from 'react-toastify';
import logo from '../../assets/Admin/img/logo-ct-dark.png';

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/admin/dashboard' },
  { label: 'Utilisateurs', icon: Users, path: '/admin/dashboard/users' },
  { label: 'Catégories', icon: Tags, path: '/admin/dashboard/categories' },
  { label: 'Plats', icon: ChefHat, path: '/admin/dashboard/plats' },
  { label: 'Commandes', icon: ShoppingCart, path: '/admin/dashboard/commandes' },
  { label: 'Statistiques', icon: BarChart3, path: '/admin/dashboard/stats' },
];

const accountItems = [
  { label: 'Paramètres', icon: Settings, path: '/admin/dashboard/settings' },
  { label: 'Mon Profil', icon: User, path: '/admin/dashboard/profile' },
];

const Sidenav = () => {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();

  const handleLogout = () => {
    logout();
    toast.success('Déconnexion réussie');
    navigate('/Login');
  };

  return (
    <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-radius-lg fixed-start ms-2 bg-white my-2" id="sidenav-main">
      <div className="sidenav-header">
        <i className="fas fa-times p-3 cursor-pointer text-dark opacity-5 position-absolute end-0 top-0 d-xl-none" id="iconSidenav" />
        <div className="navbar-brand px-4 py-3 m-0">
          <img src={logo} className="navbar-brand-img" width="26" height="26" alt="main_logo" />
          <span className="ms-1 text-sm text-dark">Restaurant Admin</span>
        </div>
      </div>

      <hr className="horizontal dark mt-0 mb-2" />

      <div className="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
        <ul className="navbar-nav">
          {navItems.map(({ label, icon: Icon, path }) => (
            <li className="nav-item" key={label}>
              <NavLink
                to={path}
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active bg-gradient-dark text-white' : 'text-dark'}`
                }
              >
                <Icon size={20} className="opacity-75 me-2" />
                <span className="nav-link-text">{label}</span>
              </NavLink>
            </li>
          ))}

          <li className="nav-item mt-3">
            <h6 className="ps-4 ms-2 text-uppercase text-xs text-dark font-weight-bolder opacity-5">Compte</h6>
          </li>

          {accountItems.map(({ label, icon: Icon, path }) => (
            <li className="nav-item" key={label}>
              <NavLink 
                to={path} 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active bg-gradient-dark text-white' : 'text-dark'}`
                }
              >
                <Icon size={20} className="opacity-75 me-2" />
                <span className="nav-link-text">{label}</span>
              </NavLink>
            </li>
          ))}

        
        </ul>
      </div>

      <div className="sidenav-footer position-absolute w-100 bottom-0">
        <div className="mx-3">
          {currentUser && (
            <div className="card card-plain shadow-none" style={{ background: '#f8f9fa' }}>
              <div className="card-body p-3">
                <div className="d-flex align-items-center">
                  <div className="avatar avatar-sm me-2">
                    <div className="avatar-initial rounded-circle bg-gradient-dark text-white d-flex align-items-center justify-content-center">
                      {currentUser.name?.charAt(0).toUpperCase() || 'A'}
                    </div>
                  </div>
                  <div>
                    <h6 className="mb-0 text-sm">{currentUser.name}</h6>
                    <p className="text-xs text-secondary mb-0">{currentUser.role}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidenav;
