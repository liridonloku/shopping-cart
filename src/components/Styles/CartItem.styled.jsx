import styled from "styled-components";

export const StyledCartItem = styled.div`
  display: flex;
  align-items: center;
  min-width: 540px;
  height: 172px;

  .image-container {
    width: 20%;
    padding: 15px;
  }

  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
  }

  .description {
    width: 40%;
    align-self: stretch;
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .title {
    font-weight: bold;
  }

  .title > a {
    text-decoration: none;
    color: black;
  }

  .remove {
    color: darkgrey;
    cursor: pointer;
    align-self: flex-start;
  }

  .quantity {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
  }

  input {
    padding: 0 2px;
    margin: 0 5px;
    width: 40%;
    height: 30%;
  }

  /* Remove arrows - Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Remove arrows - Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  .sign {
    font-weight: bold;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    user-select: none;
  }

  .sign:hover {
    transform: scale(1.5);
    text-shadow: 0 0 100px black;
  }

  .price {
    width: 10%;
    text-align: center;
  }

  .total {
    width: 15%;
    text-align: center;
  }
`;
