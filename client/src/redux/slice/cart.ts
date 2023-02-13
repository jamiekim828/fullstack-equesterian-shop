import { createSlice } from '@reduxjs/toolkit';

import { Cart } from '../../types/type';

type InitialState = {
  cart: Cart[];
};

const initialState: InitialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );
      const addProduct = { ...action.payload, quantity: 1 };
      if (index !== -1) {
        state.cart[index].quantity += 1;
      } else {
        state.cart.push(addProduct);
      }
    },
    removeCart: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cart.splice(index, 1);
    },
    minusCart: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1 && state.cart[index].quantity >= 1) {
        state.cart[index].quantity -= 1;
      }
      if (state.cart[index].quantity < 1) {
        state.cart.splice(index, 1);
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
