import React from 'react';
import { Link } from 'react-router-dom';
import { HorseProduct, RiderProduct } from '../types/type';

type Prop = {
  prod: HorseProduct | RiderProduct;
};

export default function Search({ prod }: Prop) {
  return (
    <div className='p-4 mx-2 w-full'>
      <Link
        to={`/${prod.id}`}
        className='block relative h-48 rounded overflow-hidden'
      >
        <img
          alt='ecommerce'
          className='object-cover object-center w-full h-full block'
          src={prod.image}
        />
      </Link>
      <div className='mt-4'>
        <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
          CATEGORY
        </h3>
        <h2 className='text-gray-900 title-font text-lg font-medium'>
          {prod.title}
        </h2>
        <p className='mt-1'>$ {prod.price}</p>
      </div>
    </div>
  );
}
