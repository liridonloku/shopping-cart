import React from "react";
import { StyledCart } from "./Styles/Cart.styled";
import CartItem from "./CartItem";

const Cart = ({ cart }) => {
  let quantity = 0;
  let total = 0;
  cart.forEach((element) => {
    quantity += element.quantity;
    total += element.quantity * element.price;
  });

  const render = cart.map((item) => {
    return <CartItem item={item} key={item.id} />;
  });

  return (
    <StyledCart>
      <div className="container">
        <div className="items">
          <div className="items-title">
            <h2>Shopping Cart</h2>
            <h2>{quantity} Items</h2>
          </div>
          <div className="items-descriptions">
            <div className="details">PRODUCT DETAILS</div>
            <div className="quantity">QUANTITY</div>
            <div className="price">PRICE</div>
            <div className="total">TOTAL</div>
          </div>
          {render}
        </div>
        <div className="summary">
          <div className="summary-title">
            <h2>Order Summary</h2>
          </div>
          <div className="summary-content">
            <div className="summary-items">
              <h4>ITEMS {quantity}</h4>
              <h4>${total}</h4>
            </div>
            <div className="summary-shipping">
              <h4>Shipping</h4>
              <h4>Free</h4>
            </div>
            <div className="summary-checkout">
              <div className="summary-total">
                <h4>Total cost</h4>
                <h4>${total}</h4>
              </div>
              <button>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </StyledCart>
  );
};

export default Cart;
