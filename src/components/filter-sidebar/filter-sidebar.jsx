import React, { useState, useEffect } from 'react';
import { useProduct } from '../../context/productContext';
import styles from './filter-sidebar.module.scss';

const FilterSidebar = ({ onFilterChange }) => {
  const { productData } = useProduct();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (productData) {
      const uniqueCategories = [...new Set(productData.map(product => product.category))];
      setCategories(uniqueCategories);
    }
  }, [productData]);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onFilterChange(category, priceRange, searchQuery);
  };

  const handlePriceRangeChange = (event) => {
    const [min, max] = event.target.value.split('-').map(Number);
    setPriceRange([min, max]);
    onFilterChange(selectedCategory, [min, max], searchQuery);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onFilterChange(selectedCategory, priceRange, query);
  };

  return (
    <div className={styles.sidebar}>
      <h2 className={styles.heading}>Filter Products</h2>
      <div className={styles.filterSection}>
        <h3 className={styles.subheading}>Search</h3>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          className={styles.searchInput}
          placeholder="Search by name"
        />
      </div>
      <div className={styles.filterSection}>
        <h3 className={styles.subheading}>Category</h3>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className={styles.select}
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.filterSection}>
        <h3 className={styles.subheading}>Price Range</h3>
        <input
          type="range"
          min="0"
          max="500"
          step="10"
          value={priceRange[0]}
          onChange={(e) => handlePriceRangeChange({ target: { value: `${e.target.value}-${priceRange[1]}` } })}
          className={styles.rangeInput}
        />
        <input
          type="range"
          min="0"
          max="500"
          step="10"
          value={priceRange[1]}
          onChange={(e) => handlePriceRangeChange({ target: { value: `${priceRange[0]}-${e.target.value}` } })}
          className={styles.rangeInput}
        />
        <p className={styles.rangeLabel}>${priceRange[0]} - ${priceRange[1]}</p>
      </div>
    </div>
  );
};

export default FilterSidebar;
