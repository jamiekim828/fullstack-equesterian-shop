import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { fetchHorseProductData } from '../redux/thunk/horse';
import { fetchRiderProductData } from '../redux/thunk/rider';
import { HorseProduct, RiderProduct } from '../types/type';
import Search from './Search';

export default function Main() {
  const [userInput, setUserInput] = useState<string>('');
  const [riderProd, setRiderProd] = useState<RiderProduct[]>([]);
  const [horseProd, setHorseProd] = useState<HorseProduct[]>([]);

  const riderProducts = useSelector(
    (state: RootState) => state.rider.riderProducts
  );
  const horseProducts = useSelector(
    (state: RootState) => state.horse.horseProducts
  );

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchRiderProductData());
    dispatch(fetchHorseProductData());
  }, [dispatch]);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const searchHandler = () => {
    const riderResult = riderProducts.filter((prod) =>
      prod.title.toLowerCase().includes(userInput.toLowerCase())
    );
    const horseResult = horseProducts.filter((prod) =>
      prod.title.toLowerCase().includes(userInput.toLowerCase())
    );
    if (riderResult.length > 0) {
      setRiderProd(riderResult);
    }
    if (horseResult.length > 0) {
      setHorseProd(horseResult);
    }
    if (userInput === '') {
      setRiderProd([]);
      setHorseProd([]);
    }
  };

  return (
    <div>
      <section className=' body-font'>
        <div className='container mx-auto flex px-5 py-20 md:flex-row flex-col items-center'>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0'>
            <img
              className='object-cover object-center rounded'
              alt='hero'
              src='https://equestrianstockholm.com/img-srv/ER23AQHixM0fulJkXredFQuZpo3RCU9R6T9uBzQVfpw/resizing_type:auto/width:1500/height:0/gravity:sm/enlarge:0/ext:webp/strip_metadata:1/quality:100/dpr:1/max_bytes:0/bG9jYWw6Ly8vZXF1ZXN0cmlhbnN0b2NraG9sbS5jb20vd3AtY29udGVudC91cGxvYWRzL3NpdGVzLzIvMjAyMi8xMi9tYWhvZ2FueS1nbGltbWVyLWRyZXNzYWdlLXNhZGRsZS1wYWQtZHJlc3N5cnNjaGFicmFrLWRyZXNzdXJzY2hhYnJhY2tlLWRyZXNzdXVyLXphZGVsZGVramUtb241LmpwZw.webp'
            />
          </div>
          <div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center '>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-slate-700'>
              BLUE MEADOW
            </h1>
            <p className='mb-8 leading-relaxed text-slate-700'>
              A collection with focus on high performance, stand-out designs and
              exquisite details. Consciously crafted with high-quality and
              premium fabrics. Become captivated by this supreme competition
              collection with classic designs, glitter- and designs in white.
              Complete with stunning competition jackets, blue and white
              breeches, and competition tops with lovely lace.
            </p>
            <div className='flex w-full md:justify-start justify-center items-end'>
              <div className='relative mr-4 lg:w-full xl:w-1/2 w-2/4'>
                <label className='leading-7 text-xs text-slate-500'>
                  Please type in what you are looking for.
                </label>
                <input
                  type='text'
                  id='hero-field'
                  name='hero-field'
                  value={userInput}
                  onChange={inputHandler}
                  className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:bg-transparent focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <button
                onClick={() => searchHandler()}
                className='inline-flex text-white bg-sky-800 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg'
              >
                Search
              </button>
            </div>
            <p className='text-sm mt-2 text-gray-500 mb-8 w-full'></p>
            <div className='flex lg:flex-row md:flex-col '>
              <button className='w-36 bg-gray-100 inline-flex py-3 px-6 rounded-lg items-center hover:bg-gray-200 focus:outline-none'>
                <span className='ml-4 flex items-start flex-col leading-none'>
                  <span className='text-xs text-gray-600 mb-1'>RIDERS</span>
                  <span className='title-font font-medium'>WOMEN</span>
                </span>
              </button>
              <button className=' w-36 bg-gray-100 inline-flex py-3 px-7 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none'>
                <span className='ml-4 flex items-start flex-col leading-none'>
                  <span className='text-xs text-gray-600 mb-1'>RIDERS</span>
                  <span className='title-font font-medium'>MEN</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='flex ml-24'>
        {riderProd.length > 0 &&
          riderProd.map((prod) => (
            <div key={prod.id} className='flex flex-wrap -m-4'>
              <Search prod={prod} />
            </div>
          ))}
        {horseProd.length > 0 &&
          horseProd.map((prod) => (
            <div key={prod.id} className='flex flex-wrap -m-4'>
              <Search prod={prod} />
            </div>
          ))}
      </div>
    </div>
  );
}
