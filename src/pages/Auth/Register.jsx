import React, { useState } from 'react';
import { Link } from 'react-router-dom';
 ;


const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // const [policyAccepted, setPolicyAccepted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Inscription:', formData);
  };

  return (
    <section className="register-section">
      <div className="register-grid">
        {/* 📝 Formulaire à droite */}
        <div className="register-form-container" data-aos="fade-right">
          <h2 className="register-title">Inscrivez-vous ici</h2>
          <form onSubmit={handleRegister}>
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

            <button type="submit"  className="register-button">
              S’inscrire
            </button>

            <div className="register-links">
              <span>Vous avez déjà un compte ? <Link to="/login">Se connecter</Link></span>
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
