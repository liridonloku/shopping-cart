import React from "react";
import { useState, useEffect } from "react";

const Shop = () => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const [items, setItems] = useState([""]);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    console.log(products);
    setItems(products);
    return products;
  };

  return (
    <div>
      <img
        src={items[0].image}
        width="100px"
        height="100px"
        style={{ objectFit: "cover" }}
        alt=""
      />
    </div>
  );
};

export default Shop;
