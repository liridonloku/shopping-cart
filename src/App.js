import React from "react";
import { useState } from "react";
import "./App.css";
import { BrowserRouter as HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Item from "./components/Item";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (id, title, image, price, quantity) => {
    if (isNaN(quantity)) {
      return;
    }
    let newCart;
    if (cart.some((item) => item.id === id)) {
      newCart = cart.map((item) => {
        if (item.id === id) {
          return {
            id,
            title,
            image,
            price,
            quantity: parseInt(item.quantity) + quantity,
          };
        } else {
          return {
            id: item.id,
            title: item.title,
            image: item.image,
            price: item.price,
            quantity: item.quantity,
          };
        }
      });
    } else {
      newCart = [...cart, { id, title, image, price, quantity }];
    }
    setCart(newCart);
  };

  const changeQuantity = (id, quantity) => {
    if (quantity < 1) return;
    let newCart = cart.map((item) => {
      if (item.id === id) {
        return {
          id,
          title: item.title,
          image: item.image,
          price: item.price,
          quantity,
        };
      } else {
        return item;
      }
    });
    setCart(newCart);
  };

  const removeFromCart = (id) => {
    let newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  return (
    <HashRouter basename="/shopping-cart">
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<Item addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              changeQuantity={changeQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default App;
