import React from 'react';
import Product from '../components/Product';
import Rating from '../components/Rating';
import data from '../data';
import '../index.css';

function HomeScreen() {

  return (
            <div className="row center">
            {
                data.products.map((product) =>(
                    <Product key={product._id} product={product}/>
                ))
            }
            </div>        
  );
}
export default HomeScreen
