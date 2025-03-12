import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import ProductCard from '../components/ProductCard';
import '../css/product.css';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getProductById, getProductsByBrand } = useProducts();
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const [product, setProduct] = useState(getProductById(Number(id)));
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (product) {
      const brandProducts = getProductsByBrand(product.brand)
        .filter(p => p.id !== product.id)
        .slice(0, 4);
      setRelatedProducts(brandProducts);
    }
  }, [product]);

  useEffect(() => {
    const fetchedProduct = getProductById(Number(id));
    setProduct(fetchedProduct);
    setSelectedSize(null);
    setSelectedImage(0);
  }, [id]);

  if (!product) {
    return (
      <div className="container" style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Товар не найден</h2>
        <button 
          className="btn btn-primary" 
          onClick={() => navigate('/products')}
          style={{ marginTop: '1rem' }}
        >
          Вернуться
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    if (!selectedSize) {
      setError('Пожалуйста, выберите размер');
      return;
    }

    try {
      addToCart(product.id, selectedSize);
      navigate('/cart');
    } catch (err) {
      setError('Не удалось добавить товар в корзину');
    }
  };

  return (
    <div className="container" style={{ padding: '2rem' }}>
      <div className="product-detail">
        <div className="product-gallery">
          <div className="product-thumbnails">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} thumbnail ${index + 1}`}
                className={`product-thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
          <div>
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="product-main-image"
            />
          </div>
        </div>
        
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-brand">{product.brand}</p>
          <p className="product-price">${product.price}</p>
          
          <div className="product-description">
            {product.description}
          </div>
          
          <div className="product-sizes">
            <h3 className="size-title">Select Size</h3>
            <div className="size-options">
              {product.sizes.map(size => (
                <div
                  key={size}
                  className={`size-option ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          
          {error && <p className="error" style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
          
          <button
            className="add-to-cart"
            onClick={handleAddToCart}
          >
            Добавить в корзину
          </button>
        </div>
      </div>
      
      {relatedProducts.length > 0 && (
        <div className="related-products">
          <h2 className="related-title">More from {product.brand}</h2>
          <div className="related-grid">
            {relatedProducts.map(relatedProduct => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;