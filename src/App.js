import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <>
        <BrowserRouter>
        <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="/">amazonb</a>
                </div>
                <div>
                    <a href="/cart">Cart</a>
                    <a href="/signin">Sign In</a>
                </div>
            </header>
            <main>
                
                <Routes>
                    {/* <div> */}
                    {/* <Route path="/" component={ProductScreen}></Route> */}
                    <Route path="/" element={<HomeScreen/>} exact />
                    <Route path="/product/:id" element={<ProductScreen/>} />
                    {/* <Route path="/product/:id" render={(props) => <ProductScreen {...props}/>} /> */}
                    
                    {/* <Route path="/" component={ProductScreen} exact></Route> */}
                </Routes>
            </main>
            <footer className="row center">All right reserved</footer>
            </div>
        </BrowserRouter>
    </>
  );
}

export default App;
