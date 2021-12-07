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
    width: 100%;
    min-width: 540px;
    display: flex;
    align-items: center;
  }

  .items-title > div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: darkgrey;
  }

  .items-title > .details {
    justify-content: flex-start;
    padding-left: 30px;
    width: 60%;
  }

  .items-title > .quantity {
    justify-content: flex-start;
    width: 15%;
  }

  .price {
    width: 10%;
  }

  .total {
    width: 15%;
  }

  .summary {
    width: 30%;
  }

  @media (max-width: 800px) {
    justify-content: flex-start;
    overflow-x: scroll;
  }
`;
