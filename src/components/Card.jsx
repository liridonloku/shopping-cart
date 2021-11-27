import React from "react";
import { StyledCard } from "./Styles/Card.styled";

const Card = ({ item }) => {
  return (
    <StyledCard key={item.id}>
      <img src={item.image} alt={item.title} />
      <p className="title">{item.title}</p>
    </StyledCard>
  );
};

export default Card;
