import React from "react";
import { StyledItem } from "./Styles/Item.styled";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { FaStar } from "react-icons/fa";

//Single item page
const Item = (props) => {
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
            <p className="title">{item.title}</p>
            <p className="description">{item.description}</p>
            <p className="rating">
              Rating: {item.rating.rate}
              <FaStar /> ({item.rating.count} votes)
            </p>

            <div className="add">
              <label htmlFor="quantity">Quantity: </label>
              <input
                type="number"
                id="quantity"
                onInput={() => {
                  const input = document.getElementById("quantity");
                  input.value = input.value
                    .replace(/[^0-9.]/g, "")
                    .replace(/(\..*)\./g, "$1");
                }}
              />
              <button
                onClick={() => {
                  let quantity = parseInt(
                    document.getElementById("quantity").value
                  );
                  props.addToCart(
                    item.id,
                    item.title,
                    item.image,
                    item.price,
                    quantity
                  );
                }}
              >
                Add to Cart
              </button>
            </div>
            <div className="price-container">
              <p>Price:</p>
              <p className="price">US ${item.price}</p>
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
