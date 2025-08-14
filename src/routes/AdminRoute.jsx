import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Admin/Dashboard';
import Users from '../pages/Admin/Users';
import AdminLayout from '../layout/AdminLayout/Admin';
import Profile from '../pages/Admin/Profile';
import Categorie from '../pages/Admin/Categorie';
import Plats from '../pages/Admin/Plats';
import Commandes from '../pages/Admin/Commande';

const AdminRoutes = () => {
  return (
    <Routes>
        <Route path="/dashboard" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="profile" element={<Profile />} />
            <Route path="categories" element={<Categorie />} />
            <Route path="plats" element={<Plats />} />
            <Route path="commandes" element={<Commandes />} />
        </Route>
    </Routes>
  );
};

export default AdminRoutes;
