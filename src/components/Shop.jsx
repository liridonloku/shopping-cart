import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";
import { StyledShop } from "./Styles/Shop.styled";

const Shop = () => {
  const [items, setItems] = useState([""]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    console.log(products);
    setItems(products);
    return products;
  };

  return (
    <StyledShop>
      {items.length > 1 ? (
        items.map((item) => {
          return (
            <Card
              item={item}
              key={item.id || "0"}
              rating={item.rating || "0.00"}
            />
          );
        })
      ) : (
        <div></div>
      )}
    </StyledShop>
  );
};

export default Shop;
