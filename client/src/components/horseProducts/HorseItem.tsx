import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { AppDispatch } from '../../redux/store';
import { addToCart } from '../../redux/thunk/cart';

import { HorseProduct } from '../../types/type';

type PropType = {
  product: HorseProduct;
};

export default function HorseItem({ product }: PropType) {
  const dispatch = useDispatch<AppDispatch>();
  const putInCart = (item: HorseProduct) => {
    dispatch(addToCart(item));
  };
  return (
    <div className='lg:w-1/4 md:w-1/2 p-4 w-full' key={uuidv4()}>
      <Link
        to={`/horse/${product.id}`}
        className='block relative h-70 rounded overflow-hidden'
      >
        <img
          alt={product.title}
          className='object-cover object-center w-full h-full block'
          src={product.image}
        />
      </Link>
      <div className='mt-4'>
        <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
          CATEGORY
        </h3>
        <h2 className='text-gray-900 title-font text-lg font-medium'>
          {product.title}
        </h2>
        <p className='mt-1'>${product.price}</p>
        <button
          className='bg-slate-500 hover:bg-slate-600 text-white w-full h-10 rounded my-3'
          onClick={() => putInCart(product)}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
