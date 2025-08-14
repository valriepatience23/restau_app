import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/PublicPage/Home';
import About from './pages/PublicPage/About';
import Menu from './pages/PublicPage/Menu';
import Gallery from './pages/PublicPage/Gallery';
import Cart from './pages/PublicPage/Cart';
import Forgotpassword from './pages/Auth/Forgotpassword';
import Events from './pages/PublicPage/Events';
import BookATable from './components/BookATable';
import Testimonials from './components/Testimonials';
import WhyUs from './components/WhyUs';
import Contact from './pages/PublicPage/contact';
import Mainlayout from './layout/FrontLayout/MainLayout';

import EffectsManager from './components/EffectsManager';
import Speciality from './pages/PublicPage/Speciality';
import Chefs from './pages/PublicPage/chefs';
import PaieForm from './pages/PublicPage/PaieForm';

import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import ResetPassword from './pages/Auth/Resetpassword';


import AdminRoutes from './routes/AdminRoute';
import RequireAuth from './components/RequireAuth';



const App = () => {
  return (
    <BrowserRouter>
      <EffectsManager />

      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="WhyUs" element={<WhyUs />} />
          <Route path="about" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Chefs" element={<Chefs />} />
          <Route path="Gallery" element={<Gallery />} />
          <Route path="Speciality" element={<Speciality />} />
          <Route path="Events" element={<Events />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="BookATable" element={<BookATable />} />
          <Route path="Testimonials" element={<Testimonials />} />
          <Route path="paiement" element={<PaieForm />} />

          <Route path="Register" element={<Register />} />
          <Route path="Login" element={<Login />} />
          <Route path="forgot-password" element={<Forgotpassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>

        <Route path="/admin/*" element={
          <RequireAuth>
            <AdminRoutes />
          </RequireAuth>
        } />
      </Routes>
      
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
};

export default App;
