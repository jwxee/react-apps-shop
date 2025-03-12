import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { ShoppingCart, Trash2 } from 'lucide-react';
import '../css/cart.css';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, totalAmount } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return (
      <div className="container" style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Please login to view your cart</h2>
        <button 
          className="btn btn-primary" 
          onClick={() => navigate('/login')}
          style={{ marginTop: '1rem' }}
        >
          Войти
        </button>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">Ваша корзина покупок</h1>
      
      {cart.length === 0 ? (
        <div className="cart-empty">
          <div className="cart-empty-icon">
            <ShoppingCart size={48} />
          </div>
          <h2 className="cart-empty-text">Ваша корзина пуста</h2>
          <Link to="/products" className="btn btn-primary">
              Продолжить покупки
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img 
                  src={item.product.mainImage} 
                  alt={item.product.name} 
                  className="cart-item-image" 
                />
                
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.product.name}</h3>
                  <p className="cart-item-brand">{item.product.brand}</p>
                  <p className="cart-item-size">Size: {item.size}</p>
                  <p className="cart-item-price">${item.product.price}</p>
                </div>
                
                <button 
                  className="cart-item-remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <div className="cart-total">
              <span>Total:</span>
              <span>${totalAmount}</span>
            </div>
            
            <Link to="/checkout" className="checkout-button">
                Перейти к оформлению заказа
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;