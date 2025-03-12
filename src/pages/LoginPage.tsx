import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../css/auth.css';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Пожалуйста, заполните все поля');
      return;
    }

    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError('Неверный адрес электронной почты или пароль');
    }
  };

  return (
    <div className="auth-container">
      <h1 className="auth-title">Login to Your Account</h1>
      
      {error && <div className="auth-error">{error}</div>}
      
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            className="auth-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите адрес электронной почты"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите свой пароль"
            required
          />
        </div>
        
        <button type="submit" className="auth-button">
          Войти
        </button>
      </form>
      
      <p className="auth-link">
        Нет учетной записи? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default LoginPage;