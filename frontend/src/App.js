import React from "react";
import Nav from "./components/Nav";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";

function App() {

  return (
    <Router>
      <div className="App">

      <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product/:id" element={<ProductPage/>}/>
          <Route path="/cart/:id" element={<CartPage />} />
          <Route path="/cart" element={<CartPage/>} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
