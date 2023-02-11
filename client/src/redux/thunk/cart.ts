import axios from 'axios';

import { AppDispatch } from '../store';
import { actions } from '../slice/cart';
import { HorseProduct, RiderProduct } from '../../types/type';

const url = 'http://localhost:8000';

export function addToCart(newProduct: HorseProduct | RiderProduct) {
  return async (dispatch: AppDispatch) => {
    const response = await axios.post(`${url}/cart`, newProduct);
    const cartData = await response.data;
    dispatch(actions.addToCart(newProduct));
  };
}
