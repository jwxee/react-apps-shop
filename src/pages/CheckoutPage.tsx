import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useOrders } from '../context/OrderContext';
import { CheckCircle } from 'lucide-react';
import '../css/checkout.css';

const CheckoutPage: React.FC = () => {
  const { cart, totalAmount, clearCart } = useCart();
  const { user, isAuthenticated } = useAuth();
  const { createOrder } = useOrders();
  const navigate = useNavigate();
  
  const [address, setAddress] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [error, setError] = useState('');

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  if (cart.length === 0 && !orderPlaced) {
    navigate('/cart');
    return null;
  }

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!address) {
      setError('Пожалуйста, введите адрес доставки');
      return;
    }

    try {
      await createOrder(address);
      setOrderPlaced(true);
    } catch (err) {
      setError('Не удалось разместить заказ. Попробуйте еще раз.');
    }
  };

  if (orderPlaced) {
    return (
      <div className="checkout-container">
        <div className="order-success">
          <div className="order-success-icon">
            <CheckCircle size={48} />
          </div>
          <h2 className="order-success-title">Заказ успешно размещен!</h2>
          <p className="order-success-text">
            Спасибо за покупку. Ваш заказ получен и обрабатывается.
          </p>
          <button 
            className="order-success-button"
            onClick={() => navigate('/orders')}
          >
            Мои заказы
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>
      
      {error && <div className="alert alert-error">{error}</div>}
      
      <div className="checkout-summary">
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Order Summary</h2>
        
        <div className="checkout-items">
          {cart.map(item => (
            <div key={item.id} className="checkout-item">
              <span className="checkout-item-name">
                {item.product.name} (Size: {item.size})
              </span>
              <span className="checkout-item-price">${item.product.price}</span>
            </div>
          ))}
        </div>
        
        <div className="checkout-total">
          <span>Total:</span>
          <span>${totalAmount}</span>
        </div>
      </div>
      
      <form onSubmit={handlePlaceOrder}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', margin: '1.5rem 0 1rem' }}>Информация о доставке</h2>
        
        <div className="checkout-form">
          <div className="form-group">
            <label htmlFor="name" className="checkout-label">Full Name</label>
            <input
              type="text"
              id="name"
              className="checkout-input"
              value={user?.name || ''}
              disabled
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone" className="checkout-label">Phone Number</label>
            <input
              type="tel"
              id="phone"
              className="checkout-input"
              value={user?.phone || ''}
              disabled
            />
          </div>
          
          <div className="form-group checkout-form-full">
            <label htmlFor="email" className="checkout-label">Email</label>
            <input
              type="email"
              id="email"
              className="checkout-input"
              value={user?.email || ''}
              disabled
            />
          </div>
          
          <div className="form-group checkout-form-full">
            <label htmlFor="address" className="checkout-label">Delivery Address</label>
            <textarea
              id="address"
              className="checkout-input"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={3}
              placeholder="Введите полный адрес доставки"
              required
            />
          </div>
        </div>
        
        <button type="submit" className="place-order-button">
          Разместить заказ
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;