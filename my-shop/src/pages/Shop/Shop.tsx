import React from 'react';
import { useFetchProducts } from '../../hooks/useFetchProducts';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './Shop.module.css';

const Shop: React.FC = () => {
  const { products, loading, error } = useFetchProducts('https://fakestoreapi.com/products');

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Loading amazing products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        <h2>Oops! Something went wrong</h2>
        <p>{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className={styles.retryBtn}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Our Products</h1>
      <div className={styles.productGrid}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;