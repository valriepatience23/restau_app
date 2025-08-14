import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer py-4">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-lg-between">
          {/* Left side */}
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="copyright text-center text-sm text-muted text-lg-start">
              © {year}, made with <i className="fa fa-heart"></i> by{' '}
              <a
                href="https://www.creative-tim.com"
                className="font-weight-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Creative Tim
              </a>{' '}
              for a better web.
            </div>
          </div>

          {/* Right side */}
          <div className="col-lg-6">
            <ul className="nav nav-footer justify-content-center justify-content-lg-end">
              <li className="nav-item">
                <a
                  href="https://www.creative-tim.com"
                  className="nav-link text-muted"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Creative Tim
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.creative-tim.com/presentation"
                  className="nav-link text-muted"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.creative-tim.com/blog"
                  className="nav-link text-muted"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.creative-tim.com/license"
                  className="nav-link pe-0 text-muted"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
