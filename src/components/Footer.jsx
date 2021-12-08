import React from "react";
import { FaGithub } from "react-icons/fa";
import { StyledFooter } from "./Styles/Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <a href="https://www.github.com/liridonloku">
        <FaGithub />
        liridonloku
      </a>
      , December 2021
    </StyledFooter>
  );
};

export default Footer;
