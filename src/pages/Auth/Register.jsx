import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register as apiRegister } from '../../services/api';
import { toast } from 'react-toastify';


const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  // const [policyAccepted, setPolicyAccepted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      toast.error('Les mots de passe ne correspondent pas');
      return;
    }
    setLoading(true);
    try {
      const payload = {
        name: formData.name,
        telephone: formData.phone,
        email: formData.email,
        password: formData.password,
      };
      const res = await apiRegister(payload);
      setSuccess('Inscription réussie');
      toast.success('Inscription réussie');
      // Token/user déjà stockés; on peut rediriger
      navigate('/admin/dashboard');
    } catch (err) {
      const msg = err?.message || 'Une erreur est survenue';
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="register-section">
      {loading && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ background: 'rgba(0,0,0,.25)', zIndex: 2000 }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Chargement...</span>
          </div>
        </div>
      )}
      <div className="register-grid">
        {/* 📝 Formulaire à droite */}
        <div className="register-form-container" data-aos="fade-right">
          <h2 className="register-title">Inscrivez-vous ici</h2>
          <form onSubmit={handleRegister}>
            {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
            {success && <div style={{ color: 'green', marginBottom: 12 }}>{success}</div>}
            <div className="register-row">
              <input
                type="text"
                name="name"
                placeholder="Nom complet"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Téléphone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Adresse e-mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="register-input"
            />

            <div className="register-row">
              <input
                type="password"
                name="password"
                placeholder="Mot de passe"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirmer le mot de passe"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            {/* <label className="register-policy">
              <input
                type="checkbox"
                checked={policyAccepted}
                onChange={() => setPolicyAccepted(!policyAccepted)}
              />
              J'accepte la <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">politique de confidentialité</a>
              disabled={!policyAccepted}
            </label> */}

            <button type="submit" className="register-button" disabled={loading}>
              {loading ? 'Inscription...' : 'S’inscrire'}
            </button>

            <div className="register-links">
              <span>Vous avez déjà un compte ? <Link to="/Login">Se connecter</Link></span>
            </div>
          </form>
        </div>


        {/* 📷 Image à gauche */}
        <div className="register-image" data-aos="fade-left">
          <img src="assets/img/boisson/regist.jpg" alt="Inscription" />
        </div>

        
      </div>
    </section>
  );
};

export default Register;
