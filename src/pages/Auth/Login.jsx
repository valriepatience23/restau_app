import React, { useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  


  React.useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Connexion:', { email, password });
  };

  return (
    <section className="auth-section">
      <div className="auth-grid">
        <div className="auth-image" data-aos="fade-right">
          <img src="assets/img/log.jpg" alt="Connexion" />
        </div>

        <div className="auth-form-container" data-aos="fade-left">
          <h2>Identifiez-Vous</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Adresse e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* <div className="auth-form-check d-flex justify-content-between align-items-center mb-4">
              <input className="auth-form-check-input" type="checkbox" id="rememberMe"/>
              <label className="auth-form-check-label" htmlFor="rememberMe" required >Se souvenir de moi</label>
            </div> */}
            <button type="submit">Se connecter</button>

            {/* Liens supplémentaires */}
          <div className="auth-links" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
            <Link to="/forgot-password">Mot de passe oublié ?</Link>
            <span>
              Vous n'avez pas de compte ? <Link to="/register" style={{ marginLeft: '6px' }}>Créer un compte</Link>
            </span>
          </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
