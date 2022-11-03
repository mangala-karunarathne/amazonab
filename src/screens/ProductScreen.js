import React from 'react';
import '../index.css';
import data from '../data';
import Rating from '../components/Rating';
import { useParams, withRouter } from "react-router-dom";


export default function ProductScreen(props) {
  let {id}=useParams()
  const product = data.products.find((x) => x._id === id);
  if(!product) {
    return <div> Product Not Found</div>
  } else {
    console.log("first :", product.name)
    return (
      <div>
        <div className='row'>
          <div className='col-2'>
            <img className='large' src={product.image} alt={product.name}/>
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
              <li>Price : $(product.price)</li>
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