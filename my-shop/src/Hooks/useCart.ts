import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';
import type { CartContextType } from '@/types';

// Custom hook for using cart context with type safety
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  
  return context;
};