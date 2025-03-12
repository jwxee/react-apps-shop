import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, LogOut, Package } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import '../css/navbar.css';

const Navbar: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const handleLogout = () => {
    logout();
    setShowProfileDropdown(false);
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Store
        </Link>

        <div className="navbar-menu">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/about" className="navbar-link">About</Link>
          <Link to="/reviews" className="navbar-link">Reviews</Link>
        </div>

        <div className="navbar-icons">
          {isAuthenticated ? (
            <>
              <Link to="/cart" className="navbar-icon">
                <ShoppingCart size={24} />
                {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
              </Link>
              <div className="navbar-icon" style={{ position: 'relative' }}>
                <User 
                  size={24} 
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)} 
                />
                
                {showProfileDropdown && (
                  <div className="profile-dropdown">
                    <div className="profile-dropdown-item">
                      Hello, {user?.name}
                    </div>
                    <div className="profile-dropdown-divider"></div>
                    <Link 
                      to="/orders" 
                      className="profile-dropdown-item"
                      onClick={() => setShowProfileDropdown(false)}
                    >
                      <Package size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                      My Orders
                    </Link>
                    <div 
                      className="profile-dropdown-item"
                      onClick={handleLogout}
                    >
                      <LogOut size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                      Logout
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <Link to="/login" className="navbar-link">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;