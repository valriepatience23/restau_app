// src/layout/AdminLayout.jsx
import Sidebar from '../../components/Admin/Sidebar';
import Navbar from '../../components/Admin/Navbar';
import { Outlet } from 'react-router-dom';
import '../assets/Admin/css/dash.css';


const Admin = () => {
  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;  
