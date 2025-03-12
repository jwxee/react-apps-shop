import React, { useState } from 'react';
import { useProducts } from '../context/ProductContext';
import Carousel from '../components/Carousel';
import ProductCard from '../components/ProductCard';
import ProductFilter from '../components/ProductFilter';
import { ProductFilters } from '../types';
import '../css/home.css';


const HomePage: React.FC = () => {
  const { featuredProducts, filterProducts, searchProducts } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState(featuredProducts);

  const handleFilter = (filters: ProductFilters) => {
    let results = filterProducts(filters);

    if (filters.searchQuery) {
      results = searchProducts(filters.searchQuery);
    }

    setFilteredProducts(results);
  };
  const uniqueProducts = Array.from(new Map(filteredProducts.map(p => [p.id, p])).values());
  return (
    <div>


      <section className="section">
        <div className="container">
          <h2 className="section-title" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Новые поступления
          </h2>
          <Carousel products={featuredProducts} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ProductFilter onFilter={handleFilter} />

          <h2 className="section-title" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Наши кроссовки
          </h2>

          {filteredProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <p>Нет подходящих товаров.</p>
            </div>
          ) : (
              <div className="product-grid">
                {uniqueProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
              </div>

          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;