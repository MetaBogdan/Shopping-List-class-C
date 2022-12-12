import React from "react";

import styled from "styled-components";

export const СhannelLink = styled.div`
   {
    display: flex;
    justify-content: center;
    align-items: center;
    color: blue;
    font-weight: bold,
    font-size: 15px,
    font-family: "monospace",
  }
`;
export const Footer = () => {
  return (
    <СhannelLink>
      <a href="https://github.com/MetaBogdan/" target="_blank" rel="noreferrer">
        Git Bogdan Voznyi
      </a>
    </СhannelLink>
  );
};

export default Footer;
