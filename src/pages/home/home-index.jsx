import React, { useState, useEffect } from 'react';
import { useProduct } from '../../context/productContext';
import FilterSidebar from '../../components/filter-sidebar/filter-sidebar';
import styles from "./home-index.module.scss";
import ProductCard from '../../components/product-card/product-card-index';

const HomeIndex = () => {
  const { productData, error } = useProduct();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (productData) {
      setFilteredProducts(productData);
    }
  }, [productData]);

  const handleFilterChange = (category, [minPrice, maxPrice], searchQuery) => {
    const filtered = productData.filter(product => {
      const withinCategory = category ? product.category === category : true;
      const withinPriceRange = product.price >= minPrice && product.price <= maxPrice;
      const matchesSearchQuery = searchQuery ? product.title && product.title.toLowerCase().includes(searchQuery.toLowerCase()) : true;
      return withinCategory && withinPriceRange && matchesSearchQuery;
    });

    setFilteredProducts(filtered);
  };

  if (error) return <div>Error fetching products</div>;
  if (!productData) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <FilterSidebar onFilterChange={handleFilterChange} />
      <div className={styles.productList}>
        {filteredProducts?.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div>No products found</div>
        )}
      </div>
    </div>
  );
};

export default HomeIndex;
