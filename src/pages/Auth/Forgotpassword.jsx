import React, { useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  


  React.useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Conn:', { email });
  };

  return (
    <section className="auth-section">
      <div className="auth-grid">
        <div className="auth-image" data-aos="fade-right">
          <img src="assets/img/log.jpg" alt="Connexion" />
        </div>

        <div className="auth-form-container" data-aos="fade-left">
          <h2>Reinitiiser votre Mot de passe</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Adresse e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            
            {/* <div className="auth-form-check d-flex justify-content-between align-items-center mb-4">
              <input className="auth-form-check-input" type="checkbox" id="rememberMe"/>
              <label className="auth-form-check-label" htmlFor="rememberMe" required >Se souvenir de moi</label>
            </div> */}
            <button type="submit">Reinitialiser ic</button>

            {/* Liens supplémentaires */}
          <div className="auth-links" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
            <Link to="/login">se connecter ?</Link>
          </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
