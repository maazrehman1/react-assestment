// src/components/home/home-index.js
import React from 'react';
import { useProduct } from '../../context/productContext';
import styles from "./home-index.module.scss";
import ProductCard from '../../components/product-card/product-card-index';

const HomeIndex = () => {
  const { productData, error } = useProduct();

  if (error) return <div>Error fetching products</div>;
  if (!productData) return <div>Loading...</div>;

  return (
    <div>
      HomeIndex
      <div className={styles.productList}>
        {productData?.length > 0 && productData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomeIndex;
