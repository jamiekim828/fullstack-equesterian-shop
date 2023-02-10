import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export default function UserInformation() {
  const [formOpen, setFormOpen] = useState<boolean>(false);
  const user = useSelector((state: RootState) => state.user.user);
  const users = useSelector((state: RootState) => state.user.users);

  const userIndex = users.findIndex((member) => member.email === user.email);
  const loginUser = users[userIndex];

  return (
    <div className='flex lg:ml-80 mt-28 md:ml-48 sm:ml-12  lg:flex-row md:flex-row'>
      <div className='flex flex-col'>
        <p className='text-xl font-bold mb-7'>My Account</p>
        <p className='text-s'>My Orders</p>
        <p className='text-s'>Review</p>
      </div>
      <div className='flex flex-col ml-14 mr-12'>
        <p className='text-3xl font-extrabold mb-7'>Details</p>
        <p className='mb-3'>
          Name : {loginUser.firstName} {loginUser.lastName}
        </p>
        <p className='mb-3'>Email : {loginUser.email}</p>
        <p className='mb-3'>Nesletter Subscriber</p>
        <button
          onClick={() => setFormOpen(true)}
          className='bg-black w-full text-white h-9 mt-3'
        >
          EDIT
        </button>
      </div>
    </div>
  );
}
