import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";
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
      {items.map((item) => {
        return <Card item={item} key={item.id} />;
      })}
    </StyledShop>
  );
};

export default Shop;
