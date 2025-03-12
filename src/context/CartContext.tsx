import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem } from '../types';
import { useAuth } from './AuthContext';
import db from '../db/database.js';

interface CartContextType {
  cart: CartItem[];
  addToCart: (productId: number, size: number) => void;
  removeFromCart: (cartItemId: number) => void;
  clearCart: () => void;
  totalAmount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated && user) {
      // Load cart from database
      const userCart = db.getCartByUserId(user.id);
      setCart(userCart);
    } else {
      setCart([]);
    }
  }, [isAuthenticated, user]);

  const addToCart = (productId: number, size: number) => {
    if (!isAuthenticated || !user) {
      throw new Error('You must be logged in to add items to cart');
    }

    try {
      const updatedCart = db.addToCart(user.id, productId, size);
      setCart(updatedCart);
    } catch (error) {
      console.error('Failed to add to cart:', error);
      throw error;
    }
  };

  const removeFromCart = (cartItemId: number) => {
    if (!isAuthenticated || !user) {
      return;
    }

    try {
      const updatedCart = db.removeFromCart(user.id, cartItemId);
      setCart(updatedCart);
    } catch (error) {
      console.error('Failed to remove from cart:', error);
    }
  };

  const clearCart = () => {
    if (!isAuthenticated || !user) {
      return;
    }

    try {
      db.clearCart(user.id);
      setCart([]);
    } catch (error) {
      console.error('Failed to clear cart:', error);
    }
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.product.price, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};