import React from "react";
import { StyledCartItem } from "./Styles/CartItem.styled";

const CartItem = ({ item }) => {
  return (
    <StyledCartItem>
      <p>{item.title}</p>
      <p>{item.price}</p>
    </StyledCartItem>
  );
};

export default CartItem;
