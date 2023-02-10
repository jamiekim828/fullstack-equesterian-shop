import React from 'react';
import Lottie from 'react-lottie-player';
import horse from '../assets/horse.json';

export default function LogIn() {
  return (
    <div className='flex'>
      <Lottie loop animationData={horse} play style={{ width: '200px' }} />
    </div>
  );
}
