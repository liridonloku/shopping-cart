import styled from "styled-components";

export const StyledHeader = styled.header`
  min-height: 40px;
  background: rgb(93, 169, 233);
  background: linear-gradient(
    180deg,
    rgba(93, 169, 233, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  color: #6d326d;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  margin-bottom: 10px;
  justify-content: space-between;

  & nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  & nav > a {
    text-decoration: none;
    margin-right: 15px;
  }

  @media (max-width: 450px) {
    & {
      flex-direction: column;
      justify-content: center;
      align-items: stretch;
      text-align: center;
    }
  }
`;
