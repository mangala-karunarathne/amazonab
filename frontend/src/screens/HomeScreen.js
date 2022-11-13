import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../components/Product';
import Rating from '../components/Rating';
// import data from '../data';
import '../index.css';

function HomeScreen() {

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const {data} = await axios.get('http://localhost:5000/api/products');
        setProduct(data); 
      } catch (err){
        setLoading(false);
        setError(err.message)
      }
      
    };
    fetchData();
  }, []);

  return (
            <div className="row center">
            {
                product.map((product) =>(
                    <Product key={product._id} product={product}/>
                ))
            }
            </div>        
  );
}
export default HomeScreen
