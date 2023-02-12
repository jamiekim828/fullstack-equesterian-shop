import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import HorseDetail from './components/horseProducts/HorseDetail';
import HorseProductList from './components/horseProducts/HorseProductList';
import Navbar from './components/Navbar';
import ProductDetail from './components/riderProducts/ProductDetail';
import ProductList from './components/riderProducts/ProductList';
import Account from './pages/Account';
import CartPage from './pages/CartPage';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rider' element={<ProductList />} />
        <Route path='/:id' element={<ProductDetail />} />
        <Route path='/horse' element={<HorseProductList />} />
        <Route path='/:id' element={<HorseDetail />} />
        <Route path='/account' element={<Account />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
