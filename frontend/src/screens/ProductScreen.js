import React, { useEffect, useState } from 'react';
import '../index.css';
import data from '../data';
import Rating from '../components/Rating';
import { Link, useParams, withRouter } from "react-router-dom";
import axios from 'axios';


export default function ProductScreen(props) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get('/api/products');
      setProducts(data);
      console.log("aaa", products.image)
    };
    fetchData();
  }, []);

  let {id}=useParams()
  const product = data.products.find((x) => x._id === id);
  if(!product) {
    return <div>No Data Available</div>
  } else {
    console.log("first :", products.name)
    return (
      <div>
        <Link className='productLink' to='/'>Back to Result</Link>
        <div className='row top'>
          <div className='col-2'>
            <img className='large' src={products.image} alt={product.name}/>
          </div>
          <div className='col-1'>
            <ul>
              <li>
                <h1>{product.name}</h1>
              </li>
              <li>
                <Rating
                  rating={product.rating}
                  numReviews={product.numReviews}
                />
              </li>
              <li>Price : ${product.price}</li>
              <li>
                Description
               <p>{product.description}</p>
              </li>
            </ul>
          </div>
          <div className='col-1'>
            <div className='card card-body'>
              <ul>
                <li>
                  <div className='row'>
                    <div>Price</div>
                    <div>${product.price}</div>
                  </div>
                </li>
                <li>
                  <div className='row'>
                    <div>Status</div>
                    <div>
                      {product.countInStock> 0 ? (
                        <span className='success'>In Stock</span>
                      ) : (
                        <span className='error'>Out of Stock</span>
                      )}
                    </div>
                  </div>
                </li>
                <li>
                  <button className='primary block'>Add to Cart</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
  }
   
    
