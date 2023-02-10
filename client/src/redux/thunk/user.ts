import axios from 'axios';

import { AppDispatch } from '../store';
import { actions } from '../slice/user';

const url = 'http://localhost:8000';

// fetch all users
export function fetchUserData() {
  return async (dispatch: AppDispatch) => {
    const response = await axios.get(`${url}/user`);
    const userData = await response.data;

    dispatch(actions.getUserList(userData));
  };
}

// register user
export function registerNewUser() {
  return async (dispatch: AppDispatch) => {};
}
