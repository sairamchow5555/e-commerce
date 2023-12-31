import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/ProductActions';

const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchProducts = async () => {
            const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Err", err);
            });
            dispatch(setProducts(response.data));
        };
            fetchProducts();
    }, [dispatch]);

    console.log("Products is:",products);
  return (
    <div className="ui grid container">
        <ProductComponent />
    </div>
  );
};

export default ProductListing;
