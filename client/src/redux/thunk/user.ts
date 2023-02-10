import axios from 'axios';

import { AppDispatch } from '../store';
import { actions } from '../slice/user';
import { User } from '../../types/type';

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
export function registerNewUser(user: User) {
  return async (dispatch: AppDispatch) => {
    const response = await axios.post(`${url}/user`, user);
    const userData = await response.data;

    dispatch(actions.addNewUser(userData));
  };
}
