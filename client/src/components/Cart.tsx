import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export default function Cart() {
  const cart = useSelector((state: RootState) => state.cart.cart);
  console.log(cart);
  return (
    <div className='flex mt-5 justify-center align-center'>
      <div className='flex flex-col mr-14 w-2/4'>
        <h1 className='text-2xl border-b-2 border-1 border-black mb-5'>
          My bag
        </h1>
        <div className='flex justify-between'>
          <img src='' alt='' />
          <div className='flex flex-col'>
            <p>Title</p>
            <p>Price</p>
            <p>Qty : {}</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col ml-14 w-1/4'>
        <h2 className='text-4xl border-b-2 border-1 border-black mb-5'>
          Order summary
        </h2>
        <div className='flex flex-col'>
          <div className='flex justify-between mb-2'>
            <p>Order value</p>
            <p>$ {}</p>
          </div>
          <div className='flex justify-between mb-2'>
            <p>Shipping</p>
            <p>Free</p>
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
