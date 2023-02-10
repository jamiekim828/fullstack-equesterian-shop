import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../redux/store';
import { fetchRiderProductData } from '../../redux/thunk/rider';
import ProductItem from './ProductItem';
import { RiderProduct } from '../../types/type';

export default function ProductList() {
  const riderProductList = useSelector(
    (state: RootState) => state.rider.riderProducts
  );

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchRiderProductData());
  }, [dispatch]);

  return (
    <div>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            {riderProductList.map((product: RiderProduct) => (
              <ProductItem product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
