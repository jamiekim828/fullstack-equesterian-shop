import { createSlice } from '@reduxjs/toolkit';

import { RiderProduct } from '../../types/type';

type InitialState = {
  riderProducts: RiderProduct[];
};

const initialState: InitialState = {
  riderProducts: [],
};

const riderSlice = createSlice({
  name: 'riderProduct',
  initialState,
  reducers: {
    getRiderProducts: (state, action) => {
      state.riderProducts = action.payload;
    },
  },
});

export const actions = riderSlice.actions;
export default riderSlice.reducer;
