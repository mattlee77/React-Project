import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logo}>
          My Shop
        </Link>
        
        <ul className={styles.navLinks}>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/shop" 
              className={({ isActive }) => 
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/cart" 
              className={({ isActive }) => 
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Cart {totalItems > 0 && <span className={styles.cartBadge}>{totalItems}</span>}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;