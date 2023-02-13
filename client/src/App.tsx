import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import HorseDetail from './components/horseProducts/HorseDetail';
import HorseProductList from './components/horseProducts/HorseProductList';
import Navbar from './components/Navbar';
import ProductDetail from './components/riderProducts/ProductDetail';
import ProductList from './components/riderProducts/ProductList';
import WishList from './pages/WishList';
import Account from './pages/Account';
import CartPage from './pages/CartPage';
import Home from './pages/Home';

function App() {
  const renderPaths = (paths: string[], Element: JSX.Element) =>
    paths.map((path) => <Route key={path} path={path} element={Element} />);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rider' element={<ProductList />} />
        <Route path='/horse' element={<HorseProductList />} />
        <Route path='/account' element={<Account />} />
        <Route path='/cart' element={<CartPage />} />
        {renderPaths(['/rider/:id', '/:id'], <ProductDetail />)}
        {renderPaths(['/horse/:id', '/:id'], <HorseDetail />)}
        <Route path='/wishlist' element={<WishList />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
