import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import CartDetail from './CartDetail';

export default function Cart() {
  const cart = useSelector((state: RootState) => state.cart.cart);
  console.log(cart);
  return (
    <div className='flex mt-5 justify-center align-center lg:flex-row md:flex-col sm:flex-col'>
      <div className='flex flex-col mr-14 lg:w-2/4 md:w-full sm:w-full'>
        <h1 className='text-2xl border-b-2 border-1 border-black mb-5'>
          My bag
        </h1>
        {cart.map((cartItem) => (
          <>
            <CartDetail cartItem={cartItem} />
          </>
        ))}
      </div>
      <div className='flex flex-col ml-14 lg:w-1/4 md:w-full sm:w-full'>
        <h2 className='text-4xl border-b-2 border-1 border-black mb-5'>
          Order summary
        </h2>
        <div className='flex flex-col'>
          <div className='flex justify-between mb-2'>
            <p>Order value</p>
            <p>$ {}</p>
          </div>
          <div className='flex justify-between mb-2'>
            <p className='text-pink-400'>Shipping</p>
            <p className='text-pink-400'>Free</p>
          </div>
          <div className='flex justify-between mb-2'>
            <p>Total value</p>
            <p>$ {}</p>
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
