import React from 'react';
import useSWR from 'swr';
import axios from 'axios';
import styles from "./home-index.module.scss";
import ProductCard from '../../components/product-card/product-card-index';

const fetcher = url => axios.get(url).then(res => res.data);

const HomeIndex = () => {
  const { data: productData, error } = useSWR('https://fakestoreapi.com/products', fetcher);

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
