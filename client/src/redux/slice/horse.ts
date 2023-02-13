import { createSlice } from '@reduxjs/toolkit';

import { HorseProduct } from '../../types/type';

type InitialState = {
  horseProducts: HorseProduct[];
  wishList: HorseProduct[];
};

const initialState: InitialState = {
  horseProducts: [],
  wishList: [],
};

const horseSlice = createSlice({
  name: 'horseProduct',
  initialState,
  reducers: {
    getHorseProducts: (state, action) => {
      state.horseProducts = action.payload;
    },
    addWishList: (state, action) => {
      state.wishList.push(action.payload);
    },
    removeWishList: (state, action) => {
      const wishArray =  JSON.parse(localStorage.getItem('horseWish')|| '{}');
      const items = wishArray.filter(
        (product:HorseProduct) => product.id !== action.payload.id
      );
      state.wishList = items;
      localStorage.setItem('horseWish', JSON.stringify(items))
    },
  },
});

export const actions = horseSlice.actions;
export default horseSlice.reducer;
