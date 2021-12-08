import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import { StyledHeader } from "./Styles/Header.styled";

const Header = ({ cart }) => {
  let quantity = 0;
  cart.forEach((element) => {
    quantity += element.quantity;
  });

  return (
    <StyledHeader>
      <h1>
        <Link to="/" element={<Home />}>
          Fake Shop
        </Link>
      </h1>
      <nav>
        <Link to="/" element={<Home />}>
          Home
        </Link>
        <Link to="/shop" element={<Shop />}>
          Shop
        </Link>
        <Link to="/cart" element={<Cart />}>
          <FaShoppingCart color="#003F91" />{" "}
          {quantity > 0 ? <div>({quantity})</div> : <div></div>}
        </Link>
      </nav>
    </StyledHeader>
  );
};

export default Header;
