import { createSlice } from '@reduxjs/toolkit';

import { RiderProduct } from '../../types/type';

type InitialState = {
  riderProducts: RiderProduct[];
  wishList: RiderProduct[];
};

const initialState: InitialState = {
  riderProducts: [],
  wishList: [],
};

const riderSlice = createSlice({
  name: 'riderProduct',
  initialState,
  reducers: {
    getRiderProducts: (state, action) => {
      state.riderProducts = action.payload;
    },
    addWishList: (state, action) => {
      state.wishList.push(action.payload);
    },
    removeWishList: (state, action) => {
      const wishArray =  JSON.parse(localStorage.getItem('riderWish')|| '{}');
      const items = wishArray.filter(
        (product:RiderProduct) => product.id !== action.payload.id
      );
      state.wishList = items;
      localStorage.setItem('riderWish', JSON.stringify(items))
    },
  },
});

export const riderActions = riderSlice.actions;
export default riderSlice.reducer;
