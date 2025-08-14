import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const PaymentForm = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [location, setLocation] = useState('Position inconnue');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'mobile_money'
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation(`Latitude: ${latitude.toFixed(4)}, Longitude: ${longitude.toFixed(4)}`);
      },
      () => setLocation("Impossible de récupérer votre position")
    );
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Commande envoyée ✅ :", { ...formData, cartItems, location, totalAmount });
  };

  return (
    <div className="payment-container">
      <h1 className="form-title">Formulaire de paiement</h1>
      <div className="payment-grid">
        {/* 🧾 Colonne gauche : Ticket du panier */}
        <div className="cart-summary">
          <h2 className="section-title">🧾 Ticket du panier</h2>
          <ul className="cart-list">
            {cartItems.map((item, idx) => (
              <li key={idx} className="cart-item">
                {item.title}
                <span className="item-price">{item.price} FCFA</span>
              </li>
            ))}
            <li className="cart-total">
              Total
              <span className="total-price">{totalAmount} FCFA</span>
            </li>
          </ul>
        </div>

        {/* 🧾 Colonne droite : Formulaire */}
        <div className="form-section">
          <div className="col-lg-12">
          <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
            <div className="row gy-4">
              {/* Nom complet */}
              <div className="col-md-6">
                <label><i className="fas fa-user icon-white"></i> Nom complet</label>
                <input type="text" name="fullName" onChange={handleChange} className="form-control"  placeholder='Nom complet' required />
              </div>

              {/* Email */}
              <div className="col-md-6">
                <label><i className="fas fa-envelope icon-white"></i> Email</label>
                <input type="email" name="email" onChange={handleChange} className="form-control"placeholder='Adresse-Email' required />
              </div>

              {/* Téléphone */}
              <div className="col-md-6">
                <label><i className="fas fa-phone icon-white"></i> Téléphone</label>
                <input type="tel" name="phone" onChange={handleChange} className="form-control" placeholder='Telephone' required />
              </div>

              {/* Mode de paiement */}
              <div className="col-md-6">
                <label><i className="fas fa-credit-card icon-white"></i> Mode de paiement</label>
                <select name="paymentMethod" onChange={handleChange} className="form-select">
                  <option value="mobile_money">Mobile Money</option>
                  <option value="orange_money">Orange Money</option>
                  <option value="cash">Espèces</option>
                  <option value="card">Carte bancaire</option>
                </select>
              </div>

              {/* Adresse */}
              <div className="col-md-12">
                <label><i className="fas fa-home icon-white"></i> Adresse</label>
                <textarea name="address" onChange={handleChange} className="form-control" rows="2" placeholder='Adresse' required></textarea>
              </div>

              {/* Position actuelle */}
              <div className="col-md-12">
                <label><i className="fas fa-map-marker-alt icon-white"></i> Position actuelle</label>
                <input type="text" value={location} className="form-control readonly" readOnly />
              </div>

              {/* Bouton de paiement */}
              <div className="col-md-12 text-center">
                <button type="submit" className="btn-cart">
                  <i className="fas fa-money-bill-wave icon-white"></i> Payez ici
                </button>
              </div>
            </div>
          </form>
        </div>

        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
