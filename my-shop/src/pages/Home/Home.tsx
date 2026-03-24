import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>NEW SEASON</span>
          <h1 className={styles.heroTitle}>
            Discover Your <span className={styles.highlight}>Style</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Shop the latest trends in fashion, electronics, and more. 
            Quality products at prices you'll love.
          </p>
          <div className={styles.heroButtons}>
            <button 
              onClick={() => navigate('/shop')}
              className={styles.primaryButton}
            >
              Shop Now
            </button>
            <button 
              onClick={() => navigate('/shop')}
              className={styles.secondaryButton}
            >
              View Collections →
            </button>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>10k+</span>
              <span className={styles.statLabel}>Products</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>5k+</span>
              <span className={styles.statLabel}>Happy Customers</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>Support</span>
            </div>
          </div>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.imageGrid}>
            <div className={`${styles.gridItem} ${styles.gridItem1}`}>
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400" alt="Fashion" />
            </div>
            <div className={`${styles.gridItem} ${styles.gridItem2}`}>
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400" alt="Accessories" />
            </div>
            <div className={`${styles.gridItem} ${styles.gridItem3}`}>
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" alt="Electronics" />
            </div>
            <div className={`${styles.gridItem} ${styles.gridItem4}`}>
              <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400" alt="Lifestyle" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className={styles.categories}>
        <h2 className={styles.sectionTitle}>Shop by Category</h2>
        <div className={styles.categoryGrid}>
          <div className={styles.categoryCard} onClick={() => navigate('/shop')}>
            <div className={styles.categoryIcon}>👕</div>
            <h3>Fashion</h3>
            <p>Trendy apparel & accessories</p>
          </div>
          <div className={styles.categoryCard} onClick={() => navigate('/shop')}>
            <div className={styles.categoryIcon}>📱</div>
            <h3>Electronics</h3>
            <p>Latest gadgets & tech</p>
          </div>
          <div className={styles.categoryCard} onClick={() => navigate('/shop')}>
            <div className={styles.categoryIcon}>🏠</div>
            <h3>Home & Living</h3>
            <p>Beautiful home essentials</p>
          </div>
          <div className={styles.categoryCard} onClick={() => navigate('/shop')}>
            <div className={styles.categoryIcon}>⚽</div>
            <h3>Sports</h3>
            <p>Gear for active lifestyles</p>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className={styles.featured}>
        <h2 className={styles.sectionTitle}>Featured Products</h2>
        <div className={styles.featuredGrid}>
          <div className={styles.featuredCard}>
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Product" />
            <h4>Backpack</h4>
            <p>Travel in style</p>
            <span className={styles.price}>$49.99</span>
          </div>
          <div className={styles.featuredCard}>
            <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="Product" />
            <h4>Casual Shirt</h4>
            <p>Comfortable fit</p>
            <span className={styles.price}>$29.99</span>
          </div>
          <div className={styles.featuredCard}>
            <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="Product" />
            <h4>Jacket</h4>
            <p>Winter collection</p>
            <span className={styles.price}>$89.99</span>
          </div>
          <div className={styles.featuredCard}>
            <img src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" alt="Product" />
            <h4>External SSD</h4>
            <p>Fast storage</p>
            <span className={styles.price}>$79.99</span>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletter}>
        <div className={styles.newsletterContent}>
          <h2>Stay Updated</h2>
          <p>Subscribe to get special offers, free giveaways, and exclusive deals.</p>
          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className={styles.newsletterInput}
            />
            <button type="submit" className={styles.newsletterButton}>
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;