import React from "react";
import { StyledItem } from "./Styles/Item.styled";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

//Single item page
const Item = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const product = await response.json();
      console.log(product);
      setItem(product);
      return product;
    };
    fetchProduct();
  }, [id]);

  const [item, setItem] = useState({});

  return (
    <StyledItem>
      {item.title ? (
        <div className="container">
          <div className="image-container">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="content">
            <div className="title">{item.title}</div>
            <div className="description">{item.description}</div>

            <div className="add">
              <label htmlFor="quantity">Quantity: </label>
              <input type="number" id="quantity" />
              <button>Add to Cart</button>
            </div>
            <div className="price-container">
              <p>Price:</p>
              <div className="price">US ${item.price}</div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </StyledItem>
  );
};

export default Item;
