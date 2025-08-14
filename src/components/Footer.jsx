import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container footer-top">
        <div className="row gy-4">
          {/* Section À propos */}
          <div className="col-lg-4 col-md-6 footer-about">
            <Link to="/" className="logo d-flex align-items-center">
              <span className="sitename">RestoSwift</span>
            </Link>
            <div className="footer-contact pt-3">
              <p>Yassa</p>
              <p>Yassa, Douala 1233</p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+237 657 03 37 29</span>
              </p>
              <p>
                <strong>Email:</strong> <span>RestoSwift@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/Menu">Menu</Link></li>
              <li><Link to="/WhyUs">Why Us</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
            </ul>
          </div>

          {/* Other Links */}
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Other Links</h4>
            <ul>
              <li><Link to="/Chefs">Chefs</Link></li>
              <li><Link to="/Gallery">Gallery</Link></li>
              <li><Link to="/Speciality">Speciality</Link></li>
              <li><Link to="/Events">Events</Link></li>
              <li><Link to="/Privacy">Privacy Policy</Link></li> {/* à créer si nécessaire */}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-4 col-md-12 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>
              Subscribe to our newsletter and receive the latest news about our products and services!
            </p>
            <form action="forms/newsletter.php" method="post" className="php-email-form">
              <div className="newsletter-form">
                <input type="email" name="email" placeholder="Your email" required />
                <input type="submit" value="Subscribe" />
              </div>
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your subscription request has been sent. Thank you!</div>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span> <strong className="px-1 sitename">RestoSwift</strong>{' '}
          <span>All Rights Reserved</span>
        </p>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/" target="_blank" rel="noopener noreferrer">Me</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
