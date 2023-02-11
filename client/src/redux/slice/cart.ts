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
      console.log(action.payload); //product
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
  },
});

export const actions = cartSlice.actions;
export default cartSlice.reducer;
