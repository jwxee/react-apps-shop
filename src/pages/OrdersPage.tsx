import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrders } from '../context/OrderContext';
import { useAuth } from '../context/AuthContext';
import { Package } from 'lucide-react';
import '../css/orders.css';

const OrdersPage: React.FC = () => {
  const { orders, loading } = useOrders();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  if (loading) {
    return (
      <div className="orders-container" style={{ textAlign: 'center', padding: '2rem' }}>
        <p>Loading your orders...</p>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="orders-container">
      <h1 className="orders-title">Мои заказы</h1>
      
      {orders.length === 0 ? (
        <div className="orders-empty">
          <div className="orders-empty-icon">
            <Package size={48} />
          </div>
          <h2 className="orders-empty-text">Вы еще ничего не заказывали</h2>
          <button 
            className="btn btn-primary"
            onClick={() => navigate('/')}
          >
            Купить
          </button>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map(order => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <span className="order-id">Order #{order.id}</span>
                <span className="order-date">{formatDate(order.date)}</span>
                <span className={`order-status order-status-${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </div>
              
              <div className="order-items">
                {order.items.map(item => (
                  <div key={item.id} className="order-item">
                    <img 
                      src={item.product.mainImage} 
                      alt={item.product.name} 
                      className="order-item-image" 
                    />
                    
                    <div className="order-item-details">
                      <span className="order-item-name">{item.product.name}</span>
                      <span className="order-item-size">Size: {item.size}</span>
                    </div>
                    
                    <span className="order-item-price">${item.product.price}</span>
                  </div>
                ))}
              </div>
              
              <div className="order-footer">
                <span className="order-total">Total: ${order.totalAmount}</span>
                <span className="order-address">Delivery to: {order.address}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;