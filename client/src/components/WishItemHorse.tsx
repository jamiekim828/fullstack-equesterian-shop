import React from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slice/cart'
import { actions } from '../redux/slice/horse'
import { AppDispatch } from '../redux/store'
import { HorseProduct } from '../types/type'

type Prop ={
    wish: HorseProduct
}
export default function WishItemHorse({wish} :Prop) {
    const dispatch = useDispatch<AppDispatch>()
  return (
    <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={wish.image}/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">{wish.title}</h2>
            <h3 className="text-gray-500 mb-3">Category</h3>
            <p className="mb-4">Price : $ {wish.price}</p>
            <span className="inline-flex">
            <button
                onClick={() => dispatch(cartActions.addToCart(wish))}
                className='flex ml-auto text-white bg-black border-0 py-1 px-4 focus:outline-none hover:bg-slate-400'
              >
                ADD
              </button>
              <button
                onClick={() => dispatch(actions.removeWishList(wish))}
                className='flex ml-4 text-white bg-black border-0 py-1 px-4 focus:outline-none hover:bg-slate-400'
              >
                DELETE
              </button>
            </span>
          </div>
        </div>
      </div>  
  )
}
