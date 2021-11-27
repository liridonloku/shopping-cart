import React from "react";
import { FaStar } from "react-icons/fa";
import { StyledCard } from "./Styles/Card.styled";

const Card = ({ item, rating }) => {
  return (
    <StyledCard>
      <div className="image-container">
        <img src={item.image} alt={item.title} loading="lazy" />
      </div>
      <p className="title">{item.title}</p>
      <p className="price">${item.price}</p>
      <p className="rating">
        Rating: {rating.rate}
        <FaStar />
      </p>
    </StyledCard>
  );
};

export default Card;
