import React from "react";
import { useState, useEffect } from "react";
import { StyledShop } from "./Styles/Shop.styled";

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
    <StyledShop>
      <img
        src={items[0].image}
        width="100px"
        height="100px"
        style={{ objectFit: "cover" }}
        alt=""
      />
    </StyledShop>
  );
};

export default Shop;
