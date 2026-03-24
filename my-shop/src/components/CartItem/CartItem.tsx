import React from 'react';
import type { CartItem as CartItemType } from '@/types';
import { useCart } from '@/hooks/useCart';
import styles from './CartItem.module.css';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity <= 1) {
      removeFromCart(item.id);
    } else {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      if (value <= 0) {
        removeFromCart(item.id);
      } else {
        updateQuantity(item.id, value);
      }
    }
  };

  return (
    <div className={styles.cartItem}>
      <img src={item.image} alt={item.title} className={styles.image} />
      
      <div className={styles.details}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.price}>${item.price.toFixed(2)} each</p>
      </div>
      
      <div className={styles.quantityControl}>
        <button 
          onClick={handleDecrement}
          className={styles.quantityBtn}
          aria-label="Decrease quantity"
        >
          -
        </button>
        
        <input
          type="number"
          value={item.quantity}
          onChange={handleQuantityChange}
          className={styles.quantityInput}
          min="0"
          aria-label="Quantity"
        />
        
        <button 
          onClick={handleIncrement}
          className={styles.quantityBtn}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      
      <div className={styles.total}>
        ${(item.price * item.quantity).toFixed(2)}
      </div>
      
      <button 
        onClick={() => removeFromCart(item.id)}
        className={styles.removeBtn}
        aria-label="Remove item"
      >
        ×
      </button>
    </div>
  );
};

export default CartItem;