import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "./home-index.module.scss"
import ProductCard from '../../components/product-card/product-card-index';

const HomeIndex = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetchProducts()
  }, [])


  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProductData(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      HomeIndex
      <div className={styles.productList}>
        {productData?.length > 0 && productData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default HomeIndex