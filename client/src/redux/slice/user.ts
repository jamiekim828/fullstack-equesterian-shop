import { createSlice } from '@reduxjs/toolkit';

import { User, UserData } from '../../types/type';

type InitialState = {
  users: UserData[];
  user: User;
};

const initialState: InitialState = {
  users: [],
  user: { firstName: '', lastName: '', email: '', password: '' },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserList: (state, action) => {
      state.users = action.payload;
    },
    getOneUser: (state, action) => {
      state.user = action.payload;
    },
    addNewUser: (state, action) => {
      state.users = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const actions = userSlice.actions;
export default userSlice.reducer;
