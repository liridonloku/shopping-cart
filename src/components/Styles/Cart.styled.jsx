import styled from "styled-components";

export const StyledCart = styled.div`
  display: flex;
  justify-content: center;

  .container {
    width: 95%;
    min-width: 780px;
    max-width: 1200px;
    display: flex;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    margin-bottom: 15px;
  }

  .items {
    width: 70%;
  }

  .items-title {
    color: #6d326d;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px 20px;
  }

  .items-title::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 20px;
    right: 20px;
    height: 2px;
    background-color: #6d326d;
  }

  .items-descriptions {
    margin-top: 20px;
    width: 100%;
    min-width: 540px;
    display: flex;
    align-items: center;
  }

  .items-descriptions > div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #6d326d;
  }

  .items-descriptions > .details {
    justify-content: flex-start;
    padding-left: 30px;
    width: 60%;
  }

  .items-descriptions > .quantity {
    justify-content: center;
    width: 15%;
  }

  .price {
    width: 10%;
  }

  .total {
    width: 15%;
  }

  .summary {
    display: flex;
    flex-direction: column;
    width: 30%;
    background-color: #e5e5e5;
  }

  .summary-title {
    color: #6d326d;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px 20px;
  }

  .summary-title::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 20%;
    right: 20%;
    height: 2px;
    background-color: #6d326d;
  }

  .summary-content {
    display: flex;
    color: #6d326d;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-around;
    align-items: stretch;
  }

  .summary-items {
    display: flex;
    justify-content: space-around;
  }

  .summary-shipping {
    position: relative;
    display: flex;
    justify-content: space-around;
  }

  .summary-checkout {
    position: relative;
    padding: 10px 30px;
  }

  .summary-checkout::after {
    content: "";
    position: absolute;
    top: 0;
    left: 20%;
    right: 20%;
    height: 2px;
    background-color: #6d326d;
  }

  .summary-total {
    display: flex;
    justify-content: space-around;
  }

  button {
    padding: 10px 30px;
    font-weight: bold;
    font-size: 16px;
    border: none;
    background-color: #003f91;
    color: #ffffff;
    border-radius: 20px;
    margin-top: 10px;
    width: 100%;
    transition: 200ms;
  }

  button: hover {
    background-color: #002e6b;
  }

  button: active {
    transform: scale(0.9);
  }

  @media (max-width: 800px) {
    justify-content: flex-start;
    overflow-x: scroll;
  }
`;
