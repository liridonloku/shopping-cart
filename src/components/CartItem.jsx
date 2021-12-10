import React from "react";
import { Link } from "react-router-dom";
import { StyledCartItem } from "./Styles/CartItem.styled";

const CartItem = ({ item, changeQuantity, removeFromCart }) => {
  return (
    <StyledCartItem>
      <div className="image-container">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="description">
        <p className="title">
          <Link to={`/shop/${item.id}`}> {item.title}</Link>
        </p>
        <p
          className="remove"
          data-id={item.id}
          onClick={(e) => {
            removeFromCart(parseInt(e.target.getAttribute("data-id")));
          }}
        >
          Remove
        </p>
      </div>
      <div className="quantity">
        <div
          className="sign"
          data-id={item.id}
          onClick={(e) => {
            changeQuantity(
              parseInt(e.target.getAttribute("data-id")),
              item.quantity - 1
            );
          }}
        >
          -
        </div>
        <input
          type="number"
          id="quantity"
          data-id={item.id}
          value={item.quantity}
          onInput={() => {
            const input = document.getElementById("quantity");
            input.value = input.value
              .replace(/[^0-9.]/g, "")
              .replace(/(\..*)\./g, "$1");
          }}
        />
        <div
          className="sign"
          data-id={item.id}
          onClick={(e) => {
            changeQuantity(
              parseInt(e.target.getAttribute("data-id")),
              item.quantity + 1
            );
          }}
        >
          +
        </div>
      </div>
      <div className="price">${item.price}</div>
      <div className="total">
        ${parseFloat(item.quantity * item.price).toFixed(2)}
      </div>
    </StyledCartItem>
  );
};

export default CartItem;
