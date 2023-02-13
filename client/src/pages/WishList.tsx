import { useEffect } from 'react';

import { HorseProduct, RiderProduct } from '../types/type';
import WishItemRider from '../components/WishItemRider';
import WishItemHorse from '../components/WishItemHorse';

export default function WishList() {
    const riderWishList = JSON.parse(localStorage.getItem('riderWish')|| '{}');
    const horseWishList = JSON.parse(localStorage.getItem('horseWish')|| '{}');
   
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">My Wishlists</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
    </div>
    <div className="p-4 lg:w-1/2">
    {riderWishList.length > 0 ? riderWishList.map((wish:RiderProduct) => (<div key={wish.id} className="flex flex-wrap -m-4">
      <WishItemRider wish={wish}/>
    </div>)) : <div></div>}
    {horseWishList.length > 0 ? horseWishList.map((wish: HorseProduct) => (<div key={wish.id} className="flex flex-wrap -m-4">
      <WishItemHorse wish={wish}/>
    </div>)) : <div></div>}</div>
  </div>
</section>
  )
}
