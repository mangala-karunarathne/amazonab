import React from 'react'
import Rating from './Rating';

const Product = (props) => {
  const {product} = props;
  return (
    <div key={product._id} className="card">
        <a href={`/product-screen/${product._id}`}>
            <img className="medium" src={product.image}  alt={product.name}/>
        </a>
        <div className="card-body">
            <a href={`/product-screen/${product._id}`}>
                {/* <img className="medium" src={product.image}  alt={product.name}/> */}
                <h2>{product.name}</h2>
            </a>
            <Rating rating={product.rating} numReviews={product.numReviews}/>
        </div>
        <div className="price"> ${product.price}</div>
     </div>
    );
}

export default Product