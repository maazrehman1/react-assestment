import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./product-card-index.module.scss";

const ProductCard = ({ product }) => {
    return (
        <Link to={`/products/${product.id}`} className={styles.cardLink}>
            <div className={styles.card}>
                <img src={product.image} alt={product.title} className={styles.image} loading="lazy" />
                <div className={styles.content}>
                    <h2 className={styles.title}>{product.title}</h2>
                    <p className={styles.description}>{product.description}</p>
                    <p className={styles.price}>${product.price}</p>
                    <div className={styles.rating}>
                        Rating: {product.rating.rate} ({product.rating.count} reviews)
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard