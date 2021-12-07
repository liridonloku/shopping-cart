import React from "react";
import { StyledCart } from "./Styles/Cart.styled";
import CartItem from "./CartItem";

const Cart = ({ cart }) => {
  const quantity = cart.reduce(
    (prev, next) => prev.quantity + next.quantity,
    0
  );
  const total = cart.reduce(
    (prev, next) => prev.quantity * prev.price + next.quantity * next.price,
    0
  );
  const render = cart.map((item) => {
    return <CartItem item={item} key={item.id} />;
  });

  return (
    <StyledCart>
      <div className="container">
        <div className="items">
          <div className="items-title">
            <div className="details">PRODUCT DETAILS</div>
            <div className="quantity">QUANTITY</div>
            <div className="price">PRICE</div>
            <div className="total">TOTAL</div>
          </div>
          {render}
        </div>
        <div className="summary">
          Quantity: {quantity} Total: {total}
        </div>
      </div>
    </StyledCart>
  );
};

export default Cart;
