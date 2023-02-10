import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import HorseProductList from './components/horseProducts/HorseProductList';
import Navbar from './components/Navbar';
import ProductList from './components/riderProducts/ProductList';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rider' element={<ProductList />} />
        <Route path='/horse' element={<HorseProductList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
