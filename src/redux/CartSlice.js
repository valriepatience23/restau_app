import { createSlice } from '@reduxjs/toolkit';

// 🔁 Chargement initial depuis le localStorage
const savedCart = localStorage.getItem('cart');
const initialState = {
  items: savedCart ? JSON.parse(savedCart) : [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
    const { title, price = 0, priceCfa = 0, quantity = 1 } = action.payload;

    // 🧠 Regrouper les produits par nom
    const existingItem = state.items.find(item => item.title === title);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      state.items.push({ title, price, priceCfa, quantity });
    }

  cartSlice.caseReducers.updateTotal(state);
},

    removeFromCart(state, action) {
      state.items = state.items.filter(item => item.title !== action.payload);
      cartSlice.caseReducers.updateTotal(state);
    },

    updateQuantity(state, action) {
      const { title, quantity } = action.payload;
      const item = state.items.find(i => i.title === title);
      if (item && quantity > 0) {
        item.quantity = quantity;
        cartSlice.caseReducers.updateTotal(state);
      }
    },

    clearCart(state) {
      state.items = [];
      state.total = 0;
    },

    updateTotal(state) {
      state.total = state.items.reduce((sum, item) => {
        const price = Number(item.pricecfa || item.price || 0);
        const qty = Number(item.quantity) || 0;
        return sum + price * qty;
      }, 0);
    },
  },
});

// 💾 Middleware pour sauvegarder à chaque changement
export const cartMiddleware = store => next => action => {
  const result = next(action);
  const { items } = store.getState().cart;
  localStorage.setItem('cart', JSON.stringify(items));
  return result;
};

// 🧩 Exports
export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  updateTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
