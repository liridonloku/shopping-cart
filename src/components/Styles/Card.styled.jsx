import styled from "styled-components";

export const StyledCard = styled.div`
  height: 200px;
  width: 150px;
  padding: 5px;
  background-color: #ffffff;
  box-shadow: 0 0 5px black;
  border-radius: 5px;

  & img {
    height: 70%;
    width: 100%;
    object-fit: cover;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  & .title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
