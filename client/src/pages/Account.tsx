import React from 'react';
import Lottie from 'react-lottie-player';
import horse from '../assets/horse.json';
import UserInformation from '../components/userInformation/UserInformation';

export default function Account() {
  return (
    <div className='flex'>
      <UserInformation />
      <Lottie
        loop
        animationData={horse}
        play
        style={{ width: '200px', marginTop: '7rem' }}
      />
    </div>
  );
}
