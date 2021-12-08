import React from "react";
import { StyledHome } from "./Styles/Home.styled";

const Home = () => {
  return (
    <StyledHome>
      <div className="container">
        <div className="left">
          <h2>Fake Store</h2>
          <p>Buy all the products</p>
          <button>SHOP</button>
        </div>
        <div className="right">
          <img src="https://fakestoreapi.com/icons/intro.svg" alt="intro svg" />
        </div>
      </div>
    </StyledHome>
  );
};

export default Home;
