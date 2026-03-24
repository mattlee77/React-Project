import React, { useState } from 'react';
import type { Product } from '@/types';
import { useCart } from '@/hooks/useCart';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart } = useCart();

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity(prev => Math.max(1, prev - 1));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1); // Reset quantity after adding to cart
  };

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />
      
      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
        
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
            value={quantity}
            onChange={handleQuantityChange}
            className={styles.quantityInput}
            min="1"
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
        
        <button 
          onClick={handleAddToCart}
          className={styles.addToCartBtn}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;