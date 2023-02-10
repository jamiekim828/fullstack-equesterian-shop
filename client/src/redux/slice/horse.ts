import { createSlice } from '@reduxjs/toolkit';

import { HorseProduct } from '../../types/type';

type InitialState = {
  horseProducts: HorseProduct[];
};

const initialState: InitialState = {
  horseProducts: [],
};

const horseSlice = createSlice({
  name: 'horseProduct',
  initialState,
  reducers: {
    getHorseProducts: (state, action) => {
      state.horseProducts = action.payload;
    },
  },
});

export const actions = horseSlice.actions;
export default horseSlice.reducer;
