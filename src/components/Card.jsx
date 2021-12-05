import React from "react";
import { FaStar } from "react-icons/fa";
import { StyledCard } from "./Styles/Card.styled";
import { Link } from "react-router-dom";

const Card = ({ item, rating }) => {
  return (
    <StyledCard>
      <div className="image-container">
        <img src={item.image} alt={item.title} loading="lazy" />
      </div>
      <p className="title"><Link to={`/shop/${item.id}`}> {item.title}</Link></p>
      <p className="price">${item.price}</p>
      <p className="rating">
        Rating: {rating.rate}
        <FaStar />
      </p>
    </StyledCard>
  );
};

export default Card;
