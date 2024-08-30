import React, { useState } from 'react';
import { useProduct } from '../../context/productContext';
import FilterSidebar from '../../components/filter-sidebar/filter-sidebar';
import ProductCard from '../../components/product-card/product-card-index';
import styles from './home-index.module.scss';

const HomeIndex = () => {
  const { productData, error } = useProduct();
  const [filteredProducts, setFilteredProducts] = useState(productData);

  const handleFilterChange = (category, [minPrice, maxPrice], searchQuery) => {
    const filtered = productData.filter(product => {
      const withinCategory = category ? product.category === category : true;
      const withinPriceRange = product.price >= minPrice && product.price <= maxPrice;
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      return withinCategory && withinPriceRange && matchesSearch;
    });
    setFilteredProducts(filtered);
  };

  if (error) return <div>Error fetching products</div>;
  if (!productData) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <FilterSidebar onFilterChange={handleFilterChange} />
      <div className={styles.productList}>
        {filteredProducts?.length > 0 && filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomeIndex;
