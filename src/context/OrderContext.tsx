import React, { createContext, useContext, useState, useEffect } from 'react';
import { Order } from '../types';
import { useAuth } from './AuthContext';
import { useCart } from './CartContext';
import db from '../db/database.js';

interface OrderContextType {
  orders: Order[];
  loading: boolean;
  error: string | null;
  createOrder: (address: string) => Promise<Order>;
  getOrderById: (id: number) => Order | undefined;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { user, isAuthenticated } = useAuth();
  const { clearCart } = useCart();

  useEffect(() => {
    if (isAuthenticated && user) {
      try {
        const userOrders = db.getOrdersByUserId(user.id);
        setOrders(userOrders);
        setLoading(false);
      } catch (err) {
        setError('Не удалось загрузить заказы');
        setLoading(false);
      }
    } else {
      setOrders([]);
      setLoading(false);
    }
  }, [isAuthenticated, user]);

  const createOrder = async (address: string) => {
    if (!isAuthenticated || !user) {
      throw new Error('Для создания заказа вам необходимо войти в систему');
    }

    try {
      const newOrder = db.createOrder(user.id, address);
      setOrders(prev => [...prev, newOrder]);
      clearCart();
      return newOrder;
    } catch (error) {
      console.error('Failed to create order:', error);
      throw error;
    }
  };

  const getOrderById = (id: number) => {
    return db.getOrderById(id);
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        loading,
        error,
        createOrder,
        getOrderById,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};