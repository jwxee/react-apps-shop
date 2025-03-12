import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import '../css/home.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img 
          src={product.mainImage} 
          alt={product.name} 
          className="product-image" 
        />
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-brand">{product.brand}</p>
          <p className="product-price">${product.price}</p>
          <button className="btn btn-primary">View Details</button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;