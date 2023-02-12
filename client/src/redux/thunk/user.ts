import axios from 'axios';

import { AppDispatch } from '../store';
import { actions } from '../slice/user';
import { EditValue, User, UserData } from '../../types/type';

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

// edit user information
export function editUserInfo(currentUser: UserData, editInfo: EditValue) {
  return async (dispatch: AppDispatch) => {
    const response = await axios.put(`${url}/user/${currentUser.id}`, editInfo);
    const editData = await response.data;

    dispatch(actions.setUser(editData));
  };
}

// user by id
export function getUserByUserId(id: string | undefined) {
  return async (dispatch: AppDispatch) => {
    const response = await axios.get(`${url}/user/${id}`);
    const user = await response.data;
    dispatch(actions.getOneUser(user));
  };
}
