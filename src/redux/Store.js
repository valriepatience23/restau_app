import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './CartSlice';


export const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('cart', JSON.stringify(state.cart.items));
});
