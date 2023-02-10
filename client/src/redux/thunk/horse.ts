import axios from 'axios';

import { AppDispatch } from '../store';
import { actions } from '../slice/horse';

const url = 'http://localhost:8000';

// fetch all users
export function fetchHorseProductData() {
  return async (dispatch: AppDispatch) => {
    const response = await axios.get(`${url}/horse`);
    const horseProductData = await response.data;

    dispatch(actions.getHorseProducts(horseProductData));
  };
}
