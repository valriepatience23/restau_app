import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';

const Header = () => {
  const items = useSelector(state => state.cart.items);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const location = useLocation();

  return (
    <header id="header" className="header fixed-top">
      {/* 🔝 Topbar affichée uniquement sur la page d’accueil */}
      {location.pathname === '/' && (
        <div className="topbar d-flex align-items-center">
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope d-flex align-items-center">
                <a href="mailto:contact@example.com">contact@example.com</a>
              </i>
              <i className="bi bi-phone d-flex align-items-center ms-4">
                <span>+1 5589 55488 55</span>
              </i>
            </div>

            <div className="languages d-none d-md-flex align-items-center">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">En</li>
                <li className="list-inline-item">
                  <a href="#">De</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* 🧭 Branding et Navbar */}
      <div className="branding d-flex align-items-center">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0 text-decoration-none">
            <h1 className="sitename mb-0">RestoSwift</h1>
          </Link>

          <Navbar />

          <div className="d-flex align-items-center gap-3">
            {/* 🛒 Bouton panier */}
            <Link to="/cart" className="cart-btn position-relative">
              <i className="bi bi-cart-fill fs-4"></i>
              {itemCount > 0 && (
                <span className="cart-count">{itemCount}</span>
              )}
            </Link>

            <Link className="btn-book-a-table d-none d-xl-block" to="/login">
              Se connecter
            </Link>

          </div>
        </div>
      </div>

      {/* 🎨 Style spécifique au panier */}
      <style>
        {`
          .cart-btn {
            position: relative;
            font-size: 28px;
            color: #faf8f8;
            text-decoration: none;
          }

          .cart-count {
            position: absolute;
            top: -8px;
            right: -10px;
            background: red;
            color: white;
            border-radius: 50%;
            padding: 2px 6px;
            font-size: 12px;
            font-weight: bold;
          }

          .cart-btn:hover .cart-count {
            transform: scale(1.1);
            transition: transform 0.2s ease;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
