import axios from 'axios';

import { AppDispatch } from '../store';
import { cartActions } from '../slice/cart';
import { HorseProduct, RiderProduct } from '../../types/type';

const url = 'https://back-end-equestrian.onrender.com';

export function addToCart(newProduct: HorseProduct | RiderProduct) {
  return async (dispatch: AppDispatch) => {
    const response = await axios.post(`${url}/cart`, newProduct);

    dispatch(cartActions.addToCart(newProduct));
  };
}
