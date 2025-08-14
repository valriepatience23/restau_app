import React, { useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link, useNavigate } from 'react-router-dom';
import { forgotPassword as apiForgotPassword } from '../../services/api';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  React.useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    
    try {
      const response = await apiForgotPassword(email);
      setSuccess('Un code de vérification a été envoyé à votre adresse e-mail');
      toast.success('Code envoyé par email');
      navigate('/reset-password');
    } catch (err) {
      const msg = err?.message || 'Une erreur est survenue';
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
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
          <h2>Reinitiiser votre Mot de passe</h2>
          <form onSubmit={handleForgotPassword}>
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

export default ForgotPassword;
