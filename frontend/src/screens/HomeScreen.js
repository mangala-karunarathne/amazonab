import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import '../index.css';

function HomeScreen() {

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const {data} = await axios.get('http://localhost:5000/api/products');
      setProduct(data); 
      setLoading(false);
    } catch (err){
      setLoading(false);
      setError(err.message)
    }
  };

  return (
          <div>
            {
              (loading? (
                <LoadingBox></LoadingBox>
              ) : error? (
                <MessageBox variant="danger">{error}</MessageBox>
              ) : (
                <div className="row center">
                {
                    product.map((item) =>(   
                        <Product key={item._id} product={item}/>
                    ))
                }
                </div> 
              ))}    
          </div>    
  );
}
export default HomeScreen
