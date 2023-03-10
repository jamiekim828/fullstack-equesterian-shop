import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { cartActions } from '../../redux/slice/cart';
import { riderActions } from '../../redux/slice/rider'
import { AppDispatch, RootState } from '../../redux/store';
import { RiderProduct } from '../../types/type';

export default function ProductDetail() {
  const id = useParams().id;
  const riderProducts = useSelector(
    (state: RootState) => state.rider.riderProducts
  );
  const wishList = useSelector((state:RootState)=> state.rider.wishList)
  localStorage.setItem("riderWish", JSON.stringify(wishList));
  const index = riderProducts.findIndex((item) => item.id === id);
  const detail = riderProducts[index];
  const dispatch = useDispatch<AppDispatch>();
  const wishListHandler = (item: RiderProduct) => {
    const duplicate = wishList.some(prod=> prod.id === item.id)
    if(duplicate===false) {
      dispatch(riderActions.addWishList(item))
    } else {
      dispatch(riderActions.removeWishList(item))
    }
  }
  


  return (
    <section className='text-gray-600 body-font overflow-hidden'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='lg:w-4/5 mx-auto flex flex-wrap'>
          <img
            alt='detail'
            className='lg:w-1/2 w-full lg:h-auto h-80 object-cover object-center rounded'
            src={detail.image}
          />
          <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
            <h2 className='text-sm title-font text-gray-500 tracking-widest'>
              EQUESTERIAN
            </h2>
            <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
              {detail.title}
            </h1>

            <p className='leading-relaxed'>
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>
            <div className='flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5'>
              <div className='flex'>
                <span className='mr-3'>Color</span>
                <button className='border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none'></button>
                <button className='border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none'></button>
                <button className='border-2 border-gray-300 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none'></button>
              </div>
              <div className='flex ml-6 items-center'>
                <span className='mr-3'>Size</span>
                <div className='relative'>
                  <select className='rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10'>
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className='absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center'>
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='w-4 h-4'
                      viewBox='0 0 24 24'
                    >
                      <path d='M6 9l6 6 6-6'></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className='flex'>
              <span className='title-font font-medium text-2xl text-gray-900'>
                $58.00
              </span>
              <button
                onClick={() => dispatch(cartActions.addToCart(detail))}
                className='flex ml-auto text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-slate-400'
              >
                ADD
              </button>
              <button 
              onClick={()=> wishListHandler(detail)}
              className={`rounded-full w-10 h-10 p-0 border-0 inline-flex items-center justify-center ml-4 bg-gray-200 ${
                wishList.some((i) => i.id === detail.id)
                  ?  'text-red-500'
                  :  'text-gray-500'
              }`}>
                <svg
                  fill='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-5 h-5'
                  viewBox='0 0 24 24'
                >
                  <path d='M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z'></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
