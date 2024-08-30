// src/context/ProductContext.js
import React, { createContext, useContext } from 'react';
import useSWR from 'swr';
import axios from 'axios';

// Define the fetcher function for SWR
const fetcher = url => axios.get(url).then(res => res.data);

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // Use SWR to fetch product data
  const { data: productData, error } = useSWR('https://fakestoreapi.com/products', fetcher);

  return (
    <ProductContext.Provider value={{ productData, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
