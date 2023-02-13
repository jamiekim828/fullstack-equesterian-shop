import axios from 'axios';

import { AppDispatch } from '../store';
import { riderActions } from '../slice/rider';

const url = 'http://localhost:8000';

// fetch all users
export function fetchRiderProductData() {
  return async (dispatch: AppDispatch) => {
    const response = await axios.get(`${url}/rider`);
    const riderProductData = await response.data;

    dispatch(riderActions.getRiderProducts(riderProductData));
  };
}
