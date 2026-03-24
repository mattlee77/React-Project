import React from 'react';
import { useCart } from '../../hooks/useCart';
import CartItem from '../../components/CartItem/CartItem';
import styles from './Cart.module.css';

const Cart: React.FC = () => {
  const { cartItems, getTotalItems, getTotalPrice } = useCart();
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  if (cartItems.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <div className={styles.emptyIcon}>🛒</div>
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added any items yet</p>
        <a href="/shop" className={styles.shopLink}>Start Shopping</a>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Shopping Cart</h1>
      
      <div className={styles.cartContent}>
        <div className={styles.cartItems}>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        
        <div className={styles.summary}>
          <h2>Order Summary</h2>
          <div className={styles.summaryRow}>
            <span>Items ({totalItems})</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className={`${styles.summaryRow} ${styles.total}`}>
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button className={styles.checkoutBtn} disabled>
            Proceed to Checkout
          </button>
          <p className={styles.note}>Checkout is not implemented in this demo</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;