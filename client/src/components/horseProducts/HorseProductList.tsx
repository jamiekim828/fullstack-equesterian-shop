import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../redux/store';
import { fetchHorseProductData } from '../../redux/thunk/horse';
import HorseItem from './HorseItem';

export default function HorseProductList() {
  const horseProductList = useSelector(
    (state: RootState) => state.horse.horseProducts
  );

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchHorseProductData());
  }, [dispatch]);
  return (
    <div>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            {horseProductList.map((product) => (
              <HorseItem product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
