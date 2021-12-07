import React from "react";
import { StyledCart } from "./Styles/Cart.styled";
import CartItem from "./CartItem";

const Cart = ({ cart }) => {
  console.log(cart);
  const render = cart.map((item) => {
    return <CartItem item={item} key={item.id} />;
  });

  return <StyledCart>{render}</StyledCart>;
};

export default Cart;
