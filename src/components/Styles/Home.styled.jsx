import styled from "styled-components";

export const StyledHome = styled.div`
  display: flex;
  justify-content: center;

  .container {
    display: flex;
  }

  .left {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    cursor: pointer;
  }

  button: hover {
    background-color: #002e6b;
  }

  button: active {
    transform: scale(0.95);
  }

  .right {
    width: 50%;
    padding: 20px;
  }

  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
  }

  @media (max-width: 500px) {
    .container {
      flex-direction: column;
      align-items: center;
    }

    .left {
      width: 100%;
    }

    .right {
      width: 100%;
    }
  }
`;
