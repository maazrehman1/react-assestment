import React from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from "./product-details.module.scss";

// Fetcher function for useSWR
const fetcher = url => axios.get(url).then(res => res.data);

const ProductDetails = () => {
  const { productId } = useParams(); 
  //setting state as product for single product details 
  const { data: product, error } = useSWR(`https://fakestoreapi.com/products/${productId}`, fetcher);

  if (error) return <div>Error fetching product details</div>;
  if (!product) return <div>Loading...</div>;

  return (
    <div className={styles.productPage}>
      <div className={styles.imageContainer}>
        <img 
          src={product.image} 
          alt={product.title} 
          className={styles.productImage}
          loading="lazy"
        />
      </div>
      <div className={styles.productDetails}>
        <h1 className={styles.productTitle}>{product.title}</h1>
        <p className={styles.productPrice}>${product.price}</p>
        <p className={styles.productDescription}>{product.description}</p>
        <p className={styles.productCategory}>Category: {product.category}</p>
        <div className={styles.productRating}>
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
