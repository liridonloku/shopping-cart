import styled from "styled-components";

export const StyledCard = styled.div`
  width: 24%;
  height: 400px;
  padding: 5px;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  margin-bottom: 15px;

  & .image-container {
    height: 70%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
  }

  & div > img {
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
    cursor: pointer;
  }

  & .title {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    text-align: center;
    max-height: 60px;
    cursor: pointer;
    word-break: break-word;
    margin-bottom: 5px;
    overflow-y: hidden;
  }

  & .title:hover {
    text-decoration: underline;
  }

  & .price {
    font-weight: bold;
    cursor: default;
  }

  & .rating {
    display: flex;
    align-items: center;
    cursor: default;
  }

  & .rating > svg {
    margin-left: 3px;
    color: orange;
  }

  @media (max-width: 1000px) {
    & {
      width: 31%;
    }
  }
`;
