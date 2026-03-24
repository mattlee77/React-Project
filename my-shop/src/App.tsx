import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Cart from './pages/Cart/Cart';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <Router>
      <CartProvider>
        <div className={styles.app}>
          <Navbar />
          <main className={styles.main}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <footer className={styles.footer}>
            <p>&copy; 2024 MyShop. All rights reserved.</p>
          </footer>
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;