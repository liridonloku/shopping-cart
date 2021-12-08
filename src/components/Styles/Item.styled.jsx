import styled from "styled-components";

export const StyledItem = styled.div`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 120px);

  .container {
    display: flex;
    width: 97vw;
    max-width: 900px;
    border: 1px solid #e5e5e5;
  }

  .image-container {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-shrink: 0;
  }

  img {
    padding: 5px;
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
  }

  .content {
    margin-left: 20px;
    padding: 5px;
  }

  .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .description {
    color: #333333;
    margin-bottom: 15px;
  }

  .rating {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  .rating > svg {
    margin: 0 3px;
    color: orange;
  }

  .add {
    margin-bottom: 20px;
  }

  label {
    color: #333333;
  }

  input {
    max-width: 80px;
    margin-right: 5px;
    padding: 6px 2px;
  }

  button {
    padding: 10px 30px;
    font-weight: bold;
    font-size: 16px;
    border: none;
    background-color: #003f91;
    color: #ffffff;
    border-radius: 20px;
  }

  button: hover {
    background-color: #002e6b;
  }

  button: active {
    transform: scale(0.95);
  }

  .price-container {
    display: flex;
    color: #333333;
  }

  .price {
    font-size: 24px;
    font-weight: bold;
    margin-left: 10px;
    margin-bottom: 15px;
    color: #111820de;
  }

  @media (max-width: 450px) {
    .container {
      flex-direction: column;
      align-items: center;
    }

    .image-container {
      width: 50%;
    }

    input {
      margin-bottom: 5px;
    }
  }
`;
