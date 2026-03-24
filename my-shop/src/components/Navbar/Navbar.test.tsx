import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import { CartContext } from '../../context/CartContext';

// Mock the cart context
const mockCartContext = {
  cartItems: [],
  addToCart: vi.fn(),
  removeFromCart: vi.fn(),
  updateQuantity: vi.fn(),
  getTotalItems: () => 0,
  getTotalPrice: () => 0,
};

describe('Navbar', () => {
  it('renders navigation links', () => {
    render(
      <BrowserRouter>
        <CartContext.Provider value={mockCartContext}>
          <Navbar />
        </CartContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByText('My Shop')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Shop')).toBeInTheDocument();
    expect(screen.getByText('Cart')).toBeInTheDocument();
  });

  it('shows cart badge when items are in cart', () => {
    const contextWithItems = {
      ...mockCartContext,
      getTotalItems: () => 3,
    };

    render(
      <BrowserRouter>
        <CartContext.Provider value={contextWithItems}>
          <Navbar />
        </CartContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByText('3')).toBeInTheDocument();
  });
});