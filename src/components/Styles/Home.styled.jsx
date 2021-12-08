import styled from "styled-components";

export const StyledHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 120px);

  .container {
    flex-basis: 1200px;
    height: 80%;
    max-height: 500px;
    max-width: 1200px;
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
    padding: 20px 60px;
    font-weight: bold;
    font-size: 24px;
    border: none;
    background-color: #003f91;
    color: #ffffff;
    border-radius: 30px;
    margin-top: 10px;
    cursor: pointer;
  }

  button: hover {
    background-color: #002e6b;
  }

  button: active {
    transform: scale(0.95);
  }

  a {
    text-decoration: none;
    color: white;
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
