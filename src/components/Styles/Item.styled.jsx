import styled from "styled-components";

export const StyledItem = styled.div`
  display: flex;
  justify-content: center;

  .container {
    display: flex;
    max-width: 900px;
    border: 1px solid #e5e5e5;
  }

  .image-container {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
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
