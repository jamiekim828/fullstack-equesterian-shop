import { createSlice } from '@reduxjs/toolkit';

import { User } from '../../types/type';

type InitialState = {
  users: User[];
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
      state.users.push(action.payload);
    },
  },
});

export const actions = userSlice.actions;
export default userSlice.reducer;
