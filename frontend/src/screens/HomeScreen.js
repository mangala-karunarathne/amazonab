import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Product from '../components/Product';
import Rating from '../components/Rating';
// import data from '../data';
import '../index.css';

function HomeScreen() {

  const [product, setProduct] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const productList = useSelector((state)=>state.productList)
  const {loading, error, products} = productList;

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     setLoading(true);
    //     const {data} = await axios.get('http://localhost:5000/api/products');
    //     setProduct(data); 
    //   } catch (err){
    //     setLoading(false);
    //     setError(err.message)
    //   }
      
    // };
    // fetchData();
    dispatchEvent(listProducts());

  }, []);

  return (
            <div className="row center">
            {
                products.map((product) =>(
                    <Product key={product._id} product={product}/>
                ))
            }
            </div>        
  );
}
export default HomeScreen
