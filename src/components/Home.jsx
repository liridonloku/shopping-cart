import React from "react";
import { Link } from "react-router-dom";
import { StyledHome } from "./Styles/Home.styled";
import Shop from "./Shop";

const Home = () => {
  return (
    <StyledHome>
      <div className="container">
        <div className="left">
          <h2>Fake Store</h2>
          <p>Buy all the products</p>
          <button>
            <Link to="/shop" element={<Shop />}>
              SHOP
            </Link>
          </button>
        </div>
        <div className="right">
          <img src="https://fakestoreapi.com/icons/intro.svg" alt="intro svg" />
        </div>
      </div>
    </StyledHome>
  );
};

export default Home;
