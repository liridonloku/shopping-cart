import React from "react";

const Shop = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => console.log(json));
  return <div>Shop</div>;
};

export default Shop;
