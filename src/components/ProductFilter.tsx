import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { ProductFilters } from '../types';
import { useProducts } from '../context/ProductContext';
import '../css/home.css';

interface ProductFilterProps {
  onFilter: (filters: ProductFilters) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ onFilter }) => {
  const { availableBrands } = useProducts();

  const defaultFilters: ProductFilters = {
    brand: '',
    searchQuery: '',
  };

  const [filters, setFilters] = useState<ProductFilters>(defaultFilters);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value || undefined }));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, searchQuery: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(filters);
  };

  const handleReset = () => {
    setFilters(defaultFilters);
    onFilter(defaultFilters);
  };

  return (
      <section className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
                type="text"
                placeholder="Search"
                value={filters.searchQuery}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2 border rounded-md"
            />
          </div>
          <div className="flex gap-4 flex-wrap">
            <select
                name="brand"
                value={filters.brand}
                onChange={handleChange}
                className="px-4 py-2 border rounded-md"
            >
              <option value="">All Brands</option>
              {availableBrands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={handleSubmit}>Apply</button>
          <button type="button" className="px-4 py-2 bg-gray-500 text-white rounded-md" onClick={handleReset}>Reset</button>
        </div>
      </section>
  );
};

export default ProductFilter;
