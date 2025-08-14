import React, { useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/api';
import { toast } from 'react-toastify';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  


  React.useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await login(email, password);
      toast.success('Connexion réussie !');
      navigate('/admin/dashboard');
    } catch (err) {
      const msg = err?.message || 'Une erreur est survenue';
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false)
    }
  };

  return (
    <section className="auth-section">
      {loading && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ background: 'rgba(0,0,0,.25)', zIndex: 2000 }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Chargement...</span>
          </div>
        </div>
      )}
      <div className="auth-grid">
        <div className="auth-image" data-aos="fade-right">
          <img src="assets/img/log.jpg" alt="Connexion" />
        </div>

        <div className="auth-form-container" data-aos="fade-left">
          <h2>Identifiez-Vous</h2>
          <form onSubmit={handleLogin}>
            {error && (
              <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>
            )}
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
            <button type="submit" disabled={loading}>{loading ? 'Connexion...' : 'Se connecter'}</button>

            {/* Liens supplémentaires */}
          <div className="auth-links" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
            <Link to="/forgot-password">Mot de passe oublié ?</Link>
            <span>
              Vous n'avez pas de compte ? <Link to="/Register" style={{ marginLeft: '6px' }}>Créer un compte</Link>
            </span>
          </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
