import React from "react";
import { StyledCartItem } from "./Styles/CartItem.styled";

const CartItem = ({ item }) => {
  return (
    <StyledCartItem>
      <div className="image-container">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="description">
        <p className="title">{item.title}</p>
        <p className="remove" data-id={item.id}>
          Remove
        </p>
      </div>
      <div className="quantity">
        <div className="sign">-</div>
        <input
          type="number"
          id="quantity"
          value={item.quantity}
          onInput={() => {
            const input = document.getElementById("quantity");
            input.value = input.value
              .replace(/[^0-9.]/g, "")
              .replace(/(\..*)\./g, "$1");
          }}
        />
        <div className="sign">+</div>
      </div>
      <div className="price">${item.price}</div>
      <div className="total">${item.quantity * item.price}</div>
    </StyledCartItem>
  );
};

export default CartItem;
