// src/components/product-details/product-details.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from '../../context/productContext';
import styles from "./product-details.module.scss";

const ProductDetails = () => {
  const { productId } = useParams();
  const { productData, error } = useProduct();
  const product = productData?.find(p => p.id === parseInt(productId));

  if (error) return <div>Error fetching product details</div>;
  if (!productData) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

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
