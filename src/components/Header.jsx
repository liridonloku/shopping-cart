import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import { StyledHeader } from "./Styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <h1>Fake Shop</h1>
      <nav>
        <Link to="/" element={<Home />}>
          Home
        </Link>
        <Link to="/shop" element={<Shop />}>
          Shop
        </Link>
        <Link to="/cart" element={<Cart />}>
          <FaShoppingCart color="#003F91" />
        </Link>
      </nav>
    </StyledHeader>
  );
};

export default Header;
