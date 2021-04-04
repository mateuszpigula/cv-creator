import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  padding: 1em 2em;
  margin: 1em 1em 2em;
  border-radius: 3px;
  background: #fefefe;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 2px 4px 4px 0px black;
  border: none;

  &:hover {
    transform: translateY(1px);
  }
`;
export const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
