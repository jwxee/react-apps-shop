import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, ProductFilters } from '../types';
import db from '../db/database.js';

interface ProductContextType {
  products: Product[];
  featuredProducts: Product[];
  loading: boolean;
  error: string | null;
  getProductById: (id: number) => Product | undefined;
  getProductsByBrand: (brand: string) => Product[];
  searchProducts: (query: string) => Product[];
  filterProducts: (filters: ProductFilters) => Product[];
  availableBrands: string[];
  availableSizes: number[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const allProducts = db.getAllProducts();
      setProducts(allProducts);
      setLoading(false);
    } catch (err) {
      setError('Не удалось загрузить продукты');
      setLoading(false);
    }
  }, []);

  // Get featured products (newest or most popular)
  const featuredProducts = products.slice(0, 5);

  // Get all available brands
  const availableBrands = [...new Set(products.map(product => product.brand))];

  // Get all available sizes
  const availableSizes = [...new Set(products.flatMap(product => product.sizes))].sort((a, b) => a - b);

  const getProductById = (id: number) => {
    return db.getProductById(id);
  };

  const getProductsByBrand = (brand: string) => {
    return db.getProductsByBrand(brand);
  };

  const searchProducts = (query: string) => {
    return db.searchProducts(query);
  };

  const filterProducts = (filters: ProductFilters) => {
    return db.filterProducts(filters);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        featuredProducts,
        loading,
        error,
        getProductById,
        getProductsByBrand,
        searchProducts,
        filterProducts,
        availableBrands,
        availableSizes,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};