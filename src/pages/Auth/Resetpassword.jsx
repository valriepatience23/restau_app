import React, { useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link, useNavigate } from 'react-router-dom';
import { resetPassword as apiResetPassword, forgotPassword as apiForgotPassword } from '../../services/api';

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    email: '',
    code: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  React.useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    if (formData.newPassword !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }
    
    if (formData.newPassword.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères');
      return;
    }
    
    setLoading(true);
    
    try {
      const response = await apiResetPassword(formData.email, formData.code, formData.newPassword);
      setSuccess('Mot de passe réinitialisé avec succès');
      setTimeout(() => {
        navigate('/Login');
      }, 2000);
    } catch (err) {
      setError(err?.message || 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    if (!formData.email) {
      setError('Veuillez saisir votre adresse e-mail d\'abord');
      return;
    }
    
    setError('');
    setSuccess('');
    setResendLoading(true);
    
    try {
      await apiForgotPassword(formData.email);
      setSuccess('Un nouveau code de vérification a été envoyé à votre adresse e-mail');
    } catch (err) {
      setError(err?.message || 'Erreur lors de l\'envoi du code');
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <section className="auth-section">
      <div className="auth-grid">
        <div className="auth-image" data-aos="fade-right">
          <img src="assets/img/log.jpg" alt="Connexion" />
        </div>

        <div className="auth-form-container" data-aos="fade-left">
          <h2>Réinitialiser votre mot de passe</h2>
          <form onSubmit={handleResetPassword}>
            {error && (
              <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>
            )}
            {success && (
              <div style={{ color: 'green', marginBottom: 12 }}>{success}</div>
            )}
            
            <input
              type="email"
              name="email"
              placeholder="Adresse e-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
            
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                name="code"
                placeholder="Code de vérification (reçu par email)"
                value={formData.code}
                onChange={handleChange}
                required
              />
              <Link
                to="#"
                onClick={handleResendCode}
                disabled={resendLoading || !formData.email}
                style={{
                  position: 'absolute',
                  right: '8px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#007bff',
                  cursor: 'pointer',
                  fontSize: '12px',
                  textDecoration: 'underline'
                }}
              >
                {resendLoading ? 'Envoi...' : 'Renvoyer'}
              </Link>
            </div>
            
            <input
              type="password"
              name="newPassword"
              placeholder="Nouveau mot de passe"
              value={formData.newPassword}
              onChange={handleChange}
              required
            />
            
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmer le nouveau mot de passe"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            
            <button type="submit" disabled={loading}>
              {loading ? 'Réinitialisation...' : 'Réinitialiser le mot de passe'}
            </button>

            {/* Liens supplémentaires */}
          <div className="auth-links" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
            <Link to="/Login">Retour à la connexion</Link>
          </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
