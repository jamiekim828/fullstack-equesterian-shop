import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import CartDetail from './CartDetail';

export default function Cart() {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const cartPrice = cart.map((item) => item.price * item.quantity);

  const cutNumber = (x: number) => {
    return Number(x).toFixed(2);
  };

  return (
    <div className='flex mt-5 justify-center align-center lg:flex-row md:flex-row sm:flex-col xs:flex-col'>
      <div className='flex flex-col mr-14 lg:w-2/4 md:w-2/4 sm:w-3/4 xs:w-3/4'>
        <h1 className='text-2xl border-b-2 border-1 border-black mb-5'>
          My bag
        </h1>
        {cart.map((cartItem) => (
          <>
            <CartDetail cartItem={cartItem} />
          </>
        ))}
        {cart.length === 0 && (
          <div className='text-center mt-14'>
            <p>Your cart is empty.</p>
          </div>
        )}
      </div>
      <div className='flex flex-col ml-14 lg:w-1/4 md:w-1/4 sm:w-3/4 xs:w-3/4'>
        <h2 className='text-4xl border-b-2 border-1 border-black mb-5'>
          Order summary
        </h2>
        <div className='flex flex-col'>
          <div className='flex justify-between mb-2'>
            <p>Order value</p>
            <p>
              ${' '}
              {cart.length === 0
                ? 0
                : cutNumber(cartPrice.reduce((a, b) => a + b))}
            </p>
          </div>
          <div className='flex justify-between mb-2'>
            <p className='text-pink-400'>Shipping</p>
            <p className='text-pink-400'>Free</p>
          </div>
          <div className='flex justify-between mb-2'>
            <p>Total value</p>
            <p>
              ${' '}
              {cart.length === 0
                ? 0
                : cutNumber(cartPrice.reduce((a, b) => a + b))}
            </p>
          </div>
          <div className='w-full text-center'>
            <button className='border border-1 border-black uppercase cursor-pointer px-12 py-3 mt-5'>
              Continue To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
