import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export default function Cart() {
  const cart = useSelector((state: RootState) => state.cart.cart);
  console.log(cart);
  return <div>Cart</div>;
}
