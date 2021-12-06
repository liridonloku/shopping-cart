import React from "react";
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Item from "./components/Item";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (id, quantity) => {
    let newCart;
    if (cart.length > 0) {
      newCart = cart.map((item) => {
        if (item.id === id) {
          return { id, quantity: parseInt(item.quantity) + quantity };
        }
        return { id, quantity };
      });
    } else {
      newCart = [{ id, quantity }];
    }
    setCart(newCart);
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<Item addToCart={addToCart} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
