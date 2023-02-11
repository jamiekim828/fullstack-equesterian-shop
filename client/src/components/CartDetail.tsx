import React from 'react';
import { useDispatch } from 'react-redux';

import ClearIcon from '@mui/icons-material/Clear';

import { Cart } from '../types/type';
import { AppDispatch } from '../redux/store';
import { actions } from '../redux/slice/cart';

type Prop = {
  cartItem: Cart;
};
export default function CartDetail({ cartItem }: Prop) {
  const dispatch = useDispatch<AppDispatch>();
  const removeHandler = (item: Cart) => {
    dispatch(actions.removeCart(item));
  };
  return (
    <div className='flex justify-between h-24 mb-2'>
      <img src={cartItem.image} alt={cartItem.title} className='h-full' />
      <div className='flex flex-col'>
        <p>{cartItem.title}</p>
        <p>$ {cartItem.price}</p>
        <div className='flex flex-row'>
          <p>Qty : </p>
          <div>
            <div className=' ml-2 flex items-center border border-gray-200 divide-x divide-gray-200 rounded'>
              <button
                type='button'
                className='w-10 h-6 text-gray-600 transition  hover:opacity-75 cursor-pointer'
              >
                -
              </button>

              <span>
                <input
                  type='number'
                  id='Quantity'
                  value={cartItem.quantity}
                  className='h-6 w-14 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none'
                />
              </span>

              <button
                type='button'
                className='w-10 h-6 text-gray-600 transition hover:opacity-75 cursor-pointer'
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <ClearIcon
        sx={{ fontSize: 'sm', cursor: 'pointer' }}
        onClick={() => removeHandler(cartItem)}
      />
    </div>
  );
}
