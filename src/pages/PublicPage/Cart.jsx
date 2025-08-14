import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  clearCart,
  removeFromCart,
  updateQuantity,
  updateTotal,
} from '../../redux/CartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const items = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTotal());
  }, [items, dispatch]);

  const handleQuantityChange = (e, title) => {
    const newQty = parseInt(e.target.value);
    if (!isNaN(newQty) && newQty > 0) {
      dispatch(updateQuantity({ title, quantity: newQty }));
    }
  };

  const handleClear = () => {
    if (window.confirm("Voulez-vous annuler la commande ?")) {
      dispatch(clearCart());
    }
  };

  return (
    <section className="cart-layout">
      <div className="container-fluid px-4">
        <div className="section-title text-center mb-5">
          <h2 className="text-light">🧺 Mon Panier</h2>
          <p className="text-light">Récapitulatif de votre commande</p>
        </div>

        {items.length === 0 ? (
          <p className="cart-empty text-center text-light">Votre panier est vide.</p>
        ) : (
          <div className="row gy-4">
            {/* 🧾 Liste du panier à gauche */}
            <div className="col-lg-6">
              <ul className="cart-list">
                {items.map(item => (
                  <li key={item.title} className="cart-item">
                    <div className="cart-item-info">
                      <strong>{item.title}</strong>
                      <span>
                        {item.quantity} × {item.pricecfa || item.price} ={" "}
                        <strong className="line-total">
                          {((item.pricecfa || item.price) * item.quantity).toLocaleString()} FCFA
                        </strong>
                      </span>
                    </div>

                    <div className="cart-item-controls">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        className="cart-quantity-input"
                        onChange={(e) => handleQuantityChange(e, item.title)}
                      />
                      <button
                        className="remove-btn"
                        onClick={() => dispatch(removeFromCart(item.title))}
                      >
                        ✕
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="cart-total">
                <strong>Total :</strong> <span className="fcfa-icon">💸</span>{" "}
                {total.toLocaleString()} FCFA
              </p>
            </div>

            {/* 🎟️ Ticket + Actions à droite */}
            <div className="col-lg-6 border-start">
              <div className="cart-recap ticket-style">
                <h4 className="ticket-header">🧾 Ticket de commande</h4>
                <div className="ticket-body">
                  {items.map(item => (
                    <div key={item.title} className="ticket-line">
                      <span>{item.quantity} × {item.title}</span>
                      <span>{((item.pricecfa || item.price) * item.quantity).toLocaleString()} FCFA</span>
                    </div>
                  ))}
                  <hr />
                  <div className="ticket-total-line">
                    <strong>Total TTC</strong>
                    <strong>{total.toLocaleString()} FCFA</strong>
                  </div>
                </div>
              </div>

              <div className="cart-actions mt-4">
                <button className="cancel-btn" onClick={handleClear}>
                  ❌ Annuler la commande
                </button>

                <Link to="/menu" className="add-product-btn">
                  🍽️ Ajouter un produit
                </Link>

                <Link to="/paiement" className="checkout-btn">
                  💳 Passer à la caisse
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
