import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom"

import MainPage from './pages/index';
import PageNotFound from './pages/404';
import Products from './pages/products.tsx';
import Cart from './pages/cart.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  )
};

export default App;
